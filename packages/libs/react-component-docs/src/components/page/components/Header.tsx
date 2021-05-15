import React from "react"

import Image from "next/image"
import {css, keyframes} from "styled-components"

import {Flex, Text} from "@rb/react-primitives"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const rotateCss = css`
  animation: ${rotate} 5s infinite linear;
`

export default function Header(): JSX.Element {
  return (
    <Flex
      alignItems={"center"}
      backgroundColor={"bg.backdrop"}
      height={56}
      px={12}
    >
      <Flex alignItems={"center"} css={rotateCss}>
        <Image alt={"logo"} height={32} src={"/assets/logo.svg"} width={32} />
      </Flex>

      <Text as={"h3"}>@rb/monorepo</Text>
    </Flex>
  )
}
