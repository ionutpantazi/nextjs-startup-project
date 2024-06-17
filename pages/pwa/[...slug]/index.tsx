import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { initializeApollo } from 'lib/apolloClient';
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import { PAGES_QUERY } from 'lib/queries/pages';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';
import { sanitiseURLParam } from '@/utils/helpers';
import { getEventData } from 'lib/queries/event'

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
      themedata={data.Theme?.data?.attributes}
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
    const navigationData = await fetchNavigation();
    const slug = typeof query.slug === 'object' ? query.slug : [];
    let segment0 = slug[0];
    let segment1 = slug[1];
    let data = getEventData(segment0)
    console.log(data)
    return {
      props: {
        data: [],
        navigationData: navigationData,
      }
    }
  } catch (error) {
    return nextApolloPageError(error, '/');
  }
}