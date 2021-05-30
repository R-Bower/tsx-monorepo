import {palette} from "../palette"

export interface TextColors {
  alert: string
  contrast: string
  disabled: string
  link: string
  primary: string
  secondary: string
  success: string
  warning: string
}

export const textLight: TextColors = {
  alert: palette.alert.main,
  contrast: "#FFFFFF",
  disabled: "#A1A1A1",
  link: palette.primary.main,
  primary: "#24292E",
  secondary: "#656565",
  success: palette.success.main,
  warning: palette.warning.main,
}
