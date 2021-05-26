import React, {PropsWithChildren} from "react"

import {State, Observe} from "mdx-observable"
import Link from "next/link"

import * as ReactComponents from "@rb/react-components"
import * as ReactPrimitives from "@rb/react-primitives"

import MarkdownHeadingLink from "./components/MarkdownHeadingLink"

interface MDXComponentProps {
  children: React.ReactNode & HTMLCollection
}

// https://mdxjs.com/table-of-components
/**
 * We pass custom components to the MDX provider to override the default styles.
 */
export const MDXComponents = {
  ...ReactComponents,
  ...ReactPrimitives,
  Observe,
  State,
  a: ({children, href}: PropsWithChildren<HTMLLinkElement>): JSX.Element => {
    return (
      <Link href={href} passHref>
        <ReactPrimitives.Text
          as={"a"}
          color={"primary.4"}
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
        </ReactPrimitives.Text>
      </Link>
    )
  },
  code: ({children}: PropsWithChildren<HTMLElement>): JSX.Element => (
    <ReactPrimitives.Text as={"code"}>{children}</ReactPrimitives.Text>
  ),
  h1: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactPrimitives.Text
      as={"h1"}
      borderBottom={"solid 1px"}
      borderBottomColor={"border.light"}
      pb={4}
    >
      {children}
    </ReactPrimitives.Text>
  ),
  h2: ({children}: MDXComponentProps): JSX.Element => (
    <MarkdownHeadingLink as={"h2"}>{children}</MarkdownHeadingLink>
  ),
  h3: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactPrimitives.Text as={"h3"}>{children}</ReactPrimitives.Text>
  ),
  h4: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactPrimitives.Text as={"h4"}>{children}</ReactPrimitives.Text>
  ),
  h5: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactPrimitives.Text as={"h5"}>{children}</ReactPrimitives.Text>
  ),
  h6: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactPrimitives.Text as={"h6"}>{children}</ReactPrimitives.Text>
  ),
  inlineCode: ({children}: PropsWithChildren<HTMLElement>): JSX.Element => (
    <ReactPrimitives.Text as={"code"} variant={"inlineCode"}>
      {children}
    </ReactPrimitives.Text>
  ),
  p: ({children}: PropsWithChildren<HTMLParagraphElement>): JSX.Element => (
    <ReactPrimitives.Text as={"p"}>{children}</ReactPrimitives.Text>
  ),
  ul: ({children}: PropsWithChildren<HTMLUListElement>): JSX.Element => (
    <ReactComponents.List>{children}</ReactComponents.List>
  ),
}
