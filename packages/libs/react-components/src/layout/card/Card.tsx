import React from "react"

import {Flex, IFlexProps} from "@rb/react-primitives"

interface ICardProps extends IFlexProps {
  children: React.ReactNode
}

export default function Card({children, ...props}: ICardProps): JSX.Element {
  return (
    <Flex
      boxShadow={"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"}
      {...props}
    >
      {children}
    </Flex>
  )
}
