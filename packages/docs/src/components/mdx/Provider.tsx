import {MDXProvider} from "@mdx-js/react"

import {MDXComponents} from "./MDXComponents"

export default function MyApp({Component, pageProps}) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
