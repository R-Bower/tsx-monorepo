import React from "react"

import {useRouter} from "next/router"

import {Flex, Position, PositionProps, Text} from "@rb/react-components"
import {usePersistentScroll} from "@rb/react-hooks"

import {Media} from "~components/media/Media"
import {useAppSelector} from "~redux/store"

import sidebarConfig from "./config.json"
import Search from "./search/Search"
import SidebarItem from "./SidebarItem"

interface SidebarProps {
  headerHeight: number
  position?: PositionProps["position"]
  width: number
}

function SidebarView({headerHeight, position, width}: SidebarProps) {
  const router = useRouter()
  const scrollContainerProps = usePersistentScroll("sidebar")
  return (
    <Position
      bg={"globalNav.inputBg"}
      borderRight={"solid 1px"}
      borderRightColor={"border.secondary"}
      height={`calc(100vh - ${headerHeight}px)`}
      minWidth={width}
      position={position}
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
  )
}

export default function Sidebar({
  headerHeight,
  width,
}: SidebarProps): JSX.Element {
  const mobileSidebarShowing = useAppSelector(
    (state) => state.sidebar.mobileShowing,
  )

  return (
    <>
      <Media lessThan={"md"}>
        {mobileSidebarShowing ? (
          <SidebarView
            headerHeight={headerHeight}
            position={"fixed"}
            width={width}
          />
        ) : null}
      </Media>
      <Media greaterThanOrEqual={"md"}>
        <SidebarView
          headerHeight={headerHeight}
          position={"sticky"}
          width={width}
        />
      </Media>
    </>
  )
}
