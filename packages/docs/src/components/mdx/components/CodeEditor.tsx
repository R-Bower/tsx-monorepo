import {IoHappyOutline} from "@react-icons/all-files/io5/IoHappyOutline"

import * as ReactComponents from "@rb/react-components"
import * as ReactHooks from "@rb/react-hooks"

import {CodeBlock, CodeProps} from "./code-block/CodeBlock"

export default function CodeEditor(props: CodeProps): JSX.Element {
  return (
    <CodeBlock
      liveCodeScope={{...ReactComponents, ...ReactHooks, IoHappyOutline}}
      {...props}
    />
  )
}
