/* eslint-disable react/no-array-index-key */

import React from "react"

import {mdx} from "@mdx-js/react"
import Highlight, {defaultProps} from "prism-react-renderer"
import {LiveProvider, LiveEditor, LiveError, LivePreview} from "react-live"

import {Flex} from "@rb/react-primitives"

interface CodeBlockProps {
  children: string
  className: string
  live: boolean
  render: boolean
}

const language = "tsx"

export default function CodeBlock({children, live, render}: CodeBlockProps) {
  if (live) {
    return (
      <Flex bg={"bg.header"}>
        <LiveProvider
          code={children.trim()}
          scope={{mdx}}
          transformCode={(code) => "/** @jsx mdx */" + code}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </Flex>
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
