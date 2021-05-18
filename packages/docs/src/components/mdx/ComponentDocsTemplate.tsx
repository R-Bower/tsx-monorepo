import React from "react"

import {Box, Flex, Text} from "@rb/react-primitives"

import {MDXSource} from "./props"

export default function ComponentDocsTemplate({
  code,
  frontmatter,
}: MDXSource): JSX.Element {
  return (
    <Flex flex={"1 0 auto"} flexDirection={"column"}>
      <Text as={"h1"}>{frontmatter.title}</Text>
      <Box
        borderBottom={"solid 1px"}
        borderBottomColor={"border.default"}
        height={2}
      />
      <Text as={"p"}>{frontmatter.description}</Text>
    </Flex>
  )
}
