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

export const iconLight: IconColors = {
  bg: "#fafbfc",
  danger: palette.alert.main,
  info: palette.info.main,
  primary: "#C7C7C7",
  secondary: "#656565",
  success: palette.success.main,
  tertiary: "#E4E4E4",
  warning: palette.warning.main,
}
