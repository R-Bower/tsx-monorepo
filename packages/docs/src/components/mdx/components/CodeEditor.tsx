import * as ReactComponents from "@rb/react-components"

import {CodeBlock, CodeProps} from "./code-block/CodeBlock"

export default function CodeEditor(props: CodeProps): JSX.Element {
  return <CodeBlock liveCodeScope={ReactComponents} {...props} />
}
