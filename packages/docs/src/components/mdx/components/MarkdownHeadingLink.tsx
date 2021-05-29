import React from "react"

import {HiOutlineLink} from "@react-icons/all-files/hi/HiOutlineLink"
import Link from "next/link"
import {useRouter} from "next/router"
import textContent from "react-addons-text-content"

import {Button, Position, Text, TextProps} from "@rb/react-components"

interface H2Props extends TextProps {
  as: React.ElementType
  children: React.ReactNode & HTMLCollection
}

/*
 * Heading with copy-to-clipboard functionality.
 */
export default function MarkdownHeadingLink({
  as,
  children,
  borderBottom,
  borderBottomColor,
  mt,
  mb,
  pb,
}: H2Props): JSX.Element {
  const [showingLink, setShowingLink] = React.useState(false)
  const router = useRouter()
  const hashId = textContent(children).toLowerCase().split(" ").join("-")
  const link = `${router.pathname}#${hashId}`

  return (
    <Link href={link} passHref>
      <Button
        as={"a"}
        color={"text.primary"}
        mb={mb}
        mt={mt}
        onMouseEnter={() => setShowingLink(true)}
        onMouseLeave={() => setShowingLink(false)}
        textDecoration={"none"}
        variant={"transparent"}
      >
        <Position position={"relative"} width={1}>
          <Position left={-24} position={"absolute"} top={2}>
            {showingLink ? <HiOutlineLink color={"inherit"} size={16} /> : null}
          </Position>
          {/* Scroll offset for header fixed position */}
          <Position id={hashId} position={"absolute"} top={-64} />
          <Text
            as={as}
            borderBottom={borderBottom}
            borderBottomColor={borderBottomColor}
            id={hashId}
            pb={pb}
          >
            {children}
          </Text>
        </Position>
      </Button>
    </Link>
  )
}
