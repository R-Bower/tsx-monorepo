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
      <Grid
        gridRowGap={5}
        gridTemplateColumns={"minmax(0px, 960px)"}
        maxWidth={960}
        mx={"auto"}
        p={[5, 12]}
        width={1}
      >
        {children}
      </Grid>
    </MDXProvider>
  )
}
