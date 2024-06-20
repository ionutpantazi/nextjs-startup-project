import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { initializeApollo } from 'lib/apolloClient';
import { fetchNavigation, NavigationData } from 'lib/queries/nav-data'
import { nextApolloPageError } from 'lib/serverHelpers';
import { PAGES_QUERY } from 'lib/queries/pages';
import ErrorPageTemplate, { ErrorPageTemplateProps } from 'components/ErrorPageTemplate';
import { sanitiseURLParam } from '@/utils/helpers';
import { getPageData } from 'lib/queries/page-data'
import { getJwt } from 'utils/helpers'
import { theme } from '@/lib/theme';

const Layout = dnmc(() => import('components/Layout/pwa'));
const PwaContent = dnmc(() => import('components/PageContent/pwaContent'));

export interface Props {
  data: any
  error?: ErrorPageTemplateProps
  navigationData: NavigationData
}

function uppercaseFirstLetterOfKeys<T extends Record<string, any>>(obj: T): T {
  const result = {} as any;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = key.charAt(0).toUpperCase() + key.slice(1);
      result[newKey] = obj[key];
    }
  }
  return result;
}

function updateComponentStyles(data: any): any {
  if (data.componentStyles) {
    data.componentStyles = uppercaseFirstLetterOfKeys(data.componentStyles);
  }
  return data;
}

export default function Page({
  data,
  error,
  navigationData,
}: Props) {
  if (error) {
    return <ErrorPageTemplate statusCode={error.statusCode} errorMessage={error.errorMessage} />
  }
  // console.log(data)

  let themeData = null

  if (data?.resource?.theme) {
    themeData = updateComponentStyles(data?.resource?.theme)
    for (const key of Object.keys(themeData)) {
      if (key.includes('colours')) {
        themeData[key.replace('colours', 'colors')] = themeData[key];
        delete themeData[key];
      }
      if (key.includes('componentStyles')) {
        for (const key2 of Object.keys(themeData[key])) {
          themeData[key2.charAt(0).toUpperCase() + key2.slice(1)] = themeData[key2];
          delete themeData[key2];
        }
        themeData[key.replace('componentStyles', 'components')] = themeData[key];
        delete themeData[key];
      }
    }
    for (const [key, value] of Object.entries(themeData.colors.colours)) {
      themeData.colors[key] = value
    }
  }

  return (
    <Layout
      title={data?.event?.title}
      navigationData={navigationData}
      customTheme={themeData}
      themedata={null}
    // seoMeta={data?.SEO_Meta[0]}
    >
      <PwaContent data={data} />
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
    let data = await getPageData(segment0, jwt)
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
        }
      }
    }
  } catch (error) {
    return nextApolloPageError(error, '/');
  }
}