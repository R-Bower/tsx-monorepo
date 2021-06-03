import React from "react"

import {Flex, Text} from "@rb/react-components"

import {SidebarDoc, SidebarDocSubGroup} from "../sidebarSlice"
import SidebarElement from "./SidebarElement"

type SidebarSubGroupProps = SidebarDocSubGroup

export default function SidebarSubGroup({
  elements,
  id,
}: SidebarSubGroupProps): JSX.Element {
  return (
    <Flex flexDirection={"column"} mt={4}>
      <Flex alignItems={"center"} flex={"1 0 auto"} width={1}>
        <Text color={"text.primary"} fontSize={16} pl={25} variant={"h4"}>
          {id}
        </Text>
      </Flex>
      {elements.map((element: SidebarDoc) => (
        <SidebarElement key={element.id} {...element} />
      ))}
    </Flex>
  )
}
