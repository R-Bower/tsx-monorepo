import {colors} from "./colors/colors"
import {shadows} from "./shadows/shadows"

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

// no config means an integer value maps 1:1 to a pixel.
// 1 = 1px, 2 = 2px, and so on.
// used for margin, padding, and top/right/bottom/left
export const themeSpacing = [0, 1]

export const defaultTheme = {
  breakpoints: breakpointsPx,
  colors,
  fontFamily: `Open Sans`,
  fontWeights: [300, 400, 500, 600],
  lineHeights,
  shadows,
  space: themeSpacing,
}
