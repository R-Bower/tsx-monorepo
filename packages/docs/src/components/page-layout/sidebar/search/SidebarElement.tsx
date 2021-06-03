import React from "react"

import {FaReact} from "@react-icons/all-files/fa/FaReact"
import Link from "next/link"
import {useRouter} from "next/router"

import {Flex, Text} from "@rb/react-components"

import {rotateCss} from "~lib/animations/rotate"

import {SidebarDoc} from "../sidebarSlice"

type SidebarElementProps = SidebarDoc

export default function SidebarElement({
  id,
  url,
}: SidebarElementProps): JSX.Element {
  const router = useRouter()
  const active = router.asPath === url
  return (
    <Link href={url} passHref>
      <Text
        as={"a"}
        color={"text.link"}
        pl={9}
        pr={24}
        py={2}
        sx={{
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        textDecoration={active ? "underline" : "none"}
        variant={"p"}
        width={1}
      >
        <Flex alignItems={"center"}>
          {active ? (
            <Flex css={rotateCss}>
              <FaReact size={16} />
            </Flex>
          ) : (
            <Flex>
              <FaReact size={16} />
            </Flex>
          )}

          <Flex ml={2}>{id}</Flex>
        </Flex>
      </Text>
    </Link>
  )
}
