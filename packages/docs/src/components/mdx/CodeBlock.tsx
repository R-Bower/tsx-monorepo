/* eslint-disable react/no-array-index-key */

import React from "react"

import {mdx} from "@mdx-js/react"
import Highlight, {defaultProps} from "prism-react-renderer"
import {LiveProvider, LiveEditor, LiveError, LivePreview} from "react-live"

import * as Components from "@rb/react-components"
import * as Primitives from "@rb/react-primitives"

const mdxScope = {...Components, ...Primitives, mdx}

interface CodeBlockProps {
  children: string
  className: string
  live: boolean
  render: boolean
}

const language = "tsx"

export default function CodeBlock({
  children,
  className,
  live,
  render,
}: CodeBlockProps) {
  if (className === "language-test") {
    console.debug(children)
  }
  if (live) {
    return (
      <Primitives.Flex bg={"bg.header"}>
        <LiveProvider
          code={children.trim()}
          scope={mdxScope}
          transformCode={(code) => "/** @jsx mdx */" + code}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </Primitives.Flex>
    )
  }

  if (render) {
    return (
      <div style={{marginTop: "40px"}}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: "20px"}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({key: i, line})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({key, token})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
