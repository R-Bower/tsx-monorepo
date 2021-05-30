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
  contrast: BtnStateColors
  primary: BtnStateColors
  secondary: BtnStateColors
  success: BtnStateColors
}

export const btnLight: BtnColors = {
  contrast: {
    base: {
      bg: "transparent",
      border: "transparent",
      text: "#2660AA",
    },
    disabled: {
      bg: "transparent",
      border: "transparent",
      text: "#A1A1A1",
    },
    hover: {
      bg: "#EEF2F8",
      border: "#191B83",
      text: "#191B83",
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
  secondary: {
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
  success: {
    base: {
      bg: "#008556",
      border: "#008556",
      text: "#FFFFFF",
    },
    disabled: {
      bg: "#E4E4E4",
      border: "#E4E4E4",
      text: "#A1A1A1",
    },
    hover: {
      bg: "#086343",
      border: "#086343",
      text: "#FFFFFF",
    },
  },
}
