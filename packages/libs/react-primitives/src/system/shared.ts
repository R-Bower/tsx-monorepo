import {has, reduce} from "rambda"
import {css} from "styled-components"
import {background, border, color, compose, layout, space} from "styled-system"

import customProps from "./customProps"
import stylePropsList from "./stylePropsList"

export const commonSystemProps = css`
  ${compose(background, border, color, layout, space)};
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

// used exclude style props from the dom
// https://styled-components.com/docs/api#shouldforwardprop
export const shouldForwardProp = (prop: string): boolean =>
  !has(prop, excludedProps)
