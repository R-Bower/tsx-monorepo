import React from "react"

import {Flex} from "@rb/react-primitives"

export default function Header(): JSX.Element {
  return (
    <Flex
      backgroundColor={"primary"}
      borderBottom={"solid 1px"}
      height={80}
    ></Flex>
  )
}
