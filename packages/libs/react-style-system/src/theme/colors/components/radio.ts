interface RadioBase {
  bg: string
  border: string
  icon: string
}

export interface RadioColors {
  alert: RadioBase
  base: RadioBase
  checked: RadioBase
  checkedDisabled: RadioBase
  disabled: RadioBase
  hover: RadioBase
}

export const radioLight: RadioColors = {
  alert: {
    bg: "#FFFFFF",
    border: "#DE1C22",
    icon: "transparent",
  },
  base: {
    bg: "#FFFFFF",
    border: "#C7C7C7",
    icon: "#C7C7C7",
  },
  checked: {
    bg: "#2660AA",
    border: "#2660AA",
    icon: "#2660AA",
  },
  checkedDisabled: {
    bg: "#E4E4E4",
    border: "#C7C7C7",
    icon: "#A1A1A1",
  },
  disabled: {
    bg: "#E4E4E4",
    border: "#C7C7C7",
    icon: "transparent",
  },
  hover: {
    bg: "#EEF2F8",
    border: "#2660AA",
    icon: "#FFFFFF",
  },
}
