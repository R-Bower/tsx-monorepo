import React from "react"

import {Flex} from "@rb/react-primitives"

import Globals from "./globals/Globals"

function App({children, location}) {
  return (
    <Flex
      flexDirection={"column"}
      minHeight={"calc(100vh - 93px - 70px)"}
      width={1}
    >
      <Globals location={location} />

      <Flex flexGrow={1} height={1} justifyContent={"center"}>
        {children}
      </Flex>
    </Flex>
  )
}

export default function Wrapper({children, element, props}) {
  return <App location={props.location}>{children || element}</App>
}
