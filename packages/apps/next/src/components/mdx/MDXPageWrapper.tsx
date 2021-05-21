import React from "react"

import {MDXProvider} from "@mdx-js/react"

import {Box, Flex, Text} from "@rb/react-primitives"

import {pagePadding} from "../layout/config"
import {MDXComponents} from "./MDXComponents"

export interface MDXMeta {
  description: string
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
      <Flex flex={"1 0 auto"} flexDirection={"column"} {...pagePadding}>
        <Text as={"h1"}>{meta.title}</Text>
        <Box
          borderBottom={"solid 1px"}
          borderBottomColor={"border.default"}
          height={2}
        />
        <Text as={"p"} mb={16}>
          {meta.description}
        </Text>
        {children}
      </Flex>
    </MDXProvider>
  )
}
