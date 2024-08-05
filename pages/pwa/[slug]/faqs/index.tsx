import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import { PAGES_QUERY } from 'lib/queries/pages';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';
import { sanitiseURLParam } from '@/utils/helpers';
import { getFaqsPageData } from 'lib/queries/faqs-page'
import { getJwt, generateThemeData } from 'utils/helpers'

const Layout = dnmc(() => import('components/StrapiComponents/PwaComponents/Layout'));
const FAQs = dnmc(() => import('@/components/Pages/FAQs'));

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
  const userLoggedInFromApi = data.resource.user

  return (
    <Layout
      title={data?.event?.title}
      navigationData={navigationData}
      customTheme={themeData}
      themedata={null}
      logo={logo}
      themeMeta={themeMeta}
      userLoggedInFromApi={userLoggedInFromApi}
    // seoMeta={data?.SEO_Meta[0]}
    >
      <FAQs data={data} />
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
    const navigationData = await fetchNavigation(true);
    let data = await getFaqsPageData(slug, jwt)
    console.log(data);
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