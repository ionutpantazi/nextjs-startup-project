import { GetServerSideProps } from 'next';
import dnmc from 'next/dynamic'
import { initializeApollo } from '@/lib/apolloClient';
import { nextApolloPageError } from '@/lib/serverHelpers';
import { HOMEPAGE_QUERY } from '@/lib/queries/homepage';

const Layout = dnmc(() => import('@/components/Layout'));

export interface Props {
  data: any
}

export default function Homepage({
  data
}: Props) {
  return (
    <div>
      <Layout
        title={data.title}
      >
      </Layout>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const apolloClient = initializeApollo();
    const { data: {homepage: {data: {attributes}}} } = await apolloClient.query({
      query: HOMEPAGE_QUERY
    })
    return {
      props: {
        data: attributes
      }
    }
  } catch (error) {
    return nextApolloPageError(error, '/');
  }
}