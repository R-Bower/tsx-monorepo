import {SystemTheme} from "../system/common"
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

export const defaultTheme: SystemTheme = {
  breakpoints: breakpoints.map((breakpoint: number) => `${breakpoint}px`),
  colors,
  fontSizes: [],
  fontWeights: [300, 400, 500, 600],
  lineHeights: [1, 1.15, 1.25, 1.5],
  shadows,
  // An integer value maps 1:1 to a pixel.
  // 1 = 1px, 2 = 2px, and so on.
  space: [0, 1],
}
