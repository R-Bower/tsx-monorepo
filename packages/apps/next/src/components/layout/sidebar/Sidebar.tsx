import React from "react"

import {useRouter} from "next/router"

import {Box, Flex, Sticky} from "@rb/react-primitives"

import usePersistentScroll from "~lib/hooks/usePersistentScroll"

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

  const scrollContainerProps = usePersistentScroll("sidebar")

  return (
    <Box display={["none", null, null, "block"]}>
      <Sticky
        bg={"blueGray.0"}
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
          <Flex flexDirection={"column"}>
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
          </Flex>
        </Box>
      </Sticky>
    </Box>
  )
}
