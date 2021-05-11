import React, {HTMLAttributes} from "react"

import styled from "styled-components"
import {BoxShadowProps, shadow} from "styled-system"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"

export interface ElevationProps
  extends CommonSystemProps,
    BoxShadowProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const ElevationStyled = styled.div.withConfig({
  shouldForwardProp,
})<ElevationProps>`
  ${shadow};
  ${commonSystemProps};
`

const Elevation = React.forwardRef<HTMLDivElement, ElevationProps>(
  (props: ElevationProps, ref) => {
    return <ElevationStyled ref={ref} {...props} />
  },
)

Elevation.defaultProps = {
  boxShadow: "sm",
}

export default Elevation
