import React from "react"

import {has, reduce} from "rambda"
import {css} from "styled-components"
import {
  background,
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
} from "styled-system"

import customProps, {ICustomSystemProps} from "./custom-props"
import stylePropsList from "./style-props-list"

export const sharedSystemProps = css`
  ${compose(background, border, color, layout, position, shadow, space)};
  ${customProps};
`

/*
 * Some react components forward every single prop to the dom.  If the prop
 * isn't a standard prop (like all of our style-props), it will generate an
 * error in the console.  Since v5.1.0, styled-components now provides the
 * ability to prevent specific props from being passed to the DOM.  This
 * function converts the string list of style props to a map for O(1) lookup.
 */
const excludedProps = reduce(
  (acc, current) => ({
    ...acc,
    [current]: true,
  }),
  {},
  stylePropsList,
)

export const shouldForwardProp = (prop: any): boolean =>
  !has(prop, excludedProps)
export interface ISharedSystemProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    ICustomSystemProps {
  as?: React.ElementType
}
