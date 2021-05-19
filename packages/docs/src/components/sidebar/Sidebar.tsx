import React from "react"

import {useRouter} from "next/router"

import {Flex} from "@rb/react-primitives"

import {useAppSelector} from "~lib/hooks/useSelector"

import {sidebarConfig} from "./config"
import Search from "./search/Search"
import SidebarItem from "./SidebarItem"
import {SidebarDoc} from "./sidebarSlice"

interface SidebarProps {
  headerHeight: number
}

export default function Sidebar({headerHeight}: SidebarProps): JSX.Element {
  const router = useRouter()
  const sidebarDocs = useAppSelector<SidebarDoc[]>(
    (state) => state.sidebar.docs,
  )

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
        <Search sidebarDocs={sidebarDocs} />
      </Flex>
    </Flex>
  )
}
