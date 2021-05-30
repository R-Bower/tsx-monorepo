import {palette} from "../palette"

export interface LabelColors {
  alert: string
  base: string
  disabled: string
}

export const labelLight: LabelColors = {
  alert: palette.alert.main,
  base: "#1A1A1A",
  disabled: "#A1A1A1",
}
