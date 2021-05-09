import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"

export interface SvgProps
  extends CommonSystemProps,
    Omit<HTMLAttributes<SVGSVGElement>, "color"> {}

const SvgStyled = styled.svg.withConfig({shouldForwardProp})<SvgProps>`
  ${commonSystemProps};
`

const Svg = React.forwardRef<SVGSVGElement, SvgProps>(
  (props: SvgProps, ref) => {
    return <SvgStyled ref={ref} {...props} />
  },
)

Svg.displayName = "Primitives.Svg"

export default Svg
