import React from "react"

import {Flex, Relative} from "@rb/react-primitives"

import Sidebar from "~components/sidebar/Sidebar"

import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({children}: LayoutProps): JSX.Element {
  return (
    <Relative height={"100vh"} width={"100vw"}>
      <Flex
        flexDirection={"column"}
        height={"100vh"}
        justifyContent={"space-between"}
        width={"100vw"}
      >
        <Header headerHeight={56} />
        <Flex flex={"1 0 auto"}>
          <Sidebar headerHeight={56} />
          <Flex flex={"1 0 auto"} flexDirection={"column"}>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Relative>
  )
}
