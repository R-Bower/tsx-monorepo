import React from "react"

import {useRouter} from "next/router"

import {Flex} from "@rb/react-primitives"

import ComponentSearch from "./component-search/ComponentSearch"
import {sidebarConfig} from "./config"
import SidebarItem from "./SidebarItem"

interface SidebarProps {
  headerHeight: number
}

export default function Sidebar({headerHeight}: SidebarProps): JSX.Element {
  const router = useRouter()

  return (
    <Flex
      borderRight={"solid 1px"}
      borderRightColor={"border.light"}
      height={`calc(100vh - ${headerHeight}px)`}
      width={264}
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
        <ComponentSearch />
      </Flex>
    </Flex>
  )
}
