import React from "react"

import {DefaultGlobalStyle, StyledThemeProvider} from "@rb/react-primitives"

import Layout from "./Layout"
import {SidebarDoc} from "./sidebar/utils"

interface ProvidersProps {
  children: React.ReactNode
  sidebarDocs: SidebarDoc[]
}

export default function Providers({
  children,
  sidebarDocs,
}: React.PropsWithChildren<ProvidersProps>): JSX.Element {
  return (
    <StyledThemeProvider>
      <DefaultGlobalStyle />
      <main>
        <Layout sidebarDocs={sidebarDocs}>{children}</Layout>
      </main>
    </StyledThemeProvider>
  )
}
