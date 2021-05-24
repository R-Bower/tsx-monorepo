export interface Palette {
  alert: string[]
  blueGray: string[]
  gray: string[]
  primary: string[]
  success: string[]
  warning: string[]
  ansi: {
    black: string
    blackBright: string
    white: string
    whiteBright: string
    gray: string
    red: string
    redBright: string
    green: string
    greenBright: string
    yellow: string
    yellowBright: string
    blue: string
    blueBright: string
    magenta: string
    magentaBright: string
    cyan: string
    cyanBright: string
  }
}

export const primary = [
  "#EEF2F8", // 0
  "#C2D3E7", // 5
  "#7499C9", // 10
  "#4D7DB9", // 20
  "#2660AA", // 50
  "#191B83", // 100
]

export const blueGray = [
  "#fafbfc",
  "#f6f8fa",
  "#e1e4e8",
  "#d1d5da",
  "#959da5",
  "#6a737d",
  "#586069",
  "#444d56",
  "#2f363d",
  "#24292e",
]

export const gray = [
  "#fafbfc", // 0
  "#EDEDED", // 5
  "#E4E4E4", // 10
  "#C7C7C7", // 40
  "#A1A1A1", // 60
  "#656565", // 80
  "#1F1F1F", // 100
]

export const success = [
  "#D6F3E2", // 5
  "#008556", // 50
  "#086343", // 100
]

export const warning = [
  "#A64F21", // 0
  "#E86825", // 1
  "#FFE1BE", // 2
]

export const alert = [
  "#F9D3D4", // 5
  "#DE1C22", // 50
  "#9F1B1F", // 100
]

export const palette: Palette = {
  alert,
  ansi: {
    black: "#24292e",
    blackBright: "#2f363d",
    blue: "#79b8ff",
    blueBright: "#c8e1ff",
    cyan: "#76e3ea",
    cyanBright: "#b3f0ff",
    gray: "#959da5",
    green: "#85e89d",
    greenBright: "#bef5cb",
    magenta: "#b392f0",
    magentaBright: "#d1bcf9",
    red: "#f97583",
    redBright: "#fdaeb7",
    white: "#e1e4e8",
    whiteBright: "#e1e4e8",
    yellow: "#ffea7f",
    yellowBright: "#fff5b1",
  },
  blueGray,
  gray,
  primary,
  success,
  warning,
}
