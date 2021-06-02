import {alert} from "../palette"

export interface BorderColors {
  primary: string
  secondary: string
  tertiary: string
  info: string
  inverse: string
  danger: string
  success: string
  warning: string
}

export const borderLight: BorderColors = {
  danger: alert.light.danger,
  info: alert.light.info,
  inverse: "#F2F1F1",
  primary: "#C7C7C7",
  secondary: "#eaecef",
  success: alert.light.success,
  tertiary: "#d1d5da",
  warning: alert.light.warning,
}

export const borderDarkDimmed: BorderColors = {
  danger: "rgba(229,83,75,0.4)",
  info: "rgba(65,132,228,0.4)",
  inverse: "#cdd9e5",
  primary: "#444c56",
  secondary: "#373e47",
  success: "rgba(87,171,90,0.4)",
  tertiary: "#636e7b",
  warning: "rgba(174,124,20,0.4)",
}

export const borderDark: BorderColors = {
  danger: "rgba(248,81,73,0.4)",
  info: "rgba(56,139,253,0.4)",
  inverse: "#f0f6fc",
  primary: "#41484fff",
  secondary: "#373d44ff",
  success: "rgba(63,185,80,0.4)",
  tertiary: "#6e7681",
  warning: "rgba(187,128,9,0.4)",
}
