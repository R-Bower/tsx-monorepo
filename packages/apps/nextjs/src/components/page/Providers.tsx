import React from "react"

import {styledSystemTheme} from "~theme/config"
import GlobalStyle from "~theme/global"
import ThemeProvider from "~theme/provider"
import {IPropsWithChildren} from "~types/props"

import Layout from "./Layout"

export default function Providers({children}: IPropsWithChildren): JSX.Element {
  return (
    <ThemeProvider theme={styledSystemTheme}>
      <GlobalStyle />
      <main>
        <Layout>{children}</Layout>
      </main>
    </ThemeProvider>
  )
}