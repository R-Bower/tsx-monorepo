import React, {ComponentProps} from "react"

import {IconProps} from "@primer/octicons-react"
import styled from "styled-components"

import {sx, SxProp} from "@rb/react-primitives"

type OcticonProps = {icon: React.ElementType} & IconProps

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
