import {alert} from "../palette"

export interface IconColors {
  primary: string
  secondary: string
  tertiary: string
  info: string
  danger: string
  success: string
  warning: string
}

export const iconLight: IconColors = {
  danger: alert.light.danger,
  info: alert.light.info,
  primary: "#A1A1A1",
  secondary: "#656565",
  success: alert.light.success,
  tertiary: "#E4E4E4",
  warning: alert.light.warning,
}

export const iconDarkDimmed: IconColors = {
  danger: "#e5534b",
  info: "#6cb6ff",
  primary: "#adbac7",
  secondary: "#636e7b",
  success: "#6bc46d",
  tertiary: "#545d68",
  warning: "#daaa3f",
}

export const iconDark: IconColors = {
  danger: "#f85149",
  info: "#79c0ff",
  primary: "#c9d1d9",
  secondary: "#6e7681",
  success: "#56d364",
  tertiary: "#484f58",
  warning: "#e3b341",
}
