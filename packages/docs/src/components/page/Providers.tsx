import React from "react"

import {DefaultGlobalStyle, StyledThemeProvider} from "@rb/react-primitives"

import Layout from "./Layout"

export default function Providers({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element {
  return (
    <StyledThemeProvider>
      <DefaultGlobalStyle />
      <main>
        <Layout>{children}</Layout>
      </main>
    </StyledThemeProvider>
  )
}
