import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {
  COMMON,
  SHADOWS,
  shouldForwardProp,
  sx,
  SystemCommonProps,
  SystemShadowProps,
} from "@rb/react-style-system"

export interface ElevationProps
  extends SystemCommonProps,
    SystemShadowProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const ElevationStyled = styled.div.withConfig({
  shouldForwardProp,
})<ElevationProps>`
  ${COMMON};
  ${SHADOWS}
  ${sx};
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
