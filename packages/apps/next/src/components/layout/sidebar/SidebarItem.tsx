import React from "react"

import Link from "next/link"

import {Flex, Text} from "@rb/react-primitives"

import {SidebarConfigEntry} from "./config"

interface SidebarItemProps extends SidebarConfigEntry {
  icon?: React.ReactNode
  index?: number
  pathname: string
}

export default function SidebarItem({
  label,
  index = 0,
  pathname,
  url,
}: SidebarItemProps): JSX.Element {
  const active = pathname === url
  return (
    <Link href={url} passHref>
      <Text
        as={"a"}
        backgroundColor={active ? "btn.secondary.hover.bg" : "gray.0"}
        color={"btn.secondary.base.text"}
        fontSize={14}
        fontWeight={500}
        pl={6}
        pr={2}
        py={2}
        sx={{
          ":hover": {
            backgroundColor: "btn.secondary.hover.bg",
            color: "btn.secondary.hover.text",
            transition: "background-color 0.4s",
          },
        }}
        textDecoration={"none"}
        transition={"background-color 0.2s"}
      >
        <Flex pl={index * 4}>{label}</Flex>
      </Text>
    </Link>
  )
}
