import React from "react"

import styled from "styled-components"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"
import {ComponentProps} from "../../types/props"

export type SvgProps = CommonSystemProps

const SvgStyled = styled.svg.withConfig({shouldForwardProp})<SvgProps>`
  ${commonSystemProps};
`

const Svg = React.forwardRef<
  SVGSVGElement,
  SvgProps | ComponentProps<typeof SvgStyled>
>((props: SvgProps, ref) => {
  return <SvgStyled ref={ref} {...props} />
})

Svg.displayName = "Primitives.Svg"

export default Svg
