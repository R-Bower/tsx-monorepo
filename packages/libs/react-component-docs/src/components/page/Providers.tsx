import React from "react"

import {
  DefaultGlobalStyle,
  PropsWithChildren,
  StyledThemeProvider,
} from "@rb/react-primitives"

import Layout from "./Layout"

export default function Providers({children}: PropsWithChildren): JSX.Element {
  return (
    <StyledThemeProvider>
      <DefaultGlobalStyle />
      <main>
        <Layout>{children}</Layout>
      </main>
    </StyledThemeProvider>
  )
}
