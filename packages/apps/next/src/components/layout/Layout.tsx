import React from "react"

import {Box, Fixed, Flex, Sticky} from "@rb/react-primitives"

import Sidebar from "~components/sidebar/Sidebar"

import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode
}

const headerHeight = 56
const sidebarWidth = 232

export default function Layout({children}: LayoutProps): JSX.Element {
  return (
    <Flex flexDirection={"column"} justifyContent={"space-between"}>
      <Sticky height={headerHeight}>
        <Header headerHeight={headerHeight} />
      </Sticky>
      <Flex flex={"1 0 auto"}>
        <Fixed>
          <Sidebar headerHeight={headerHeight} width={sidebarWidth} />
        </Fixed>
        <Box ml={sidebarWidth}>{children}</Box>
      </Flex>
    </Flex>
  )
}
