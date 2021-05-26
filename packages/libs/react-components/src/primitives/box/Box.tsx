import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {
  COMMON,
  shouldForwardProp,
  sx,
  SystemCommonProps,
} from "@rb/react-style-system"

export interface BoxProps
  extends SystemCommonProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const BoxStyled = styled.div.withConfig({
  shouldForwardProp,
})<BoxProps>`
  ${COMMON};
  ${sx};
`

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (props: BoxProps, ref) => {
    return <BoxStyled ref={ref} {...props} />
  },
)

Box.displayName = "Box"
