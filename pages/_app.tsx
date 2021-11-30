import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (  
    <>
      <Head>
          <title>app</title>
      </Head>
      <Layout>
          <Component { ...pageProps }></Component>
      </Layout>
    </>
  )
}

export default MyApp