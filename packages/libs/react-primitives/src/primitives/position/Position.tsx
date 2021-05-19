import React from "react"

import styled from "styled-components"
import {position, PositionProps as SystemPositionProps} from "styled-system"

import {CommonSystemProps} from "../../system/common"
import {Box} from "../box/Box"

// Position props

const Position = styled(Box)<SystemPositionProps>`
  ${position};
`

export interface PositionProps extends SystemPositionProps, CommonSystemProps {}

// Absolute
export type AbsoluteProps = Omit<PositionProps, "position">
export const Absolute = React.forwardRef<HTMLDivElement, AbsoluteProps>(
  (props: AbsoluteProps, ref) => {
    return <Position {...props} ref={ref} position={"absolute"} />
  },
)
Absolute.displayName = "Absolute"

// Fixed
export type FixedProps = Omit<PositionProps, "position">
export const Fixed = React.forwardRef<HTMLDivElement, FixedProps>(
  (props: FixedProps, ref) => {
    return <Position {...props} ref={ref} position={"fixed"} />
  },
)
Fixed.displayName = "Fixed"

// Relative
export type RelativeProps = Omit<PositionProps, "position">
export const Relative = React.forwardRef<HTMLDivElement, RelativeProps>(
  (props: RelativeProps, ref) => {
    return <Position {...props} ref={ref} position={"relative"} />
  },
)
Relative.displayName = "Relative"

// Sticky
export type StickyProps = Omit<PositionProps, "position">
export const Sticky = React.forwardRef<HTMLDivElement, StickyProps>(
  (props: StickyProps, ref) => {
    return <Position {...props} ref={ref} position={"sticky"} />
  },
)
Sticky.defaultProps = {top: 0, zIndex: 1}
Sticky.displayName = "Sticky"
