import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {CommonSystemProps} from "../../system/common"
import {commonSystemProps, shouldForwardProp} from "../../system/shared"

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
