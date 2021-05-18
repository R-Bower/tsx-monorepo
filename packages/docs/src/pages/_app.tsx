import React from "react"

import App, {AppProps} from "next/app"

import Providers from "~components/layout/Providers"
import buildSidebar, {SidebarDoc} from "~components/layout/sidebar/utils"

interface Props extends AppProps {
  sidebarDocs: SidebarDoc[]
}

export default function CustomApp({
  Component,
  pageProps,
  sidebarDocs,
}: Props): JSX.Element {
  return (
    <Providers sidebarDocs={sidebarDocs}>
      <Component {...pageProps} />
    </Providers>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
// In this case it's fine because the sidebar needs to be available on every page.
// We could build this statically at build but then we'd lose hot reloading during
// development.  We don't need bleeding edge performance for the docs site.
CustomApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  const sidebarDocs = buildSidebar()

  return {...appProps, sidebarDocs}
}
