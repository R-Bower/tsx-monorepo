interface PaletteColor {
  light: string
  main: string
  dark: string
  contrast?: string
}

export interface Palette {
  alert: PaletteColor
  info: PaletteColor
  primary: PaletteColor
  secondary: PaletteColor
  success: PaletteColor
  warning: PaletteColor
}

const primary: PaletteColor = {
  dark: "#191B83",
  light: "#C2D3E7",
  main: "#2660AA",
}

const secondary: PaletteColor = {
  contrast: "rgba(27, 31, 35, 0.05)",
  dark: "#2f363d",
  light: "#f6f8fa",
  main: "#959da5",
}

export const info: PaletteColor = {
  dark: "#1976d2",
  light: "#64b5f6",
  main: "#2196f3",
}

const success: PaletteColor = {
  dark: "#388e3c", // 100
  light: "#81c784", // 5
  main: "#4caf50", // 50
}

const warning: PaletteColor = {
  dark: "#f57c00", // 2
  light: "#ffb74d", // 0
  main: "#ff9800", // 1
}

const alert: PaletteColor = {
  dark: "#d32f2f", // 100
  light: "e57373", // 5
  main: "f44336", // 50
}

export const palette: Palette = {
  alert,
  info,
  primary,
  secondary,
  success,
  warning,
}
