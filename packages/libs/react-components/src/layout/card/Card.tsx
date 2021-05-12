import React from "react"

import {
  Elevation,
  ElevationProps,
  PropsWithChildren,
  ShadowsType,
} from "@rb/react-primitives"

export interface CardProps extends ElevationProps {
  boxShadow: ShadowsType
}

export function Card({boxShadow, children}: CardProps): JSX.Element {
  return <Elevation boxShadow={boxShadow}>{children}</Elevation>
}
