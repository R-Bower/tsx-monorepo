import React from "react"

import {MDXProvider} from "@mdx-js/react"

import {Grid} from "@rb/react-primitives"

import {MDXComponents} from "./MDXComponents"

export interface MDXPageWrapperProps {
  children: React.ReactNode
}

export default function MDXPageWrapper({
  children,
}: MDXPageWrapperProps): JSX.Element {
  return (
    <MDXProvider components={MDXComponents}>
      <Grid gridRowGap={4} p={[4, 12]}>
        {children}
      </Grid>
    </MDXProvider>
  )
}
