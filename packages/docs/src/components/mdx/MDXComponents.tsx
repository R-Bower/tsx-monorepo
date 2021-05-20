import React, {PropsWithChildren} from "react"

import * as ReactComponents from "@rb/react-components"
import * as ReactPrimitives from "@rb/react-primitives"

import CodeBlock from "./CodeBlock"

// https://mdxjs.com/table-of-components
/**
 * We can pass custom components to the provider.
 */
export const MDXComponents = {
  ...ReactPrimitives,
  ...ReactComponents,
  code: CodeBlock,
  h1: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactPrimitives.Text as={"h1"}>{children}</ReactPrimitives.Text>
  ),
  h2: ({children}: PropsWithChildren<HTMLHeadingElement>): JSX.Element => (
    <ReactPrimitives.Text as={"h2"}>{children}</ReactPrimitives.Text>
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
  p: ({children}: PropsWithChildren<HTMLParagraphElement>): JSX.Element => (
    <ReactPrimitives.Text as={"p"}>{children}</ReactPrimitives.Text>
  ),
}
