import React from "react"

import {NextSeo} from "next-seo"

import {Flex} from "@rb/react-primitives"

import {pagePadding} from "~components/page/config"

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo description={"Hello"} title={"Flex"} />
      <Flex
        alignItems={"center"}
        flex={"1 0 auto"}
        flexDirection={"column"}
        {...pagePadding}
      ></Flex>
    </>
  )
}
