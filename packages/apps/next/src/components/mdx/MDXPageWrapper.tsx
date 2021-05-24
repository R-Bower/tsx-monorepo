import React from "react"

import {MDXProvider} from "@mdx-js/react"

import {Grid} from "@rb/react-primitives"

import {pagePadding} from "../layout/config"
import {MDXComponents} from "./MDXComponents"

export interface MDXPageWrapperProps {
  children: React.ReactNode
}

export default function MDXPageWrapper({
  children,
}: MDXPageWrapperProps): JSX.Element {
  return (
    <MDXProvider components={MDXComponents}>
      <Grid gridRowGap={4} {...pagePadding}>
        {children}
      </Grid>
    </MDXProvider>
  )
}
