import {palette} from "../palette"

export interface IconColors {
  bg: string
  primary: string
  secondary: string
  tertiary: string
  info: string
  danger: string
  success: string
  warning: string
}

export const icon: IconColors = {
  bg: "#fafbfc",
  danger: palette.alert.main,
  info: "#2660AA",
  primary: "#C7C7C7",
  secondary: "#656565",
  success: "#008556",
  tertiary: "#E4E4E4",
  warning: "#E86825",
}
