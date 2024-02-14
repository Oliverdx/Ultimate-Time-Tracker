import Head from 'next/head'
import { Fragment } from 'react'
import 'styles/globals.scss'

function UTT({ Component, pageProps }) {
  return <Fragment>
      <Head>
        <title>Ultimate Time Tracker</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
}

export default UTT
