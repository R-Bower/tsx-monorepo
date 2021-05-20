import React from "react"

import {AppProps} from "next/app"

import Providers from "~components/layout/Providers"
import {nextReduxWrapper} from "~redux/store"

function CustomApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default nextReduxWrapper.withRedux(CustomApp)
