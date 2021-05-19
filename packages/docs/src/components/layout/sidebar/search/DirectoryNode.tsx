import React from "react"

import {Flex, css, Text} from "@rb/react-primitives"

import {SidebarDoc} from "../utils"

interface DirectoryNodeProps extends SidebarDoc {
  index: number
  isExpanded: boolean
  title: string
}

const hoverCss = css({
  "&:hover": {
    bg: "btn.secondary.hover.bg",
    color: "btn.secondary.hover.text",
    transition: "background-color 0.3s, color 0.3s",
  },
})

export default function DirectoryNode({
  index,
  isExpanded,
  title,
}: DirectoryNodeProps): JSX.Element {
  return (
    <Flex justifyContent={"space-between"} width={1}>
      <Text
        as={"a"}
        bg={"btn.secondary.base.bg"}
        color={["text.primary", "text.secondary"]}
        css={hoverCss}
        cursor={"pointer"}
        fontSize={14}
        fontWeight={600}
        my={4}
        p={4}
        pl={24}
        textDecoration={"none"}
        transition={"background-color 0.3s, color 0.3s"}
        width={1}
      >
        <Text as={"h5"}>{title}</Text>
      </Text>
    </Flex>
  )
}
