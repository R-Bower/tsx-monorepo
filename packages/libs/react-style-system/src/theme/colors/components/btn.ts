interface BtnBase {
  bg: string
  border: string
  text: string
}

interface BtnStateColors {
  base: BtnBase
  disabled: BtnBase
  hover: BtnBase
}

export interface BtnColors {
  primary: BtnStateColors
  outlined: BtnStateColors
}

export const btnLight: BtnColors = {
  outlined: {
    base: {
      bg: "#FFFFFF",
      border: "#2660AA",
      text: "#2660AA",
    },
    disabled: {
      bg: "#FFFFFF",
      border: "#E4E4E4",
      text: "#A1A1A1",
    },
    hover: {
      bg: "#EEF2F8",
      border: "#2660AA",
      text: "#2660AA",
    },
  },
  primary: {
    base: {
      bg: "#2660AA",
      border: "#2660AA",
      text: "#FFFFFF",
    },
    disabled: {
      bg: "#E4E4E4",
      border: "#E4E4E4",
      text: "#A1A1A1",
    },
    hover: {
      bg: "#191B83",
      border: "#191B83",
      text: "#FFFFFF",
    },
  },
}
