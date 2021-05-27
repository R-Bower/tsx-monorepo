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
    <Flex flexDirection={"column"} pt={3}>
      <Flex alignItems={"center"} flex={"1 0 auto"} width={1}>
        <Text as={"h5"} fontSize={14} fontWeight={600} pl={24}>
          {id}
        </Text>
      </Flex>
      {elements.map((element: SidebarDoc) => (
        <SidebarElement key={element.id} {...element} />
      ))}
    </Flex>
  )
}
