import React from "react"

import {Flex, PropsWithChildren} from "@rb/react-primitives"

import Header from "./components/Header"

export default function Layout({children}: PropsWithChildren): JSX.Element {
  return (
    <Flex
      flexDirection={"column"}
      height={"100vh"}
      justifyContent={"space-between"}
      width={"100vw"}
    >
      <Header />
      <Flex flex={"1 0 auto"}>{children}</Flex>
    </Flex>
  )
}
