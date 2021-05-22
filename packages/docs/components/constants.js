import systemPropTypes from "@styled-system/prop-types"
import * as SS from "styled-system"

import {commonSystemProps, systemTextProps} from "@rb/react-primitives"

const {get: getKey, compose, system} = SS

const whiteSpace = system({
  whiteSpace: {
    cssProperty: "whiteSpace",
    property: "whiteSpace",
  },
})

export const TYPOGRAPHY = compose(SS.typography, whiteSpace)

export const COMMON = commonSystemProps

export const BORDER = compose(SS.border, SS.shadow)

// these are 1:1 with styled-system's API now,
// so you could consider dropping the abstraction
export const LAYOUT = SS.layout
export const POSITION = SS.position
export const FLEX = SS.flexbox
export const GRID = SS.grid

TYPOGRAPHY.propTypes = systemPropTypes.typography
LAYOUT.propTypes = systemPropTypes.layout
POSITION.propTypes = systemPropTypes.position
FLEX.propTypes = systemPropTypes.flexbox
GRID.propTypes = systemPropTypes.grid
