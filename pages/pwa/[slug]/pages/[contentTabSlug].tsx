import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';
import { getJwt } from 'utils/helpers'
import { getContentTabPageData } from '@/lib/queries/content-tabs-page';
import ContentPages from '@/components/Pages/ContentPages';

const Layout = dnmc(() => import('components/Layout/pwa'));

export interface Props {
  data: any
  error?: ErrorPageTemplateProps
  navigationData: NavigationData
  logo?: any
}

export default function Page({
  data,
  error,
  navigationData,
  logo,
}: Props) {

  if (error) {
    return <ErrorPageTemplate statusCode={error.statusCode} errorMessage={error.errorMessage} />
  }
  // console.log(data)

  let themeData = null

  if (data?.event?.themeData?.data) {
    if (typeof (JSON.parse(JSON.parse(data?.event?.themeData?.data))) == 'object') {
      themeData = JSON.parse(JSON.parse(data?.event?.themeData?.data))
    }
  }

  return (
    <Layout
      title={data?.event?.title}
      navigationData={navigationData}
      customTheme={themeData}
      themedata={null}
      logo={logo}
    // seoMeta={data?.SEO_Meta[0]}
    >
      <ContentPages data={data} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<any> = async ({
  params,
  res,
  req,
}) => {
  try {
    const jwt = getJwt(req, res)
    
    if (!params) {
      return {
        props: {
          error: {
            statusCode: 404
          }
        }
      }
    };

    const slug = params.slug;
    const pageSlug = params.contentTabSlug;

    const navigationData = await fetchNavigation(true);
    let data = await getContentTabPageData(slug, pageSlug, jwt);
    let logo = data?.event.logo;
    if (!data?.event?.eventId) {
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
          navigationData: data.resource?.navigation ?? navigationData,
          logo: logo,
        }
      }
    }
  } catch (error) {
    return nextApolloPageError(error, '/');
  }
}