import React from "react"

import styled from "styled-components"
import {position, PositionProps as SystemPositionProps} from "styled-system"

import {ComponentProps} from "../../types/props"
import Box from "../box/Box"

// Position props

const Position = styled(Box)<SystemPositionProps>`
  ${position};
`

export type PositionProps = SystemPositionProps

// Absolute
export type AbsoluteProps = Omit<PositionProps, "position">
export const AbsoluteBox = React.forwardRef<
  HTMLDivElement,
  AbsoluteProps | ComponentProps<typeof Position>
>((props: AbsoluteProps, ref) => {
  return <Position {...props} ref={ref} position={"absolute"} />
})
AbsoluteBox.displayName = "Absolute"

// Fixed
export type FixedProps = Omit<PositionProps, "position">
export const FixedBox = React.forwardRef<
  HTMLDivElement,
  FixedProps | ComponentProps<typeof Position>
>((props: FixedProps, ref) => {
  return <Position {...props} ref={ref} position={"fixed"} />
})
FixedBox.displayName = "Fixed"

// Relative
export type RelativeProps = Omit<PositionProps, "position">
export const RelativeBox = React.forwardRef<
  HTMLDivElement,
  RelativeProps | ComponentProps<typeof Position>
>((props: RelativeProps, ref) => {
  return <Position {...props} ref={ref} position={"relative"} />
})
RelativeBox.displayName = "Relative"

// Sticky
export type StickyProps = Omit<PositionProps, "position">
export const StickyBox = React.forwardRef<
  HTMLDivElement,
  StickyProps | ComponentProps<typeof Position>
>((props: StickyProps, ref) => {
  return <Position {...props} ref={ref} position={"sticky"} />
})
StickyBox.defaultProps = {top: 0, zIndex: 1}
StickyBox.displayName = "Sticky"
