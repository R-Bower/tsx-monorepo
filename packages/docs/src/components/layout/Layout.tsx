import React from "react"

import {css} from "styled-components"

import {Box, Flex, Grid} from "@rb/react-components"
import {usePersistentScroll} from "@rb/react-hooks"

import Header from "./Header"
import Sidebar from "./sidebar/Sidebar"

interface LayoutProps {
  children: React.ReactNode
}

const headerHeight = 56
const sidebarWidth = 232

const flexCss = css`
  scroll-behavior: smooth;
`

export default function Layout({children}: LayoutProps): JSX.Element {
  const {onScroll, ref} = usePersistentScroll("app-content")
  return (
    <Flex
      ref={ref}
      css={flexCss}
      flexDirection={"column"}
      justifyContent={"space-between"}
      minHeight={"100vh"}
      onScroll={onScroll}
    >
      <Header headerHeight={headerHeight} />

      <Flex flex={"1 1 auto"}>
        <Sidebar headerHeight={headerHeight} width={sidebarWidth} />

        <Box width={1}>
          <Grid
            gridRowGap={"16px"}
            gridTemplateColumns={[
              "minmax(0px, 960px)",
              "minmax(0px, 960px)",
              "minmax(0px, 960px) 220px",
            ]}
            maxWidth={960}
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
