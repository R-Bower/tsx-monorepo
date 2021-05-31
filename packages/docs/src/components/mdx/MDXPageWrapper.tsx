import React from "react"

import {MDXProvider} from "@mdx-js/react"

import {Grid} from "@rb/react-components"

import MDXComponents from "./MDXComponents"

export interface MDXPageWrapperProps {
  children: React.ReactNode
}

export default function MDXPageWrapper({
  children,
}: MDXPageWrapperProps): JSX.Element {
  return (
    <MDXProvider components={MDXComponents}>
      <Grid
        gridTemplateColumns={"minmax(0px, 960px)"}
        maxWidth={960}
        mx={"auto"}
        p={[4, 6, 12]}
        width={1}
      >
        {children}
      </Grid>
    </MDXProvider>
  )
}
