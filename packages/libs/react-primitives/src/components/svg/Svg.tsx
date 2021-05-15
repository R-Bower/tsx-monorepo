import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {commonSystemProps, shouldForwardProp} from "../../system/shared"
import {CommonSystemProps} from "../../types/props"

export interface SvgProps
  extends CommonSystemProps,
    Omit<HTMLAttributes<SVGSVGElement>, "color"> {}

const SvgStyled = styled.svg.withConfig({shouldForwardProp})<SvgProps>`
  ${commonSystemProps};
`

export const Svg = React.forwardRef<SVGSVGElement, SvgProps>(
  (props: SvgProps, ref) => {
    return <SvgStyled ref={ref} {...props} />
  },
)

Svg.displayName = "Svg"
