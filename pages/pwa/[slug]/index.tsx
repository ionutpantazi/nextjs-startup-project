import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';
import { getPageData } from 'lib/queries/page-data'
import { getJwt, generateThemeData } from 'utils/helpers'

const Layout = dnmc(() => import('components/StrapiComponents/PwaComponents/Layout'));
const DynamicContent = dnmc(() => import('components/StrapiComponents/PwaComponents/Homepage'));

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
      logo={logo}
      themeMeta={themeMeta}
    // seoMeta={data?.SEO_Meta[0]}
    >
      <DynamicContent data={data} />
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
    const slug = query.slug;
    
    let segment0 = slug;
    if(typeof slug == 'object'){
      segment0 = slug[0];
    }

    const navigationData = await fetchNavigation(true);
    let data = await getPageData(segment0, jwt)
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