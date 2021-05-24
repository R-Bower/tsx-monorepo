import React, {HTMLAttributes} from "react"

import * as CSS from "csstype"
import styled from "styled-components"
import {ResponsiveValue} from "styled-system"

import {
  COMMON,
  LAYOUT,
  SystemCommonProps,
  SystemLayoutProps,
} from "../../system/constants"
import {sx} from "../../system/sx"

// Position props
export interface PositionProps
  extends SystemCommonProps,
    Omit<SystemLayoutProps, "position">,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  position: ResponsiveValue<CSS.Property.Position>
}

const StyledPosition = styled.div<PositionProps>`
  ${COMMON};
  ${LAYOUT};
  ${sx};
`
export const Position = React.forwardRef<HTMLDivElement, PositionProps>(
  (props: PositionProps, ref) => {
    return <StyledPosition {...props} ref={ref} />
  },
)
Position.displayName = "Position"
