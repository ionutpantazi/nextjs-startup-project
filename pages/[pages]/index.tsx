import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { initializeApollo } from 'lib/apolloClient';
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import { PAGES_QUERY } from 'lib/queries/pages';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';
import { sanitiseURLParam } from '@/utils/helpers';
import { fetchSettings, SettingsProps } from 'lib/queries/settings'

const Layout = dnmc(() => import('components/Layout'));
const PageContent = dnmc(() => import('components/PageContent'));

export interface Props {
  data: any
  error?: ErrorPageTemplateProps
  navigationData: NavigationData
  settings: SettingsProps
}

export default function Page({
  data,
  error,
  navigationData,
  settings,
}: Props) {
  if (error) {
    return <ErrorPageTemplate statusCode={error.statusCode} errorMessage={error.errorMessage} />
  }
  if (!data) {
    return <></>
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

export const getServerSideProps: GetServerSideProps<any> = async ({
  query,
  res,
  req,
}) => {
  try {
    let scheme = req.headers['x-forwarded-proto'];
    let host = `${scheme}://${req.headers.host}`
    const slug = typeof query.pages === 'string' ? query.pages : null;
    if (slug == 'favicon.ico') {
      return { props: {} }
    }
    const apolloClient = initializeApollo();
    // const navigationData = await fetchNavigation();
    const settings = await fetchSettings();
    const { data: { pages: { data } } } = await apolloClient.query({
      query: PAGES_QUERY,
      variables: {
        "filters": {
          "Slug": {
            "eq": slug
          }
        }
      },
    })
    if (!data.length) {
      return {
        props: {
          error: {
            statusCode: 404
          }
        }
      }
    } else {
      let attributes = data[0].attributes;
      return {
        props: {
          data: attributes,
          navigationData: attributes.Navigation,
          settings: settings,
        }
      }
    }
  } catch (error) {
    return nextApolloPageError(error, '/');
  }
}