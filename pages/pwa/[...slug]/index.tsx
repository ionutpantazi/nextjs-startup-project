import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { initializeApollo } from 'lib/apolloClient';
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import { PAGES_QUERY } from 'lib/queries/pages';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';
import { sanitiseURLParam } from '@/utils/helpers';
import { getEventData } from 'lib/queries/event'
import { getJwt } from 'utils/helpers'

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
      title={data?.title}
      navigationData={navigationData}
    // customTheme={data.Theme?.data?.attributes?.Data}
    // themedata={data.Theme?.data?.attributes}
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
    const jwt = getJwt(req, res)
    const navigationData = await fetchNavigation();
    const slug = typeof query.slug === 'object' ? query.slug : [];
    let segment0 = slug[0];
    let segment1 = slug[1];
    let data = await getEventData(segment0, jwt)
    console.log(segment0, segment1)
    console.log(data)
    if (!data.eventId) {
      return {
        props: {
          error: {
            statusCode: 404
          }
        }
      }
    } else {
      return {
        props: {
          data: data,
          navigationData: navigationData,
        }
      }
    }
  } catch (error) {
    return nextApolloPageError(error, '/');
  }
}