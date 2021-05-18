import React from "react"

import {Flex, Relative} from "@rb/react-primitives"

import Header from "./Header"
import Sidebar from "./sidebar/Sidebar"

export default function Layout({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element {
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
