import React from "react"

import styled from "styled-components"
import {position, PositionProps as SystemPositionProps} from "styled-system"

import Box from "../box/Box"

// Position props

const Position = styled(Box)<SystemPositionProps>`
  ${position};
`

export type PositionProps = SystemPositionProps

// Absolute
export type AbsoluteProps = Omit<PositionProps, "position">
export const AbsoluteBox = React.forwardRef<HTMLDivElement, AbsoluteProps>(
  (props: AbsoluteProps, ref) => {
    return <Position {...props} ref={ref} position={"absolute"} />
  },
)
AbsoluteBox.displayName = "Absolute"

// Fixed
export type FixedProps = Omit<PositionProps, "position">
export const FixedBox = React.forwardRef<HTMLDivElement, FixedProps>(
  (props: FixedProps, ref) => {
    return <Position {...props} ref={ref} position={"fixed"} />
  },
)
FixedBox.displayName = "Fixed"

// Relative
export type RelativeProps = Omit<PositionProps, "position">
export const RelativeBox = React.forwardRef<HTMLDivElement, RelativeProps>(
  (props: RelativeProps, ref) => {
    return <Position {...props} ref={ref} position={"relative"} />
  },
)
RelativeBox.displayName = "Relative"

// Sticky
export type StickyProps = Omit<PositionProps, "position">
export const StickyBox = React.forwardRef<HTMLDivElement, StickyProps>(
  (props: StickyProps, ref) => {
    return <Position {...props} ref={ref} position={"sticky"} />
  },
)
StickyBox.defaultProps = {top: 0, zIndex: 1}
StickyBox.displayName = "Sticky"
