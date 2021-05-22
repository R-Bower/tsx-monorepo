import React from "react"

import {MDXProvider} from "@mdx-js/react"

import {Box, Flex, Grid, Text} from "@rb/react-primitives"

import {pagePadding} from "../layout/config"
import {MDXComponents} from "./MDXComponents"

export interface MDXMeta {
  title: string
}

export interface MDXPageWrapperProps {
  children: React.ReactNode
  meta: MDXMeta
}

export default function MDXPageWrapper({
  children,
  meta,
}: MDXPageWrapperProps): JSX.Element {
  return (
    <MDXProvider components={MDXComponents}>
      <Grid gridRowGap={4} {...pagePadding}>
        <Box borderBottom={"solid 1px"} borderBottomColor={"border.light"}>
          <Text as={"h1"}>{meta.title}</Text>
        </Box>
        {children}
      </Grid>
    </MDXProvider>
  )
}
