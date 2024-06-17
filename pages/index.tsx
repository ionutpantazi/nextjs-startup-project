import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { initializeApollo } from 'lib/apolloClient';
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import { HOMEPAGE_QUERY } from 'lib/queries/homepage';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';
import { hasCookie, getCookie, setCookie } from 'cookies-next';
import { fetchUserData } from 'lib/queries/settings'
import { PAGES_QUERY } from 'lib/queries/pages';
import { fetchSettings, SettingsProps } from 'lib/queries/settings'

const Layout = dnmc(() => import('components/Layout'));
const PageContent = dnmc(() => import('components/PageContent'));

export interface Props {
  data: any
  error?: ErrorPageTemplateProps
  navigationData: NavigationData
  settings: SettingsProps
}

export default function Homepage({
  data,
  error,
  navigationData,
  settings,
}: Props) {
  if (error) {
    return <ErrorPageTemplate statusCode={error.statusCode} errorMessage={error.errorMessage} />
  }
  return (
    <Layout
      title={data?.Title}
      navigationData={navigationData}
      customTheme={data.Theme?.data?.attributes?.Data}
      themedata={data.Theme?.data?.attributes}
      settings={settings}
    // seoMeta={data?.SEO_Meta[0]}
    >
      <PageContent data={data.Page_Content} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<any> = async ({ req, res }) => {
  try {
    const apolloClient = initializeApollo();
    const navigationData = await fetchNavigation();
    let user = getCookie('user', { req, res })
    const settings = await fetchSettings();

    if (user) {
      let userData = JSON.parse(user)
      let data = await fetchUserData(userData.email)
      if (data?.attributes?.Homepage) {
        let homepage = data.attributes.Homepage
        let homepageSlug = homepage?.data?.attributes?.Slug
        if (homepageSlug) {
          const { data: { pages: { data } } } = await apolloClient.query({
            query: PAGES_QUERY,
            variables: {
              "filters": {
                "Slug": {
                  "eq": homepageSlug
                }
              }
            },
          })
          if (data.length) {
            let attributes = data[0].attributes;
            return {
              props: {
                data: attributes,
                navigationData: attributes.Navigation,
                settings: settings,
              }
            }
          }
        }
      }
    }
    const { data: { homepage: { data: { attributes } } } } = await apolloClient.query({
      query: HOMEPAGE_QUERY
    })
    return {
      props: {
        data: attributes,
        navigationData: navigationData,
        settings: settings,
      }
    }
  } catch (error) {
    return nextApolloPageError(error, '/');
  }
}