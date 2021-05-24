import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {COMMON, SystemCommonProps} from "../../system/constants"
import {shouldForwardProp} from "../../system/shouldForwardProp"
import {sx} from "../../system/sx"

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
