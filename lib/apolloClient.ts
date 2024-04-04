import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
    NormalizedCacheObject,
    HttpLink
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

function createApolloClient() {
    const httpLink = new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`
    });
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: httpLink,
        cache: new InMemoryCache(),
    });
}

export function initializeApollo() {
    const _apolloClient = apolloClient ?? createApolloClient();
    return _apolloClient;
}