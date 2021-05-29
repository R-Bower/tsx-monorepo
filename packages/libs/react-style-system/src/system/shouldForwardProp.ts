import {has, reduce} from "rambda"

import {
  BACKGROUND,
  BORDER,
  COLOR,
  DISPLAY,
  EFFECTS,
  FLEX,
  GRID,
  INTERACTIVITY,
  LAYOUT,
  SIZING,
  SPACE,
  TRANSITIONS,
  TYPOGRAPHY,
} from "./constants"

const styledSystemProps = [
  ...BACKGROUND.propNames,
  ...BORDER.propNames,
  ...COLOR.propNames,
  ...DISPLAY.propNames,
  ...EFFECTS.propNames,
  ...FLEX.propNames,
  ...GRID.propNames,
  ...INTERACTIVITY.propNames,
  ...LAYOUT.propNames,
  ...SIZING.propNames,
  ...SPACE.propNames,
  ...TRANSITIONS.propNames,
  ...TYPOGRAPHY.propNames,
  "variant",
]

/*
 * Some react components forward every single prop to the dom.  If the prop
 * isn't a standard prop (like all of our style-props), it will generate an
 * error in the console.  Since v5.1.0, styled-components now provides the
 * ability to prevent specific props from being passed to the DOM.  This
 * function converts the string list of style props to a map for O(1) lookup.
 */
const styleProps = reduce(
  (acc, current) => ({
    ...acc,
    [current]: true,
  }),
  {},
  styledSystemProps,
)

// used exclude style props from the dom
// https://styled-components.com/docs/api#shouldforwardprop
export const shouldForwardProp = (prop: string): boolean =>
  !has(prop, styleProps)
