
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Router from 'next/router'
import nprogress from 'nprogress'
import '../styles/globals.css'

import Layout from '../components/Layout.js'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps}) {
  return (
      <>
        <ChakraProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ChakraProvider>
      </>
  )
}

export default MyApp
