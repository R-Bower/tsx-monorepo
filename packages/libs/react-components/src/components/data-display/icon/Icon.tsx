import React, {ComponentProps} from "react"

import {Size} from "@primer/styled-octicons"
import styled from "styled-components"
import * as StyledSystem from "styled-system"

import {sx, SxProp, SystemStyleObject} from "@rb/react-primitives"

type OcticonProps = {icon: React.ElementType} & IconProps

export interface IconProps
  extends StyledSystem.ColorProps,
    StyledSystem.SpaceProps {
  "aria-label"?: string
  className?: string
  size?: number | Size
  verticalAlign?: "middle" | "text-bottom" | "text-top" | "top" | "unset"
  sx?: SystemStyleObject
}

function Octicon({icon: IconComponent, ...rest}: OcticonProps) {
  return <IconComponent {...rest} />
}

const StyledOcticon = styled(Octicon)<SxProp>`
  // ${sx}
`
// ${COMMON}

StyledOcticon.defaultProps = {
  size: 16,
}

export type StyledOcticonProps = ComponentProps<typeof StyledOcticon>
export default StyledOcticon
