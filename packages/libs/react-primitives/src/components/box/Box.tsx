import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {commonSystemProps, shouldForwardProp} from "../../system/shared"
import {CommonSystemProps} from "../../types/props"

export interface BoxProps
  extends CommonSystemProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const BoxStyled = styled.div.withConfig({
  shouldForwardProp,
})<BoxProps>`
  ${commonSystemProps};
`

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (props: BoxProps, ref) => {
    return <BoxStyled ref={ref} {...props} />
  },
)

Box.displayName = "Box"
