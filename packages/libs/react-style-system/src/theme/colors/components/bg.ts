import {alert, AlertBase} from "../palette"

export interface BackgroundColors extends AlertBase {
  backdrop: string
  canvas: string
  canvasInset: string
  canvasInverse: string
  primary: string
  secondary: string
  tertiary: string
}

export const bgLight: BackgroundColors = {
  backdrop: "rgba(27,31,35,0.5)",
  canvas: "white",
  canvasInset: "#f4f6fa",
  canvasInverse: "#24292e",
  danger: alert.light.danger,
  dangerInverse: alert.light.dangerInverse,
  info: alert.light.infoInverse,
  infoInverse: alert.light.info,
  primary: "white",
  secondary: "#fafbfc",
  success: alert.light.successInverse,
  successInverse: alert.light.success,
  tertiary: "#f6f8fa",
  warning: alert.light.warningInverse,
  warningInverse: alert.light.warning,
}

export const bgDark: BackgroundColors = {
  backdrop: "rgba(28,33,40,0.8)",
  canvas: "#22272e",
  canvasInset: "#1e2228",
  canvasInverse: "#cdd9e5",
  danger: alert.dark.danger,
  dangerInverse: alert.dark.dangerInverse,
  info: alert.dark.infoInverse,
  infoInverse: alert.dark.info,
  primary: "#22272e",
  secondary: "#22272e",
  success: alert.dark.successInverse,
  successInverse: alert.dark.success,
  tertiary: "#2d333b",
  warning: alert.dark.warningInverse,
  warningInverse: alert.dark.warning,
}
