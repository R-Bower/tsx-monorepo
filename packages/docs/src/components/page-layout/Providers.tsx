import React from "react"

import {DefaultGlobalStyle, StyledThemeProvider} from "@rb/react-style-system"

import Layout from "./Layout"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({
  children,
}: React.PropsWithChildren<ProvidersProps>): JSX.Element {
  return (
    <>
      <DefaultGlobalStyle />
      <StyledThemeProvider>
        <Layout>{children}</Layout>
      </StyledThemeProvider>
    </>
  )
}
