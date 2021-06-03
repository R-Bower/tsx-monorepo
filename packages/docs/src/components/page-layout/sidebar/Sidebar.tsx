import React from "react"

import {useRouter} from "next/router"

import {Flex, Position, Text} from "@rb/react-components"
import {usePersistentScroll} from "@rb/react-hooks"

import {useAppSelector} from "~redux/store"

import sidebarConfig from "./config.json"
import Search from "./search/Search"
import SidebarItem from "./SidebarItem"

interface SidebarProps {
  headerHeight: number
  width: number
}

export default function Sidebar({
  headerHeight,
  width,
}: SidebarProps): JSX.Element {
  const scrollContainerProps = usePersistentScroll("sidebar")
  const router = useRouter()
  const breakpoint = useAppSelector((state) => state.ui.breakpoint)
  const mobileSidebarShowing = useAppSelector(
    (state) => state.sidebar.mobileShowing,
  )

  return breakpoint > 2 || mobileSidebarShowing ? (
    <Position
      bg={"globalNav.inputBg"}
      borderRight={"solid 1px"}
      borderRightColor={"border.secondary"}
      height={`calc(100vh - ${headerHeight}px)`}
      minWidth={width}
      position={breakpoint > 2 ? "sticky" : "fixed"}
      top={headerHeight}
      zIndex={2}
    >
      <Position
        {...scrollContainerProps}
        height={"100%"}
        overflow={"auto"}
        position={"static"}
      >
        <Flex
          borderBottom={"solid 1px"}
          borderBottomColor={"border.secondary"}
          flexDirection={"column"}
          py={6}
        >
          <Text color={"text.primary"} pb={3} pl={6} pr={2} variant={"h4"}>
            {sidebarConfig.id}
          </Text>
          {sidebarConfig.components.map(({id, url}) => {
            return (
              <SidebarItem
                key={url}
                id={id}
                pathname={router.pathname}
                url={url}
              />
            )
          })}
        </Flex>
        <Search />
      </Position>
    </Position>
  ) : null
}
