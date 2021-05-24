import React from "react"

import Link from "next/link"
import {useRouter} from "next/router"
import textContent from "react-addons-text-content"

import {Position, Box, Text} from "@rb/react-primitives"

interface H2Props {
  as: React.ElementType
  children: React.ReactNode & HTMLCollection
}

/*
 *
 */
export default function MarkdownHeadingLink({
  as,
  children,
}: H2Props): JSX.Element {
  const router = useRouter()
  const link = `${router.pathname}#${textContent(children)
    .toLowerCase()
    .split(" ")
    .join("-")}`
  return (
    <Link href={link}>
      <Box>
        <Position left={0} position={"absolute"}>
          icon
        </Position>
        <Text
          as={as}
          borderBottom={"solid 1px"}
          borderBottomColor={"border.light"}
          pb={4}
        >
          {children}
        </Text>
      </Box>
    </Link>
  )
}
