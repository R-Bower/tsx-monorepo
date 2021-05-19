import React from "react"

import Image from "next/image"
import {css, keyframes} from "styled-components"

import {Flex, Sticky, Text} from "@rb/react-primitives"

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

interface HeaderProps {
  headerHeight: number | number[]
}

export default function Header({headerHeight}: HeaderProps): JSX.Element {
  return (
    <Sticky height={headerHeight} width={1}>
      <Flex
        alignItems={"center"}
        backgroundColor={"bg.header"}
        height={headerHeight}
        px={12}
      >
        <Flex alignItems={"center"} css={rotateCss}>
          <Image
            alt={"logo"}
            height={32}
            src={"/images/svg/logo.svg"}
            width={32}
          />
        </Flex>

        <Text as={"h4"}>@rb/monorepo</Text>
      </Flex>
    </Sticky>
  )
}
