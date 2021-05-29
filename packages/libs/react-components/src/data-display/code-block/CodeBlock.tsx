import React from "react"

import Highlight, {defaultProps, Language} from "prism-react-renderer"
import textContent from "react-addons-text-content"

import {Position} from "../../primitives/position/Position"
import {CodeClipboardCopy} from "../code-clipboard-copy/CodeClipboardCopy"
import lightTheme from "./lightTheme"
import Prism from "./Prism"

export interface CodeProps extends HTMLElement {
  language?: Language
  live?: boolean
  noinline?: boolean
}

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeProps>(
  ({children, className, live, noinline}: CodeProps, ref) => {
    const code = textContent(children).trim()
    const language = (
      className ? className.replace(/language-/, "") : "jsx"
    ) as Language

    /*
     * In some instances, prism doesn't render properly in local dev SSR.
     * We can restrict it to CSR to fix this issue.
     */
    if (typeof window === "undefined" && process.env.CURRENT_ENV === "local") {
      return null
    }

    return (
      <Position ref={ref} borderRadius={5} position={"relative"}>
        <Position p={2} position={"absolute"} right={0} top={0}>
          <CodeClipboardCopy value={code} />
        </Position>
        <Highlight
          {...defaultProps}
          Prism={Prism}
          code={code}
          language={language}
          theme={lightTheme}
        >
          {({className, tokens, getLineProps, getTokenProps, style}) => {
            return (
              <Position
                as={"pre"}
                border={0}
                borderRadius={5}
                className={className}
                color={"inherit"}
                mb={3}
                mt={0}
                overflow={"auto"}
                p={4}
                position={"static"}
                style={style}
              >
                {tokens.map((line, i) => {
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={i} {...getLineProps({key: i, line})}>
                      {line.map((token, key) => {
                        // eslint-disable-next-line react/no-array-index-key
                        return (
                          <code
                            /* eslint-disable-next-line react/no-array-index-key */
                            key={key}
                            className={"test"}
                            {...getTokenProps({key, token})}
                          />
                        )
                      })}
                    </div>
                  )
                })}
              </Position>
            )
          }}
        </Highlight>
      </Position>
    )
  },
)
