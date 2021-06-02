import React from "react"

import {Box, Flex, Text} from "@rb/react-components"

import MarkdownHeadingLink from "../MarkdownHeadingLink"

export interface PropsListProps {
  id:
    | "background"
    | "border"
    | "color"
    | "display"
    | "effects"
    | "flex"
    | "grid"
    | "interactivity"
    | "layout"
    | "sizing"
    | "space"
    | "transitions"
    | "typography"
    | string
  props: [string, string, string?][]
}

const StyleProps = ({props, id}: PropsListProps): React.ReactElement => {
  return (
    <Flex flexDirection={"column"}>
      <MarkdownHeadingLink as={"h3"} mb={2} mt={2}>
        {id.toUpperCase()}
      </MarkdownHeadingLink>
      <Box as={"table"} mb={4}>
        <Box as={"thead"}>
          <Box
            as={"tr"}
            borderBottom={"solid 1px"}
            borderBottomColor={"border.secondary"}
            sx={{
              th: {
                pb: 2,
                textAlign: "start",
              },
            }}
          >
            <Text as={"th"}>Prop</Text>
            <Text as={"th"}>CSS Property</Text>
            <Text as={"th"}>Theme Field</Text>
          </Box>
        </Box>
        <Box as={"tbody"}>
          {props.map(([prop, cssProperty, themeField]) => (
            <Box
              key={prop}
              as={"tr"}
              borderBottom={"solid 1px"}
              borderBottomColor={"border.inverse"}
              sx={{
                td: {
                  pr: 2,
                  py: 2,
                },
              }}
            >
              <Box as={"td"}>
                <Text as={"code"}>{prop}</Text>
              </Box>
              <Box as={"td"}>
                <Text as={"code"}>{cssProperty}</Text>
              </Box>
              <Box as={"td"}>
                <Text as={"code"}>{themeField || "none"}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Flex>
  )
}
export default StyleProps
