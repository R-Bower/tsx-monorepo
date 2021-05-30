import React, {useState} from "react"

import htmlReactParser from "html-react-parser"
import reactElementToJsxString from "react-element-to-jsx-string"
import {LiveEditor, LiveError, LivePreview, LiveProvider} from "react-live"
import {ThemeContext} from "styled-components"

import {Box} from "../../primitives/box/Box"
import {Flex} from "../../primitives/flex/Flex"
import {Position} from "../../primitives/position/Position"
import {Text} from "../../primitives/text/Text"
import {CodeClipboardCopy} from "../code-clipboard-copy/CodeClipboardCopy"
import darkTheme from "./themes/darkTheme"
import lightTheme from "./themes/lightTheme"
import {Language} from "prism-react-renderer"

const languageTransformers = {
  html: (html) => htmlToJsx(html),
  jsx: (jsx) => wrapWithFragment(jsx),
}

function htmlToJsx(html) {
  try {
    const reactElement = htmlReactParser(removeNewlines(html))
    // The output of htmlReactParser could be a single React element
    // or an array of React elements. reactElementToJsxString does not accept arrays
    // so we have to wrap the output in React fragment.
    return reactElementToJsxString(<>{reactElement}</>)
  } catch (error) {
    return wrapWithFragment(html)
  }
}

function removeNewlines(string) {
  return string.replace(/(\r\n|\n|\r)/gm, "")
}

function wrapWithFragment(jsx) {
  return `<React.Fragment>${jsx}</React.Fragment>`
}

interface LiveCodeProps {
  code: string
  language: Language
  noinline?: boolean
  viewMode?: "light" | "dark"
}

export default function LiveCode({
  code,
  language,
  noinline,
  viewMode,
}: LiveCodeProps) {
  const theme = React.useContext(ThemeContext)
  const [liveCode, setLiveCode] = useState(code)
  const handleChange = (updatedLiveCode) => setLiveCode(updatedLiveCode)
  const prismTheme = viewMode === "light" ? lightTheme : darkTheme

  return (
    <Flex flexDirection={"column"} mb={3}>
      <LiveProvider
        code={liveCode}
        noInline={noinline}
        transformCode={languageTransformers[language]}
      >
        <Flex
          border={"solid 1px"}
          borderColor={"border.light"}
          borderTopLeftRadius={2}
          borderTopRightRadius={2}
        >
          <Box p={3}>
            <LivePreview />
          </Box>
        </Flex>
        <Position position={"relative"}>
          <LiveEditor
            onChange={handleChange}
            style={{
              borderBottomLeftRadius: theme.radii[2],
              borderBottomRightRadius: theme.radii[2],
              fontFamily: theme.fonts.mono,
              fontSize: "85%",
              padding: theme.space[3],
            }}
            theme={prismTheme}
          />
          <Position p={2} position={"absolute"} right={0} top={0}>
            <CodeClipboardCopy value={liveCode} />
          </Position>
        </Position>
        <Text
          as={LiveError}
          bg={"palette.alert.main"}
          color={"white"}
          fontFamily={"mono"}
          fontSize={1}
          m={0}
          p={3}
        />
      </LiveProvider>
    </Flex>
  )
}
