import React from "react"

import Link from "next/link"
import {useRouter} from "next/router"
import textContent from "react-addons-text-content"

import {Absolute, Box, Text} from "@rb/react-primitives"

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
        <Absolute left={0}>icon</Absolute>
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
