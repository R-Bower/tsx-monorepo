import React from "react"

import {Box, Position} from "@rb/react-components"

import usePersistentScroll from "~lib/hooks/usePersistentScroll"

import sidebarConfig from "./config.json"
import Search from "./search/Search"
import SidebarItemGroup from "./SidebarItemGroup"

interface SidebarProps {
  headerHeight: number
  width: number
}

export default function Sidebar({
  headerHeight,
  width,
}: SidebarProps): JSX.Element {
  const scrollContainerProps = usePersistentScroll("sidebar")

  return (
    <Box display={["none", null, null, "block"]}>
      <Position
        bg={"blueGray.0"}
        borderRight={"solid 1px"}
        borderRightColor={"border.light"}
        height={`calc(100vh - ${headerHeight}px)`}
        minWidth={width}
        position={"sticky"}
        top={headerHeight}
      >
        <Position
          {...scrollContainerProps}
          height={"100%"}
          overflow={"auto"}
          position={"static"}
        >
          <SidebarItemGroup
            items={sidebarConfig.components}
            title={sidebarConfig.id}
          />
          <Search />
        </Position>
      </Position>
    </Box>
  )
}
