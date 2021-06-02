import React, {PropsWithChildren} from "react"

import {Observe, State} from "mdx-observable"
import dynamic from "next/dynamic"
import Link from "next/link"

import * as ReactComponents from "@rb/react-components"

import {ViewMode} from "~redux/reducers/ui/uiSlice"

import {CodeProps} from "./components/code-block/CodeBlock"
import MarkdownHeadingLink from "./components/MarkdownHeadingLink"
import StylePropsSearch from "./components/style-props-search/StylePropsSearch"

// Code split the large CodeEditor for better performance
const Code = dynamic(() => import("./components/CodeEditor"))

interface MDXComponentProps {
  children: React.ReactNode & HTMLCollection
}

// https://mdxjs.com/table-of-components
/**
 * We pass custom components to the MDX provider to override the default styles.
 */
export default function makeMDXComponents(viewMode: ViewMode) {
  return {
    ...ReactComponents,
    Observe,
    State,
    StylePropsSearch,
    a: ({children, href}: PropsWithChildren<HTMLLinkElement>): JSX.Element => {
      return (
        <Link href={href} passHref>
          <ReactComponents.Text
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
          </ReactComponents.Text>
        </Link>
      )
    },
    code: ({children, ...props}: CodeProps): JSX.Element => (
      <Code mb={2} viewMode={viewMode} {...props}>
        {children}
      </Code>
    ),
    h1: ({children}: MDXComponentProps): JSX.Element => (
      <ReactComponents.Text
        as={"h1"}
        borderBottom={"solid 1px"}
        borderBottomColor={"border.secondary"}
        mb={4}
        pb={2}
      >
        {children}
      </ReactComponents.Text>
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
      <ReactComponents.Text as={"h4"} mb={2}>
        {children}
      </ReactComponents.Text>
    ),
    h5: ({children}: MDXComponentProps): JSX.Element => (
      <ReactComponents.Text as={"h5"}>{children}</ReactComponents.Text>
    ),
    h6: ({children}: MDXComponentProps): JSX.Element => (
      <ReactComponents.Text as={"h6"}>{children}</ReactComponents.Text>
    ),
    inlineCode: ({children}: MDXComponentProps): JSX.Element => (
      <ReactComponents.Text as={"code"} variant={"inlineCode"}>
        {children}
      </ReactComponents.Text>
    ),
    ol: ({children}: MDXComponentProps): JSX.Element => (
      <ReactComponents.List listTag={"ol"} mb={4}>
        {children}
      </ReactComponents.List>
    ),
    p: ({children}: MDXComponentProps): JSX.Element => (
      <ReactComponents.Text as={"p"} mb={4}>
        {children}
      </ReactComponents.Text>
    ),
    table: ({children}: MDXComponentProps): JSX.Element => (
      <ReactComponents.Table>{children}</ReactComponents.Table>
    ),
    ul: ({children}: MDXComponentProps): JSX.Element => (
      <ReactComponents.List listTag={"ul"} mb={4}>
        {children}
      </ReactComponents.List>
    ),
  }
}
