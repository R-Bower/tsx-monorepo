import React from "react"

import {AppProps} from "next/app"

import {styledSystemTheme} from "~theme/config"
import GlobalStyle from "~theme/global"
import ThemeProvider from "~theme/provider"

import Layout from "../components/page/Layout"

export default function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={styledSystemTheme}>
        <GlobalStyle />
        <main>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThemeProvider>
    </>
  )
}
