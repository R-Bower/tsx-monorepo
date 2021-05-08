import React from "react"

import {PropsWithChildren} from "@rb/react-primitives"

import {styledSystemTheme} from "~theme/config"
import GlobalStyle from "~theme/global"
import ThemeProvider from "~theme/provider"

import Layout from "./Layout"

export default function Providers({children}: PropsWithChildren): JSX.Element {
  return (
    <ThemeProvider theme={styledSystemTheme}>
      <GlobalStyle />
      <main>
        <Layout>{children}</Layout>
      </main>
    </ThemeProvider>
  )
}
