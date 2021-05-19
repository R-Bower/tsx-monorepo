import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {CommonSystemProps} from "../../system/common"
import {commonSystemProps, shouldForwardProp} from "../../system/shared"

export interface SvgProps
  extends CommonSystemProps,
    Omit<HTMLAttributes<SVGSVGElement>, "color"> {
  viewBox?: string
  xmlns?: string
}

const SvgStyled = styled.svg.withConfig({shouldForwardProp})<SvgProps>`
  ${commonSystemProps};
`

export const Svg = React.forwardRef<SVGSVGElement, SvgProps>(
  (props: SvgProps, ref) => {
    return <SvgStyled ref={ref} {...props} />
  },
)

Svg.displayName = "Svg"
