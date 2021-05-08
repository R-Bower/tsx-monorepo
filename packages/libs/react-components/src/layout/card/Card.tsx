import React from "react"

import {Flex} from "@rb/react-primitives"

interface CardProps {
  children: React.ReactNode
}

export default function Card({children}: CardProps): JSX.Element {
  return <Flex>{children}</Flex>
}
