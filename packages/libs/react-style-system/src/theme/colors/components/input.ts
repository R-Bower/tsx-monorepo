export interface InputColors {
  bg: string
  contrastBg: string
  disabledBg: string
  disabledBorder: string
  border: string
  dangerBorder: string
  focusBorder: string
  hoverBorder: string
}

export const inputLight: InputColors = {
  bg: "#FFFFFF",
  border: "#e1e4e8",
  contrastBg: "#fafbfc",
  dangerBorder: "#f44336",
  disabledBg: "f6f8fa",
  disabledBorder: "#e1e4e8",
  focusBorder: "#2660AA",
  hoverBorder: "#2660AA",
}

export const inputDark: InputColors = {
  bg: "#22272e",
  border: "#373e47",
  contrastBg: "rgba(28,33,40,0.5)",
  dangerBorder: "#e5534b",
  disabledBg: "#2d333b",
  disabledBorder: "#444c56",
  focusBorder: "#4184e4",
  hoverBorder: "#4184e4",
}
