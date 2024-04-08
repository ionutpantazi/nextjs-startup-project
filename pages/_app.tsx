import { ApolloProvider } from "@apollo/client"
import { useApollo } from "lib/apolloClient"
import type { AppProps } from "next/app"

import '../global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initializeApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      da
    </ApolloProvider>
  )
}

export default MyApp