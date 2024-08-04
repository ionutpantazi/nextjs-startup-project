import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';
import { getBreakoutsPageData } from 'lib/queries/breakouts-page'
import { getJwt, generateThemeData } from 'utils/helpers'
import ToastContainer from '@/components/StrapiComponents/PwaComponents/Common/Toast';

const Layout = dnmc(() => import('components/StrapiComponents/PwaComponents/Layout'));
const Breakouts = dnmc(() => import('@/components/Pages/Breakouts'));

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

  const { themeData, themeMeta } = generateThemeData(data)

  return (
    <Layout
      title={data?.event?.title}
      navigationData={navigationData}
      customTheme={themeData}
      themedata={null}
      themeMeta={themeMeta}
      logo={logo}
    // seoMeta={data?.SEO_Meta[0]}
    >
      <Breakouts data={data} />
      <ToastContainer />
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
    const pageSlug = params.id;

    const navigationData = await fetchNavigation(true);
    let data = await getBreakoutsPageData(slug, pageSlug, jwt)
    console.log("page data", data)
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