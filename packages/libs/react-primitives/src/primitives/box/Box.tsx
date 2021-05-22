import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {COMMON} from "../../system/constants"
import {shouldForwardProp} from "../../system/shouldForwardProp"
import {CommonSystemProps} from "../../system/types"

export interface BoxProps
  extends CommonSystemProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const BoxStyled = styled.div.withConfig({
  shouldForwardProp,
})<BoxProps>`
  ${COMMON};
`

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (props: BoxProps, ref) => {
    return <BoxStyled ref={ref} {...props} />
  },
)

Box.displayName = "Box"
