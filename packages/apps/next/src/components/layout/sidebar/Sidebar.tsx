import React from "react"

import {Box, Sticky} from "@rb/react-primitives"

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
      <Sticky
        bg={"blueGray.0"}
        borderRight={"solid 1px"}
        borderRightColor={"border.light"}
        color={"ansi.blue"}
        height={`calc(100vh - ${headerHeight}px)`}
        minWidth={width}
        top={headerHeight}
      >
        <Box
          {...scrollContainerProps}
          borderRadius={0}
          borderRightWidth={1}
          borderWidth={0}
          height={"100%"}
          overflow={"auto"}
        >
          <SidebarItemGroup
            items={sidebarDocs.components}
            title={sidebarDocs.id}
          />
        </Box>
      </Sticky>
    </Box>
  )
}
