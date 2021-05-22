import React from "react"

import {Box, Flex, Grid} from "@rb/react-primitives"

import Header from "./Header"
import Sidebar from "./sidebar/Sidebar"

interface LayoutProps {
  children: React.ReactNode
}

const headerHeight = 56
const sidebarWidth = 232

export default function Layout({children}: LayoutProps): JSX.Element {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-between"}
      minHeight={"100vh"}
    >
      <Header headerHeight={headerHeight} />

      <Flex flex={"1 1 auto"}>
        <Sidebar headerHeight={headerHeight} width={sidebarWidth} />

        <Box width={1}>
          <Grid
            gridRowGap={"16px"}
            gridTemplateColumns={"minmax(0px, 960px) 220px"}
            maxWidth={960}
            mx={"auto"}
            p={5}
            width={"100%"}
          >
            {children}
          </Grid>
        </Box>
      </Flex>
    </Flex>
  )
}
