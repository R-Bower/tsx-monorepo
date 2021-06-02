interface PaletteColor {
  light: string
  main: string
  dark: string
  contrast?: string
}

interface PaletteBase {
  danger: PaletteColor
  info: PaletteColor
  primary: PaletteColor
  secondary: PaletteColor
  success: PaletteColor
  warning: PaletteColor
}

export interface Palette {
  light: PaletteBase
}

export interface AlertBase {
  danger: string
  dangerInverse: string
  info: string
  infoInverse: string
  success: string
  successInverse: string
  warning: string
  warningInverse: string
}

export interface Alert {
  light: AlertBase
  dark: AlertBase
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

const dangerLight: PaletteColor = {
  dark: "#d32f2f", // 100
  light: "#e57373", // 5
  main: "#f44336", // 50
}

export const alert: Alert = {
  dark: {
    danger: "#c93c37",
    dangerInverse: "rgba(229,83,75,0.2)",
    info: "#4184e4",
    infoInverse: "rgba(65,132,228,0.1)",
    success: "#46954a",
    successInverse: "rgba(70,149,74,0.1)",
    warning: "#ae7c14",
    warningInverse: "rgba(174,124,20,0.1)",
  },
  light: {
    danger: "#f44336",
    dangerInverse: "#ffeef0",
    info: "#2196f3",
    infoInverse: "#f1f8ff",
    success: "#4caf50",
    successInverse: "#dcffe4",
    warning: "#ff9800",
    warningInverse: "#fff5b1",
  },
}

export const palette: Palette = {
  light: {
    danger: dangerLight,
    info,
    primary,
    secondary,
    success,
    warning,
  },
}
