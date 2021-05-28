import React from "react"

import Highlight, {defaultProps, Language} from "prism-react-renderer"
import textContent from "react-addons-text-content"

import {Position} from "../../primitives/position/Position"
import {Text} from "../../primitives/text/Text"
import {CodeClipboardCopy} from "../code-clipboard-copy/CodeClipboardCopy"
import githubTheme from "./githubTheme"
import Prism from "./Prism"

export interface CodeProps extends HTMLElement {
  language?: Language
  live?: boolean
  noinline?: boolean
}

export const Code = React.forwardRef<HTMLDivElement, CodeProps>(
  ({children, language, live, noinline}: CodeProps, ref) => {
    const code = textContent(children).trim()

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
          theme={githubTheme}
        >
          {({className, style, tokens, getLineProps, getTokenProps}) => {
            console.debug(style)
            return (
              <Position
                as={"pre"}
                bg={"blueGray.1"}
                border={0}
                borderRadius={5}
                className={className}
                mb={3}
                mt={0}
                overflow={"auto"}
                p={3}
                position={"static"}
              >
                {tokens.map((line, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={i} {...getLineProps({key: i, line})}>
                    {line.map((token, key) => {
                      console.debug({...getTokenProps({key, token})})
                      return (
                        <Text
                          /* eslint-disable-next-line react/no-array-index-key */
                          key={key}
                          as={"code"}
                          fontSize={14}
                          {...getTokenProps({key, token})}
                        />
                      )
                    })}
                  </div>
                ))}
              </Position>
            )
          }}
        </Highlight>
      </Position>
    )
  },
)
