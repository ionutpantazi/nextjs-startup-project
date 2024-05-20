import { ApolloProvider } from "@apollo/client"
import { useApollo } from "lib/apolloClient"
import type { AppProps } from "next/app"
const { library } = require('@fortawesome/fontawesome-svg-core');
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import '../styles/global.css'

// Init all "fas" icons for react-fontawesome
library.add(fas)
library.add(fab)
library.add(far)

const MyApp = ({ Component, pageProps: { session, ...pageProps }, }: AppProps) => {
  const apolloClient = useApollo(pageProps.initializeApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp