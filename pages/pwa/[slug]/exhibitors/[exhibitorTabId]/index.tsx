import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import { PAGES_QUERY } from 'lib/queries/pages';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';
import { sanitiseURLParam } from '@/utils/helpers';
import { getJwt } from 'utils/helpers'
import { theme } from '@/lib/theme';
import { getExhibitorsPageData } from '@/lib/queries/exhibitors-page';
import { getExhibitorTabData } from '@/lib/queries/exhibitors';

const Layout = dnmc(() => import('components/Layout/pwa'));
const Exhibitors = dnmc(() => import('@/components/Pages/Exhibitors'));

export interface Props {
  data: any
  error?: ErrorPageTemplateProps
  navigationData: NavigationData
  logo?: any
  loginRequired?: boolean
}

export default function Page({
  data,
  error,
  navigationData,
  logo,
  loginRequired,
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
      <Exhibitors data={data} loginRequired={loginRequired} />
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
    const pageSlug = params.exhibitorTabId;

    const navigationData = await fetchNavigation(true);
    let data = await getExhibitorsPageData(slug, jwt);
    let loginRequired = false;

    try {
      data.exhibitors = await getExhibitorTabData(slug as any, pageSlug as any, jwt)
    } catch (err: any) {
      if (err.status === 401) loginRequired = true;
    }

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
          loginRequired: loginRequired,
        }
      }
    }
  } catch (error) {
    return nextApolloPageError(error, '/');
  }
}