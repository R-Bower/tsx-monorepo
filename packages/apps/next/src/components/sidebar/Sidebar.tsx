import React from "react"

import {useRouter} from "next/router"

import {Flex} from "@rb/react-primitives"

import {sidebarConfig} from "./config"
import SidebarItem from "./SidebarItem"

interface SidebarProps {
  headerHeight: number
  width: number
}

export default function Sidebar({
  headerHeight,
  width,
}: SidebarProps): JSX.Element {
  const router = useRouter()

  return (
    <Flex
      bg={"white"}
      borderRight={"solid 1px"}
      borderRightColor={"border.light"}
      height={`calc(100vh - ${headerHeight}px)`}
      minWidth={width}
      width={width}
    >
      <Flex flex={"1 0 auto"} flexDirection={"column"} height={1}>
        <Flex height={16} />
        {sidebarConfig.map(({label, url}) => {
          return (
            <SidebarItem
              key={url}
              label={label}
              pathname={router.pathname}
              url={url}
            />
          )
        })}
        <Flex height={16} />
        <Flex
          borderTop={"solid 1px"}
          borderTopColor={"border.light"}
          width={1}
        />
      </Flex>
    </Flex>
  )
}
