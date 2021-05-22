import {values} from "rambda"

export interface Palette {
  alert: readonly string[]
  blueGray: string[]
  gray: readonly string[]
  primary: readonly string[]
  success: readonly string[]
  warning: readonly string[]

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

export const primary = {
  "0": "#EEF2F8",
  "5": "#C2D3E7",
  "10": "#7499C9",
  "20": "#4D7DB9",
  "50": "#2660AA",
  "100": "#191B83",
}

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

export const gray = {
  "0": "#fafbfc",
  "5": "#EDEDED",
  "10": "#E4E4E4",
  "40": "#C7C7C7",
  "60": "#A1A1A1",
  "80": "#656565",
  "100": "#1F1F1F",
}

export const success = {
  "5": "#D6F3E2",
  "50": "#008556",
  "100": "#086343",
}

export const warning = {
  0: "#A64F21",
  1: "#E86825",
  2: "#FFE1BE",
}

export const alert = {
  "5": "#F9D3D4",
  "50": "#DE1C22",
  "100": "#9F1B1F",
}

export const palette: Palette = {
  alert: values(gray),
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
  gray: values(gray),
  primary: values(gray),
  success: values(gray),
  warning: values(warning),
}
