import React from "react"

import Link from "next/link"

import {Flex, Text} from "@rb/react-components"

import {pagePadding} from "~components/page-layout/config"

export default function NotFoundPage(): JSX.Element {
  return (
    <Flex flex={"1 0 auto"} flexDirection={"column"} {...pagePadding}>
      <Text mb={16} variant={"h1"}>
        Page Not Found
      </Text>
      <Link href={"/"} passHref>
        <Text
          as={"a"}
          color={"text.link"}
          cursor={"pointer"}
          textDecoration={"none"}
          variant={"h5"}
        >
          Click here to return home
        </Text>
      </Link>
    </Flex>
  )
}
