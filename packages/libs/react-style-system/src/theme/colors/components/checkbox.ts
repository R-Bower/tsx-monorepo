interface CheckboxBase {
  bg: string
  border: string
  icon: string
}

export interface CheckboxColors {
  alert: CheckboxBase
  base: CheckboxBase
  checked: CheckboxBase
  checkedDisabled: CheckboxBase
  disabled: CheckboxBase
  hover: CheckboxBase
}

export const checkbox: CheckboxColors = {
  alert: {
    bg: "#FFFFFF",
    border: "#DE1C22",
    icon: "transparent",
  },
  base: {
    bg: "#FFFFFF",
    border: "#C7C7C7",
    icon: "",
  },
  checked: {
    bg: "#2660AA",
    border: "#2660AA",
    icon: "#FFFFFF",
  },
  checkedDisabled: {
    bg: "#A1A1A1",
    border: "#C7C7C7",
    icon: "#FFFFFF",
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
