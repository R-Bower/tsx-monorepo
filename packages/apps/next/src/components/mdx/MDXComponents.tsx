import React, {PropsWithChildren} from "react"

import Link from "next/link"

import {List} from "@rb/react-components"
import {Text} from "@rb/react-primitives"

import MarkdownHeadingLink from "./components/MarkdownHeadingLink"

interface MDXComponentProps {
  children: React.ReactNode & HTMLCollection
}

// https://mdxjs.com/table-of-components
/**
 * We pass custom components to the MDX provider to override the default styles.
 */
export const MDXComponents = {
  a: ({children, href}: PropsWithChildren<HTMLLinkElement>): JSX.Element => {
    return (
      <Link href={href} passHref>
        <Text
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
        </Text>
      </Link>
    )
  },
  code: ({children}: PropsWithChildren<HTMLElement>): JSX.Element => (
    <Text as={"code"}>{children}</Text>
  ),
  h1: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <Text
      as={"h1"}
      borderBottom={"solid 1px"}
      borderBottomColor={"border.light"}
      pb={4}
    >
      {children}
    </Text>
  ),
  h2: ({children}: MDXComponentProps): JSX.Element => (
    <MarkdownHeadingLink as={"h2"}>{children}</MarkdownHeadingLink>
  ),
  h3: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <Text as={"h3"}>{children}</Text>
  ),
  h4: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <Text as={"h4"}>{children}</Text>
  ),
  h5: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <Text as={"h5"}>{children}</Text>
  ),
  h6: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <Text as={"h6"}>{children}</Text>
  ),
  inlineCode: ({children}: PropsWithChildren<HTMLElement>): JSX.Element => (
    <Text as={"code"} variant={"inlineCode"}>
      {children}
    </Text>
  ),
  p: ({children}: PropsWithChildren<HTMLParagraphElement>): JSX.Element => (
    <Text as={"p"}>{children}</Text>
  ),
  ul: ({children}: PropsWithChildren<HTMLUListElement>): JSX.Element => (
    <List>{children}</List>
  ),
}
