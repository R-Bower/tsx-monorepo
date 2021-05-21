import React from "react"

import {GiSettingsKnobs} from "@react-icons/all-files/gi/GiSettingsKnobs"
import {GoSettings} from "@react-icons/all-files/go/GoSettings"
import {IoIosSettings} from "@react-icons/all-files/io/IoIosSettings"
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
    <Flex
      alignItems={"center"}
      backgroundColor={"bg.header"}
      height={headerHeight}
      justifyContent={"space-between"}
      px={12}
    >
      <Flex alignItems={"center"}>
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
      <Flex alignItems={"center"} color={"text.secondary"} cursor={"pointer"}>
        <GiSettingsKnobs color={"inherit"} size={32} />
      </Flex>
    </Flex>
  )
}
