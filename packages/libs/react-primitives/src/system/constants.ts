import * as SS from "styled-system"

import {customProps, customTextProps} from "./customProps"

const CUSTOM = SS.system(customProps)

export const COMMON = SS.compose(
  CUSTOM,
  SS.background,
  SS.border,
  SS.color,
  SS.layout,
  SS.space,
)

export const FLEX = SS.compose(COMMON, SS.flexbox)

export const GRID = SS.compose(COMMON, SS.grid)

export const TEXT = SS.compose(
  COMMON,
  SS.typography,
  SS.system(customTextProps),
)

export const SHADOW = SS.compose(COMMON, SS.shadow)
