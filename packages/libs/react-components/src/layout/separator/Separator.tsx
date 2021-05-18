import React from "react"

import {Property} from "csstype"
import {ResponsiveValue} from "styled-system"

import {Flex} from "@rb/react-primitives"

interface SeparatorProps {
  size: ResponsiveValue<Property.Width>
  type: "horizontal" | "vertical"
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (props: SeparatorProps, ref) => {
    return <Flex ref={ref}></Flex>
  },
)
