import {palette} from "../palette"

export interface BorderColors {
  main: string
  light: string
  dark: string
  info: string
  inverse: string
  danger: string
  success: string
  warning: string
}

export const border: BorderColors = {
  danger: palette.alert.main,
  dark: "#656565",
  info: palette.primary.main,
  inverse: "#F2F1F1",
  light: "#E4E4E4",
  main: "#C7C7C7",
  success: "#4caf50",
  warning: "#E86825",
}
