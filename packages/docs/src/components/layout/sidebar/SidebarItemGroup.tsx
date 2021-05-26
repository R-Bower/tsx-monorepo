import React from "react"

import {useRouter} from "next/router"

import {Flex, Text} from "@rb/react-components"

import SidebarItem from "./SidebarItem"
import {SidebarDoc} from "./sidebarSlice"

interface SidebarItemGroupProps {
  items: SidebarDoc[]
  title: string
}

export default function SidebarItemGroup({
  items,
  title,
}: SidebarItemGroupProps): JSX.Element {
  const router = useRouter()
  return (
    <Flex
      borderBottom={"solid 1px"}
      borderBottomColor={"border.light"}
      flexDirection={"column"}
      py={6}
    >
      <Text as={"h5"} pb={3} pl={6} pr={2}>
        {title}
      </Text>
      {items.map(({id, url}) => {
        return (
          <SidebarItem key={url} id={id} pathname={router.pathname} url={url} />
        )
      })}
    </Flex>
  )
}
