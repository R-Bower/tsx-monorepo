import {palette} from "../palette"

export interface LabelColors {
  alert: string
  base: string
  disabled: string
}

export const label: LabelColors = {
  alert: palette.alert.main,
  base: "#1A1A1A",
  disabled: "#A1A1A1",
}
