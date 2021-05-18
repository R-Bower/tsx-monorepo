import React from "react"

import {Flex, sx, SystemStyleObject, Text} from "@rb/react-primitives"

import {SidebarDoc} from "../utils"

interface DirectoryNodeProps extends SidebarDoc {
  index: number
  isExpanded: boolean
  title: string
}

export default function DirectoryNode({
  index,
  isExpanded,
  title,
}: DirectoryNodeProps): JSX.Element {
  return (
    <Flex justifyContent={"space-between"} width={1}>
      <Text
        as={"a"}
        css={sx({
          "&:hover": {
            backgroundColor: "btn.secondary.hover.bg",
            color: "btn.secondary.hover.text",
            transition: "background-color 0.3s, color 0.3s",
          } as SystemStyleObject,
          backgroundColor: "btn.secondary.base.bg",
          color: "text.primary",
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 600,
          my: 4,
          p: 4,
          pl: 24,
          textDecoration: "none",
          transition: "background-color 0.3s, color 0.3s",
          width: 1,
        } as SystemStyleObject)}
      >
        <Text as={"h5"}>{title}</Text>
      </Text>
    </Flex>
  )
}
