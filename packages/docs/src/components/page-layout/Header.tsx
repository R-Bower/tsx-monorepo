import React from "react"

import {DiReact} from "@react-icons/all-files/di/DiReact"
import {GiSettingsKnobs} from "@react-icons/all-files/gi/GiSettingsKnobs"

import {Button, Flex, Position, Text} from "@rb/react-components"

import {rotateCss} from "~lib/animations/rotate"

interface HeaderProps {
  headerHeight: number | number[]
}

export default function Header({headerHeight}: HeaderProps): JSX.Element {
  return (
    <Position id={"app-header"} position={"sticky"} top={0} zIndex={1}>
      <Flex
        alignItems={"center"}
        backgroundColor={"nav.bg.primary"}
        color={"nav.text.primary"}
        height={headerHeight}
        justifyContent={"space-between"}
        px={[6, 15, 15, 6]}
      >
        <Flex alignItems={"center"}>
          <Flex alignItems={"center"} css={rotateCss}>
            <DiReact size={24} />
          </Flex>

          <Text as={"h4"} color={"inherit"} ml={4}>
            @rb/monorepo
          </Text>
        </Flex>
        {/*<Button*/}
        {/*  alignItems={"center"}*/}
        {/*  bg={"transparent"}*/}
        {/*  border={"none"}*/}
        {/*  color={"icon.primary"}*/}
        {/*  cursor={"pointer"}*/}
        {/*  outline={"none"}*/}
        {/*>*/}
        {/*  <GiSettingsKnobs color={"inherit"} size={32} />*/}
        {/*</Button>*/}
      </Flex>
    </Position>
  )
}
