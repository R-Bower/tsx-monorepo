import * as ReactComponents from "@rb/react-components"

export default function CodeEditor(
  props: ReactComponents.CodeProps,
): JSX.Element {
  return (
    <ReactComponents.CodeBlock liveCodeScope={ReactComponents} {...props} />
  )
}
