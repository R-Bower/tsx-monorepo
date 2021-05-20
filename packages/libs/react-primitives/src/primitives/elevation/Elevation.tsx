import React, {HTMLAttributes} from "react"

import styled from "styled-components"
import {shadow} from "styled-system"

import {CommonSystemProps, ShadowsType} from "../../system/common"
import {commonSystemProps, shouldForwardProp} from "../../system/shared"

export interface ElevationProps
  extends CommonSystemProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  boxShadow: ShadowsType
}

const ElevationStyled = styled.div.withConfig({
  shouldForwardProp,
})<ElevationProps>`
  ${shadow};
  ${commonSystemProps};
`

export const Elevation = React.forwardRef<HTMLDivElement, ElevationProps>(
  (props: ElevationProps, ref) => {
    return <ElevationStyled ref={ref} {...props} />
  },
)

Elevation.defaultProps = {
  boxShadow: "sm",
}
Elevation.displayName = "Elevation"