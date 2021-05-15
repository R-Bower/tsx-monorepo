import React from "react"

import {Elevation, ElevationProps, ShadowsType} from "@rb/react-primitives"

export interface CardProps extends ElevationProps {
  boxShadow: ShadowsType
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({boxShadow, children}: CardProps, ref) => {
    return (
      <Elevation ref={ref} boxShadow={boxShadow}>
        {children}
      </Elevation>
    )
  },
)
