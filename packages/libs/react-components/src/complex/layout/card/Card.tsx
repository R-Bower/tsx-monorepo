import React from "react"

import {Elevation, ElevationProps} from "~primitives/elevation/Elevation"

export const Card = React.forwardRef<HTMLDivElement, ElevationProps>(
  ({boxShadow, children}: ElevationProps, ref) => {
    return (
      <Elevation ref={ref} boxShadow={boxShadow}>
        {children}
      </Elevation>
    )
  },
)
