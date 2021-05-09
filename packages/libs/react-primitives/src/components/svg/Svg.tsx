import React from "react"

import styled from "styled-components"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"
import {ComponentProps} from "../../types/props"

const SvgStyled = styled.svg.withConfig({shouldForwardProp})<CommonSystemProps>`
  ${commonSystemProps};
`

export type SvgProps = ComponentProps<typeof SvgStyled>

const Svg = React.forwardRef((props: SvgProps, ref) => {
  return <SvgStyled ref={ref} {...props} />
})

Svg.displayName = "Primitives.Svg"

export default Svg
