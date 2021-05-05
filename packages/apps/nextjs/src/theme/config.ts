import {colors} from "./colors/colors"

export const breakpoints = [
  // 0-360 is 0
  361, // 1
  550, // 2
  768, // 3
  1024, // 4
  1400, // 5
  1800, // 6
]

const breakpointsPx = breakpoints.map((breakpoint: number) => `${breakpoint}px`)

const lineHeights = [1, 1.15, 1.25, 1.5]

// each array index corresponds to a multiple of 4
// used for margin, padding, and top/right/bottom/left
export const themeSpacing = [
  0,
  4,
  8,
  12,
  16,
  20,
  24,
  28,
  32,
  36,
  40,
  44,
  48,
  52,
  56,
  60,
  64,
  68,
  72,
  76,
  80,
]

const shadows = {
  inner: "",
  none: "none",
}

export const styledSystemTheme = {
  breakpoints: breakpointsPx,
  colors,
  fontFamily: `Open Sans`,
  fontWeights: [300, 400, 500, 600],
  lineHeights,
  shadows,
  space: themeSpacing,
}
