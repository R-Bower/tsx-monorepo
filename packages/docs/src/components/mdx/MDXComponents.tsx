import React, {PropsWithChildren} from "react"

import {State, Observe} from "mdx-observable"
import dynamic from "next/dynamic"
import Link from "next/link"

import {Box, CodeProps, List, Table, Text} from "@rb/react-components"

import MarkdownHeadingLink from "./components/MarkdownHeadingLink"

// Code split the editor code for better performance
const Code = dynamic(() => import("./components/CodeEditor"))

interface MDXComponentProps {
  children: React.ReactNode & HTMLCollection
}

// https://mdxjs.com/table-of-components
/**
 * We pass custom components to the MDX provider to override the default styles.
 */
const MDXComponents = {
  Box,
  Observe,
  State,
  a: ({children, href}: PropsWithChildren<HTMLLinkElement>): JSX.Element => {
    return (
      <Link href={href} passHref>
        <Text
          as={"a"}
          color={"text.link"}
          cursor={"pointer"}
          sx={{
            "&:hover": {
              textDecoration: "underline",
            },
            "&:visited": {
              color: "primary.5",
            },
          }}
        >
          {children}
        </Text>
      </Link>
    )
  },
  code: ({children, ...props}: CodeProps): JSX.Element => (
    <Code mb={2} {...props}>
      {children}
    </Code>
  ),
  h1: ({children}: MDXComponentProps): JSX.Element => (
    <Text
      as={"h1"}
      borderBottom={"solid 1px"}
      borderBottomColor={"border.secondary"}
      mb={4}
      pb={2}
    >
      {children}
    </Text>
  ),
  h2: ({children}: MDXComponentProps): JSX.Element => (
    <MarkdownHeadingLink
      as={"h2"}
      borderBottom={"solid 1px"}
      borderBottomColor={"border.secondary"}
      mb={4}
      mt={2}
      pb={1}
    >
      {children}
    </MarkdownHeadingLink>
  ),
  h3: ({children}: MDXComponentProps): JSX.Element => (
    <MarkdownHeadingLink
      as={"h3"}
      borderBottom={"none"}
      borderBottomColor={"border.secondary"}
      mb={3}
      mt={2}
      pb={0}
    >
      {children}
    </MarkdownHeadingLink>
  ),
  h4: ({children}: MDXComponentProps): JSX.Element => (
    <Text as={"h4"} mb={2}>
      {children}
    </Text>
  ),
  h5: ({children}: MDXComponentProps): JSX.Element => (
    <Text as={"h5"}>{children}</Text>
  ),
  h6: ({children}: MDXComponentProps): JSX.Element => (
    <Text as={"h6"}>{children}</Text>
  ),
  inlineCode: ({children}: MDXComponentProps): JSX.Element => (
    <Text as={"code"} variant={"inlineCode"}>
      {children}
    </Text>
  ),
  ol: ({children}: MDXComponentProps): JSX.Element => (
    <List listTag={"ol"} mb={4}>
      {children}
    </List>
  ),
  p: ({children}: MDXComponentProps): JSX.Element => (
    <Text as={"p"} mb={4}>
      {children}
    </Text>
  ),
  table: ({children}: MDXComponentProps): JSX.Element => (
    <Table>{children}</Table>
  ),
  ul: ({children}: MDXComponentProps): JSX.Element => (
    <List listTag={"ul"} mb={4}>
      {children}
    </List>
  ),
}

export default MDXComponents
