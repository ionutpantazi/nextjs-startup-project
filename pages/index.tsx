import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { initializeApollo } from 'lib/apolloClient';
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import { HOMEPAGE_QUERY } from 'lib/queries/homepage';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';

const Layout = dnmc(() => import('components/Layout'));
const PageContent = dnmc(() => import('components/PageContent'));

export interface Props {
  data: any
  error?: ErrorPageTemplateProps
  navigationData: NavigationData
}

export default function Homepage({
  data,
  error,
  navigationData,
}: Props) {
  if (error) {
    return <ErrorPageTemplate statusCode={error.statusCode} errorMessage={error.errorMessage} />
  }
  return (
    <Layout
      title={data?.Title}
      navigationData={navigationData}
      seoMeta={data?.SEO_Meta[0]}
    >
      <PageContent data={data.Page_Content} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const apolloClient = initializeApollo();
    const navigationData = await fetchNavigation();
    const { data: { homepage: { data: { attributes } } } } = await apolloClient.query({
      query: HOMEPAGE_QUERY
    })
    console.log(navigationData)
    return {
      props: {
        data: attributes,
        navigationData: navigationData,
      }
    }
  } catch (error) {
    return nextApolloPageError(error, '/');
  }
}