import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {SHADOW} from "../../system/constants"
import {shouldForwardProp} from "../../system/shouldForwardProp"
import {sx} from "../../system/sx"
import {CommonSystemProps, SystemShadows} from "../../system/types"

export interface ElevationProps
  extends CommonSystemProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  boxShadow: SystemShadows
}

const ElevationStyled = styled.div.withConfig({
  shouldForwardProp,
})<ElevationProps>`
  ${SHADOW}
  ${sx}
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
