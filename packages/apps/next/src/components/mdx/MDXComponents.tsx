import React, {PropsWithChildren} from "react"

import {List} from "@rb/react-components"
import {Text} from "@rb/react-primitives"

// https://mdxjs.com/table-of-components
/**
 * We pass custom components to the MDX provider to override the default styles.
 */
export const MDXComponents = {
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
  h2: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <Text
      as={"h2"}
      borderBottom={"solid 1px"}
      borderBottomColor={"border.light"}
      pb={4}
    >
      {children}
    </Text>
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
  ul: ({children}: PropsWithChildren<HTMLUListElement>): JSX.Element => {
    return <List>{children}</List>
  },
}
