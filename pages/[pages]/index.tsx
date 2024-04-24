import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { initializeApollo } from 'lib/apolloClient';
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import { PAGES_QUERY } from 'lib/queries/pages';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';
import { sanitiseURLParam } from '@/utils/helpers';

const Layout = dnmc(() => import('components/Layout'));
const PageContent = dnmc(() => import('components/PageContent'));

export interface Props {
  data: any
  error?: ErrorPageTemplateProps
  navigationData: NavigationData
}

export default function Page({
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
      customTheme={data.Theme?.data?.attributes?.Data}
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
    const apolloClient = initializeApollo();
    const navigationData = await fetchNavigation();
    const slug = typeof query.pages === 'string' ? query.pages : null;
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
      // console.log(attributes)
      return {
        props: {
          data: attributes,
          navigationData: navigationData,
        }
      }
    }
  } catch (error) {
    return nextApolloPageError(error, '/');
  }
}