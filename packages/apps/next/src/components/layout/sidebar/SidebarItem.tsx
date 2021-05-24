import React from "react"

import Link from "next/link"

import {Flex, Text} from "@rb/react-primitives"

import {SidebarDoc} from "./sidebarSlice"

interface SidebarItemProps extends SidebarDoc {
  icon?: React.ReactNode
  index?: number
  pathname: string
}

export default function SidebarItem({
  id,
  index = 0,
  pathname,
  url,
}: SidebarItemProps): JSX.Element {
  const active = pathname === url
  return (
    <Link href={url} passHref>
      <Text
        as={"a"}
        color={"btn.secondary.base.text"}
        fontSize={14}
        fontWeight={500}
        pl={6}
        pr={2}
        py={2}
        sx={{
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        textDecoration={active ? "underline" : "none"}
        transition={"background-color 0.2s"}
      >
        <Flex pl={index * 4}>{id}</Flex>
      </Text>
    </Link>
  )
}
