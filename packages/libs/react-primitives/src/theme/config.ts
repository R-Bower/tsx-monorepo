import {SystemTheme} from "../system/constants"
import {colors} from "./colors/colors"
import {shadows} from "./shadows/shadows"

const breakpoints = [
  // 0-360 is 0
  361, // 1
  550, // 2
  768, // 3
  1024, // 4
  1400, // 5
  1800, // 6
]

export const defaultTheme: SystemTheme = {
  breakpoints: breakpoints.map(
    (breakpoint: number) => `${breakpoint}px`,
  ) as string[],
  colors,
  fontSizes: [],
  fontWeights: [300, 400, 500, 600],
  lineHeights: [1, 1.15, 1.25, 1.5],
  shadows,
  // multiples of 4
  space: [
    "0px",
    "4px",
    "8px",
    "12px",
    "16px",
    "20px",
    "24px",
    "28px",
    "32px",
    "36px",
    "40px",
    "44px",
    "48px",
    "52px",
    "56px",
    "60px",
    "64px",
    "68px",
    "72px",
    "76px",
    "80px",
  ],
}
