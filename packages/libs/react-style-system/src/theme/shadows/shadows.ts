export interface ThemeShadows {
  none: string
  inner: string
  sm: string
  md: string
  lg: string
  xl: string
}

export const lightShadows: ThemeShadows = {
  inner: "inset 0 1px 0 rgba(225,228,232,0.2)",
  lg: "0 8px 24px rgba(149,157,165,0.2)",
  md: "0 3px 6px rgba(149,157,165,0.15)",
  none: "none",
  sm: "0 1px 0 rgba(27,31,35,0.04)",
  xl: "0 12px 48px rgba(149,157,165,0.3)",
}

export const darkShadows: ThemeShadows = {
  inner: "0 0 rgba(0,0,0,0)",
  lg: "0 8px 24px #010409",
  md: "0 3px 6px #010409",
  none: "none",
  sm: "0 0 rgba(0,0,0,0)",
  xl: "0 12px 48px #010409",
}
