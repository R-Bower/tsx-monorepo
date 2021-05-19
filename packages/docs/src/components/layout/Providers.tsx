import React from "react"

import {DefaultGlobalStyle, StyledThemeProvider} from "@rb/react-primitives"

import Layout from "./Layout"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({
  children,
}: React.PropsWithChildren<ProvidersProps>): JSX.Element {
  return (
    <StyledThemeProvider>
      <DefaultGlobalStyle />
      <main>
        <Layout>{children}</Layout>
      </main>
    </StyledThemeProvider>
  )
}
