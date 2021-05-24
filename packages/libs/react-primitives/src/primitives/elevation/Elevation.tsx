import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {
  COMMON,
  EFFECTS,
  SystemCommonProps,
  SystemEffectsProps,
} from "../../system/constants"
import {shouldForwardProp} from "../../system/shouldForwardProp"
import {sx} from "../../system/sx"

export interface ElevationProps
  extends SystemCommonProps,
    SystemEffectsProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const ElevationStyled = styled.div.withConfig({
  shouldForwardProp,
})<ElevationProps>`
  ${COMMON};
  ${EFFECTS}
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
