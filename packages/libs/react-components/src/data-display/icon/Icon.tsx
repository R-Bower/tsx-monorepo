import React from "react"

import styled from "styled-components"
import {ResponsiveValue} from "styled-system"

import {
  COLOR,
  SIZING,
  SPACE,
  sx,
  SxProp,
  SystemColorProps,
  SystemSizingProps,
  SystemSpaceProps,
} from "@rb/react-style-system"

type IconProps = {icon: React.ElementType} & IconBaseProps

export interface IconBaseProps
  extends SystemColorProps,
    SystemSizingProps,
    SystemSpaceProps,
    SxProp {
  "aria-label"?: string
  className?: string
  size?: ResponsiveValue<number>
  verticalAlign?: "middle" | "text-bottom" | "text-top" | "top" | "unset"
}

function Icon({icon: IconComponent, ...rest}: IconProps) {
  return <IconComponent {...rest} />
}

const StyledIcon = styled(Icon)<IconProps>`
  ${COLOR};
  ${SIZING};
  ${SPACE};
  ${sx};
`

StyledIcon.defaultProps = {
  size: 16,
}

export default StyledIcon
