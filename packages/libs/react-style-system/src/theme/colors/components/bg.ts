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
  danger: alert.light.dangerInverse,
  dangerInverse: alert.light.danger,
  info: alert.light.infoInverse,
  infoInverse: alert.light.info,
  primary: "#ffffff",
  secondary: "#fafbfc",
  success: alert.light.successInverse,
  successInverse: alert.light.success,
  tertiary: "#f6f8fa",
  warning: alert.light.warningInverse,
  warningInverse: alert.light.warning,
}

export const bgDarkDimmed: BackgroundColors = {
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

export const bgDark: BackgroundColors = {
  backdrop: "rgba(1,4,9,0.8)",
  canvas: "#0d1117",
  canvasInset: "#1f3344",
  canvasInverse: "#f0f6fc",
  danger: "rgba(248,81,73,0.1)",
  dangerInverse: "#da3633",
  info: "rgba(56,139,253,0.1)",
  infoInverse: "#388bfd",
  primary: "#0d1117",
  secondary: "#0d1117",
  success: "rgba(46,160,67,0.1)",
  successInverse: "#2ea043",
  tertiary: "#161b22",
  warning: "rgba(187,128,9,0.1)",
  warningInverse: "#bb8009",
}
