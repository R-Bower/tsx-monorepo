import React from "react"

import {Box, Position} from "@rb/react-primitives"

import usePersistentScroll from "~lib/hooks/usePersistentScroll"

import sidebarDocs from "./config.json"
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
            items={sidebarDocs.components}
            title={sidebarDocs.id}
          />
        </Position>
      </Position>
    </Box>
  )
}
