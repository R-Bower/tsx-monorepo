import React from "react"

import {Flex} from "@rb/react-primitives"

interface ICardProps {
  children: React.ReactNode
}

export default function Card({children}: ICardProps): JSX.Element {
  return <Flex>{children}</Flex>
}
