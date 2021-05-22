import React from "react"

import {DiReact} from "@react-icons/all-files/di/DiReact"
import {GiSettingsKnobs} from "@react-icons/all-files/gi/GiSettingsKnobs"
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
    <Sticky>
      <Flex
        alignItems={"center"}
        backgroundColor={"ansi.black"}
        color={"ansi.white"}
        height={headerHeight}
        justifyContent={"space-between"}
        px={[12, null, null, 16]}
      >
        <Flex alignItems={"center"}>
          <Flex alignItems={"center"} css={rotateCss}>
            <DiReact size={24} />
          </Flex>

          <Text as={"h4"} color={"inherit"} ml={4}>
            @rb/monorepo
          </Text>
        </Flex>
        <Flex alignItems={"center"} color={"text.secondary"} cursor={"pointer"}>
          <GiSettingsKnobs color={"inherit"} size={32} />
        </Flex>
      </Flex>
    </Sticky>
  )
}
