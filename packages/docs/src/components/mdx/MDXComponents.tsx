import React, {PropsWithChildren} from "react"

import {State, Observe} from "mdx-observable"
import Link from "next/link"

import * as ReactComponents from "@rb/react-components"

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
  Observe,
  State,
  a: ({children, href}: PropsWithChildren<HTMLLinkElement>): JSX.Element => {
    return (
      <Link href={href} passHref>
        <ReactComponents.Text
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
        </ReactComponents.Text>
      </Link>
    )
  },
  code: ({children, ...props}: ReactComponents.CodeProps): JSX.Element => (
    <ReactComponents.Code {...props}>{children}</ReactComponents.Code>
  ),
  h1: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactComponents.Text
      as={"h1"}
      borderBottom={"solid 1px"}
      borderBottomColor={"border.light"}
      pb={4}
    >
      {children}
    </ReactComponents.Text>
  ),
  h2: ({children}: MDXComponentProps): JSX.Element => (
    <MarkdownHeadingLink as={"h2"}>{children}</MarkdownHeadingLink>
  ),
  h3: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactComponents.Text as={"h3"}>{children}</ReactComponents.Text>
  ),
  h4: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactComponents.Text as={"h4"}>{children}</ReactComponents.Text>
  ),
  h5: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactComponents.Text as={"h5"}>{children}</ReactComponents.Text>
  ),
  h6: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactComponents.Text as={"h6"}>{children}</ReactComponents.Text>
  ),
  inlineCode: ({children}: PropsWithChildren<HTMLElement>): JSX.Element => (
    <ReactComponents.Text as={"code"} variant={"inlineCode"}>
      {children}
    </ReactComponents.Text>
  ),
  p: ({children}: PropsWithChildren<HTMLParagraphElement>): JSX.Element => (
    <ReactComponents.Text as={"p"}>{children}</ReactComponents.Text>
  ),
  ul: ({children}: PropsWithChildren<HTMLUListElement>): JSX.Element => (
    <ReactComponents.List>{children}</ReactComponents.List>
  ),
}
