import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"

export interface BoxProps
  extends CommonSystemProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const BoxStyled = styled.div.withConfig({
  shouldForwardProp,
})<BoxProps>`
  ${commonSystemProps};
`

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (props: BoxProps, ref) => {
    return <BoxStyled ref={ref} {...props} />
  },
)

export default Box
