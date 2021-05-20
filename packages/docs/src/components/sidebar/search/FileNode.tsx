import React from "react"

import {FaReact} from "@react-icons/all-files/fa/FaReact"
import Link from "next/link"

import {css, Flex, Text} from "@rb/react-primitives"

import {SidebarDocTree} from "../sidebarSlice"

interface FileNodeProps extends SidebarDocTree {
  level: number
}

export default function FileNode({id, level, url}: FileNodeProps): JSX.Element {
  return (
    <Flex>
      <Link href={url} passHref>
        <Text
          as={"a"}
          css={css({
            "&:hover": {
              bg: "btn.secondary.hover.bg",
              color: "btn.secondary.hover.text",
              transition: "background-color 0.3s, color 0.3s",
            },
            bg: "btn.secondary.base.bg",
            color: ["text.primary", "text.secondary"],
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 600,
            my: 4,
            pl: 12 + level * 24,
            pr: 24,
            py: 4,
            textDecoration: "none",
            transition: "background-color 0.3s, color 0.3s",
            width: 1,
          })}
        >
          <Flex alignItems={"center"}>
            <Flex mr={8}>
              <FaReact size={16} />
            </Flex>
            <Flex>{id}</Flex>
          </Flex>
        </Text>
      </Link>
    </Flex>
  )
}
