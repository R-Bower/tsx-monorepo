import React from "react"

import {Flex, Text} from "@rb/react-primitives"

export default function Footer(): JSX.Element {
  return (
    <Flex height={[100, 100, 200]} justifyContent={"space-between"}>
      <Text as={"h3"}>Footer</Text>
    </Flex>
  )
}
