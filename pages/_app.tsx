import React, { useEffect } from 'react'
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

const MyApp = ({ Component, pageProps: { session, ...pageProps }, router }: AppProps) => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.remove();
    }
  }, []);


  let isPwa = router?.route == '/pwa/[...slug]';
  const apolloClient = useApollo(pageProps.initializeApolloState);
  if (isPwa) {
    return (
      <Component {...pageProps} />
    )
  } else {
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }

}

export default MyApp