import React, {useState} from "react"

import {BsCode} from "@react-icons/all-files/bs/BsCode"
import {BsCodeSlash} from "@react-icons/all-files/bs/BsCodeSlash"
import htmlReactParser from "html-react-parser"
import {Language} from "prism-react-renderer"
import reactElementToJsxString from "react-element-to-jsx-string"
import {LiveEditor, LiveError, LivePreview, LiveProvider} from "react-live"
import {ThemeContext} from "styled-components"

import {
  Box,
  Button,
  Flex,
  Position,
  ReactIcon,
  Text,
} from "@rb/react-components"
import useToggle from "@rb/react-hooks/dist/state/use-toggle/useToggle"

import {CodeClipboardCopy} from "../code-clipboard-copy/CodeClipboardCopy"
import darkTheme from "./themes/darkTheme"
import lightTheme from "./themes/lightTheme"

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
  hideEditor?: boolean
  language: Language
  liveCodeScope: Record<string, React.ReactNode>
  noToggle?: boolean
  noinline?: boolean
  viewMode?: "light" | "dark"
}

export default function LiveCode({
  code,
  hideEditor = false,
  language,
  liveCodeScope,
  noToggle = false,
  noinline,
  viewMode,
}: LiveCodeProps): JSX.Element {
  const theme = React.useContext(ThemeContext)
  const [liveCode, setLiveCode] = useState(code)
  const handleChange = (updatedLiveCode) => setLiveCode(updatedLiveCode)
  const prismTheme = viewMode === "dark" ? darkTheme : lightTheme
  // if editor is toggleable, hide by default
  const [showingEditor, toggleShowingEditor] = useToggle(!hideEditor)

  return (
    <Flex flexDirection={"column"} mb={3}>
      <LiveProvider
        code={liveCode}
        noInline={noinline}
        scope={liveCodeScope}
        transformCode={languageTransformers[language]}
      >
        <Flex
          border={"solid 1px"}
          borderColor={"border.secondary"}
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
        >
          <Box p={3}>
            <LivePreview
              style={{
                fontFamily: theme.fonts.regular,
                fontSize: "16px",
              }}
            />
          </Box>
        </Flex>

        <Position position={"relative"}>
          {showingEditor && (
            <>
              <LiveEditor
                // these variables actually work - the compiler just doesn't
                // want to resolve the types.
                // @ts-ignore
                ignoreTabKey={true}
                onChange={handleChange}
                // @ts-ignore
                padding={16}
                style={{
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                  fontFamily: theme.fonts.mono,
                  fontSize: 14,
                }}
                theme={prismTheme}
              />
              <Position p={2} position={"absolute"} right={0} top={0}>
                <CodeClipboardCopy value={liveCode} />
              </Position>
            </>
          )}
          {/*Code toggle button*/}
          {!noToggle ? (
            <Position bottom={0} p={2} position={"absolute"} right={0}>
              <Flex justifyContent={"flex-end"}>
                <Button onClick={toggleShowingEditor} p={2} variant={"icon"}>
                  <ReactIcon
                    color={"icon.primary"}
                    icon={showingEditor ? BsCodeSlash : BsCode}
                    size={18}
                    title={showingEditor ? "Hide code" : "Show code"}
                  />
                </Button>
              </Flex>
            </Position>
          ) : null}
        </Position>

        <Text
          as={LiveError}
          bg={"text.danger"}
          color={"#fff"}
          fontFamily={"mono"}
          fontSize={14}
          m={0}
          p={3}
          variant={"span"}
        />
      </LiveProvider>
    </Flex>
  )
}
