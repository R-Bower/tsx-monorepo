import {AppProps} from "next/app"
import React from "react"

import Providers from "~components/page/Providers"

export default function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
