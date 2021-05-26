import React from "react"

import {FaReact} from "@react-icons/all-files/fa/FaReact"
import Link from "next/link"

import {Flex, Text} from "@rb/react-components"

import {SidebarDoc} from "../sidebarSlice"

interface FileNodeProps extends SidebarDoc {
  level: number
}

export default function FileNode({id, level, url}: FileNodeProps): JSX.Element {
  return (
    <Link href={url} passHref>
      <Text
        as={"a"}
        bg={"gray.0"}
        color={"primary.4"}
        cursor={"pointer"}
        fontSize={14}
        fontWeight={500}
        my={1}
        pl={24 + level * 12}
        pr={24}
        py={1}
        sx={{
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        textDecoration={"none"}
        width={1}
      >
        <Flex alignItems={"center"}>
          <Flex mr={2}>
            <FaReact size={16} />
          </Flex>
          <Flex>{id}</Flex>
        </Flex>
      </Text>
    </Link>
  )
}
