import React, {PropsWithChildren} from "react"

import {Observe, State} from "mdx-observable"
import dynamic from "next/dynamic"
import Link from "next/link"

import * as ReactComponents from "@rb/react-components"
import * as ReactHooks from "@rb/react-hooks"

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
    ...ReactHooks,
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
            variant={"p"}
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
        borderBottom={"solid 1px"}
        borderBottomColor={"border.secondary"}
        mb={4}
        pb={2}
        variant={"h1"}
      >
        {children}
      </ReactComponents.Text>
    ),
    h2: ({children}: MDXComponentProps): JSX.Element => (
      <MarkdownHeadingLink
        borderBottom={"solid 1px"}
        borderBottomColor={"border.secondary"}
        mb={4}
        mt={2}
        pb={1}
        variant={"h2"}
      >
        {children}
      </MarkdownHeadingLink>
    ),
    h3: ({children}: MDXComponentProps): JSX.Element => (
      <MarkdownHeadingLink
        borderBottom={"none"}
        borderBottomColor={"border.secondary"}
        mb={3}
        mt={2}
        pb={0}
        variant={"h3"}
      >
        {children}
      </MarkdownHeadingLink>
    ),
    h4: ({children}: MDXComponentProps): JSX.Element => (
      <ReactComponents.Text mb={2} variant={"h4"}>
        {children}
      </ReactComponents.Text>
    ),
    h5: ({children}: MDXComponentProps): JSX.Element => (
      <ReactComponents.Text variant={"h5"}>{children}</ReactComponents.Text>
    ),
    h6: ({children}: MDXComponentProps): JSX.Element => (
      <ReactComponents.Text variant={"h6"}>{children}</ReactComponents.Text>
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
      <ReactComponents.Text mb={4} variant={"p"}>
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
