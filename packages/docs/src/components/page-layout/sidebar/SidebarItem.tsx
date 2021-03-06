import React from "react"

import Link from "next/link"

import {Flex, Text} from "@rb/react-components"

interface SidebarItemProps {
  id: string
  icon?: React.ReactNode
  pathname: string
  url: string
}

export default function SidebarItem({
  id,
  pathname,
  url,
}: SidebarItemProps): JSX.Element {
  const active = url === pathname
  return (
    <Link href={url} passHref>
      <Text
        as={"a"}
        color={"text.link"}
        pl={6}
        pr={2}
        py={2}
        sx={{
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        textDecoration={active ? "underline" : "none"}
        variant={"p"}
      >
        <Flex>{id}</Flex>
      </Text>
    </Link>
  )
}
