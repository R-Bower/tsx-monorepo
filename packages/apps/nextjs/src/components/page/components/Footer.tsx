import React from "react"

import {Flex} from "@rb/react-primitives"

export default function Footer(): JSX.Element {
  return (
    <Flex
      backgroundColor={"tertiary"}
      height={[100, 100, 200]}
      justifyContent={"space-between"}
    ></Flex>
  )
}
