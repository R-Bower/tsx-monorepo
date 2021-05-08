import React from "react"

import styled from "styled-components"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"
import {ComponentProps} from "../../types/props"

const BoxStyled = styled.div.withConfig({
  shouldForwardProp,
})<CommonSystemProps>`
  ${commonSystemProps};
`

export type BoxProps = ComponentProps<typeof BoxStyled>

const Box = React.forwardRef((props: BoxProps, ref) => {
  return <BoxStyled ref={ref} {...props} />
})

export default Box
