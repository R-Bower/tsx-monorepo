import React from "react"

import styled from "styled-components"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"
import {ComponentProps} from "../../types/props"

export type BoxProps = CommonSystemProps

const BoxStyled = styled.div.withConfig({
  shouldForwardProp,
})<BoxProps>`
  ${commonSystemProps};
`

const Box = React.forwardRef<
  HTMLDivElement,
  BoxProps | ComponentProps<typeof BoxStyled>
>((props: BoxProps, ref) => {
  return <BoxStyled ref={ref} {...props} />
})

export default Box
