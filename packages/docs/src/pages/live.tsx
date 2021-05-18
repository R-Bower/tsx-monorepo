import React from "react"

import {LiveProvider, LiveEditor, LiveError, LivePreview} from "react-live"

import {Flex} from "@rb/react-primitives"

const code = `<Flex>Hello World!</Flex>`

const scope = {Flex}

export default function Hello(): JSX.Element {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}
