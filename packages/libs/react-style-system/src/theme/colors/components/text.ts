import {alert} from "../palette"

export interface TextColors {
  inverse: string
  danger: string
  disabled: string
  link: string
  placeholder: string
  primary: string
  secondary: string
  success: string
  tertiary: string
  warning: string
  white: string
}

export const textLight: TextColors = {
  danger: alert.light.danger,
  disabled: "#A1A1A1",
  inverse: "#FFFFFF",
  link: "#2660AA",
  placeholder: "#6a737d",
  primary: "#24292E",
  secondary: "#586069",
  success: alert.light.success,
  tertiary: "#6a737d",
  warning: alert.light.warning,
  white: "#ffffff",
}

export const textDarkDimmed: TextColors = {
  danger: "#cb2431",
  disabled: "#545d68",
  inverse: "#22272e",
  link: "#539bf5",
  placeholder: "#545d68",
  primary: "#adbac7",
  secondary: "#768390",
  success: "#6bc46d",
  tertiary: "#768390",
  warning: "#daaa3f",
  white: "#cdd9e5",
}

export const textDark: TextColors = {
  danger: "#f85149",
  disabled: "#484f58",
  inverse: "#0d1117",
  link: "#58a6ff",
  placeholder: "#505861ff",
  primary: "#c9d1d9",
  secondary: "#8b949e",
  success: "#56d364",
  tertiary: "#8b949e",
  warning: "#e3b341",
  white: "#f0f6fc",
}
