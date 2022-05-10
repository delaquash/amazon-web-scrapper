
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Router from 'next/router'
import nprogress from 'nprogress'
import '../styles/globals.css'

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
