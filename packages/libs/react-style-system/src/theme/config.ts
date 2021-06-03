import {SystemTheme} from "../system/constants"
import {lightColors} from "./colors/colors"
import {lightShadows} from "./shadows/shadows"

export const defaultTheme: SystemTheme = {
  breakpoints: [
    // 0-359 is 0
    "360px", // 360 - 549 is 1
    "550px", // 550 - 767 is 2
    "768px", // 768 - 1023 is 3
    "1024px", // 1024 - 1399 is 4
    "1400px", // 1400 - 1799 is 5
    "1800px", // 1800+ is 6
  ],
  colors: lightColors,
  fontSizes: [],
  fonts: {
    mono: "Source Code Pro",
    regular: "Source Sans Pro",
  },
  lineHeights: [1, 1.15, 1.25, 1.5],
  shadows: lightShadows,
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
