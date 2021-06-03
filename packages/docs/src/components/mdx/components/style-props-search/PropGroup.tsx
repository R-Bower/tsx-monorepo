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
    | "shadows"
    | "sizing"
    | "space"
    | "transitions"
    | "typography"
    | string
  props: [string, string, string?][]
}

const PropGroup = ({props, id}: PropsListProps): React.ReactElement => {
  return (
    <Flex flexDirection={"column"}>
      <MarkdownHeadingLink mb={2} mt={2} variant={"h3"}>
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
            <Text as={"th"} variant={"p"}>
              Prop
            </Text>
            <Text as={"th"} variant={"p"}>
              CSS Property
            </Text>
            <Text as={"th"} variant={"p"}>
              Theme Field
            </Text>
          </Box>
        </Box>
        <Box
          as={"tbody"}
          sx={{
            td: {
              pr: 2,
              py: 2,
            },
            "th, td": {
              border: "solid 1px",
              borderColor: "border.secondary",
              px: 3,
              py: 2,
            },
            tr: {
              "&:nth-child(2n)": {
                bg: "bg.tertiary",
              },
              bg: "bg.primary",
              borderTop: "solid 1px",
              borderTopColor: "border.tertiary",
            },
          }}
        >
          {props.map(([prop, cssProperty, themeField]) => (
            <Box
              key={prop}
              as={"tr"}
              borderBottom={"solid 1px"}
              borderBottomColor={"border.inverse"}
            >
              <Box as={"td"}>
                <Text variant={"code"}>{prop}</Text>
              </Box>
              <Box as={"td"}>
                <Text variant={"code"}>{cssProperty}</Text>
              </Box>
              <Box as={"td"}>
                <Text variant={"code"}>{themeField || "none"}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Flex>
  )
}
export default PropGroup
