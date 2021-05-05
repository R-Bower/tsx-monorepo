import React from "react"

import {Flex} from "@rb/react-primitives"

import {IPropsWithChildren} from "~types/props"

import Footer from "./components/Footer"
import Header from "./components/Header"

export default function Layout({children}: IPropsWithChildren): JSX.Element {
  return (
    <Flex
      flexDirection={"column"}
      height={"100vh"}
      justifyContent={"space-between"}
      width={"100vw"}
    >
      <Header />
      <Flex flex={"1 0 auto"}>{children}</Flex>
      <Footer />
    </Flex>
  )
}
