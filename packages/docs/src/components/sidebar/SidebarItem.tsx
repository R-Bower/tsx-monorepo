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
  icon,
  index = 0,
  pathname,
  url,
}: SidebarItemProps): JSX.Element {
  const active = pathname === url
  return (
    <Link href={url} passHref>
      <Text
        as={"a"}
        // css={css({
        //   ":hover": {
        //     backgroundColor: "btn.secondary.hover.bg",
        //     color: "btn.secondary.hover.text",
        //     transition: "background-color 0.4s",
        //   },
        //   backgroundColor: active
        //     ? "btn.secondary.hover.bg"
        //     : "btn.secondary.base.bg",
        //   color: "btn.secondary.base.text",
        //   fontSize: 14,
        //   fontWeight: 600,
        //   pl: 24,
        //   pr: 8,
        //   py: 8,
        //   textDecoration: "none",
        //   transition: "background-color 0.2s",
        // })}
      >
        <Flex pl={index * 4}>
          <Flex
            color={
              active ? "btn.secondary.hover.text" : "btn.secondary.base.bg"
            }
            mr={6}
          >
            {icon}
          </Flex>
          {label}
        </Flex>
      </Text>
    </Link>
  )
}
