import React from "react"

import {useRouter} from "next/router"

import {Box, Flex, Position, Text} from "@rb/react-components"
import {usePersistentScroll} from "@rb/react-hooks"

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
          <Flex
            borderBottom={"solid 1px"}
            borderBottomColor={"border.light"}
            flexDirection={"column"}
            py={6}
          >
            <Text as={"h4"} pb={3} pl={6} pr={2}>
              {sidebarConfig.id}
            </Text>
            {sidebarConfig.components.map(({id, url}) => {
              return (
                <SidebarItem
                  key={url}
                  id={id}
                  pathname={router.asPath}
                  url={url}
                />
              )
            })}
          </Flex>
          <Search />
        </Position>
      </Position>
    </Box>
  )
}
