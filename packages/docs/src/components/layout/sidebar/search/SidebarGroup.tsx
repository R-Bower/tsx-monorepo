import React from "react"

import {pascalCase} from "change-case"

import {Flex, Text} from "@rb/react-components"

import {SidebarDocGroup, SidebarDocSubGroup} from "../sidebarSlice"
import SidebarSubGroup from "./SidebarSubGroup"

type SidebarGroupProps = SidebarDocGroup

export default function SidebarGroup({
  id,
  subgroups,
}: SidebarGroupProps): JSX.Element {
  return (
    <Flex flexDirection={"column"} mb={3}>
      <Flex justifyContent={"space-between"}>
        <Flex alignItems={"center"} flex={"1 0 auto"} width={1}>
          <Text as={"h5"} fontSize={16} fontWeight={500} pl={24}>
            {pascalCase(id)}
          </Text>
        </Flex>
      </Flex>
      {subgroups ? (
        <Flex flexDirection={"column"}>
          {subgroups.map((subgroup: SidebarDocSubGroup) => (
            <SidebarSubGroup key={subgroup.id} {...subgroup} />
          ))}
        </Flex>
      ) : null}
    </Flex>
  )
}
