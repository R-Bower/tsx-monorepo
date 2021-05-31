import React from "react"

import {DiReact} from "@react-icons/all-files/di/DiReact"
import {FiSun} from "@react-icons/all-files/fi/FiSun"
import {HiOutlineMoon} from "@react-icons/all-files/hi/HiOutlineMoon"
import Link from "next/link"

import {Button, Flex, Position, Text} from "@rb/react-components"

import {rotateCss} from "~lib/animations/rotate"
import {useAppSelector} from "~lib/hooks/useSelector"
import {ViewMode} from "~redux/reducers/ui/uiSlice"

interface HeaderProps {
  headerHeight: number | number[]
}

export default function Header({headerHeight}: HeaderProps): JSX.Element {
  const viewMode = useAppSelector<ViewMode>((state) => state.ui.viewMode)
  return (
    <Position id={"app-header"} position={"sticky"} top={0} zIndex={1}>
      <Flex
        alignItems={"center"}
        backgroundColor={"globalNav.bg"}
        color={"globalNav.text"}
        height={headerHeight}
        justifyContent={"space-between"}
        px={[6, 6, 15, 6]}
      >
        <Flex alignItems={"center"}>
          <Flex alignItems={"center"} color={"globalNav.icon"} css={rotateCss}>
            <DiReact size={24} />
          </Flex>

          <Link href={"https://github.com/R-Bower/tsx-monorepo"} passHref>
            <Text as={"a"} color={"inherit"} ml={4} variant={"h4"}>
              @rb/tsx-monorepo
            </Text>
          </Link>
        </Flex>
        <Button
          alignItems={"center"}
          aria-label={"Toggle light/dark theme"}
          bg={"transparent"}
          border={"none"}
          color={"globalNav.icon"}
          cursor={"pointer"}
          outline={"none"}
        >
          {viewMode === "dark" ? (
            <FiSun size={24} />
          ) : (
            <HiOutlineMoon size={24} />
          )}
        </Button>
      </Flex>
    </Position>
  )
}
