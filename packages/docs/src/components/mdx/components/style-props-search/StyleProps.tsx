import React from "react"

import {Box, Flex, Text} from "@rb/react-components"

import MarkdownHeadingLink from "../MarkdownHeadingLink"

export interface PropsListProps {
  id: string
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
            borderBottomColor={"border.light"}
          >
            <Text as={"th"} pb={2} textAlign={"start"}>
              Prop
            </Text>
            <Text as={"th"} pb={2} textAlign={"start"}>
              CSS Property
            </Text>
            <Text as={"th"} pb={2} textAlign={"start"}>
              Theme Field
            </Text>
          </Box>
        </Box>
        <Box as={"tbody"}>
          {props.map(([prop, cssProperty, themeField]) => (
            <Box
              key={prop}
              as={"tr"}
              borderBottom={"solid 1px"}
              borderBottomColor={"border.inverse"}
            >
              <Box as={"td"} py={2}>
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
