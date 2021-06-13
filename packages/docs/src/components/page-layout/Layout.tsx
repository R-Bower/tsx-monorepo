import React from "react"

import {Box, Flex, Grid} from "@rb/react-components"
import {usePersistentScroll} from "@rb/react-hooks"

import Header from "./Header"
import Sidebar from "./sidebar/Sidebar"

interface LayoutProps {
  children: React.ReactNode
}

const headerHeight = 56
const sidebarWidth = 252

export default function Layout({children}: LayoutProps): JSX.Element {
  const {onScroll, ref} = usePersistentScroll("app-content")
  return (
    <Flex
      ref={ref}
      bg={"bg.primary"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      minHeight={"100vh"}
      onScroll={onScroll}
      sx={{
        scrollBehavior: "smooth",
      }}
    >
      <Header headerHeight={headerHeight} />

      <Flex flex={"1 1 auto"}>
        <Sidebar headerHeight={headerHeight} width={sidebarWidth} />

        <Box width={1}>
          <Grid
            gridTemplateColumns={[
              "minmax(0px, 960px)",
              "minmax(0px, 960px)",
              "minmax(0px, 960px)",
              "minmax(0px, 960px)",
              "minmax(0px, 960px) 220px",
            ]}
            maxWidth={1324}
            mx={"auto"}
            width={1}
          >
            {children}
          </Grid>
        </Box>
      </Flex>
    </Flex>
  )
}
