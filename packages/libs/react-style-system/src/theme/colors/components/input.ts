interface InputBase {
  bg: string
  border: string
  icon: string
  placeholder: string
  text: string
}

export interface InputColors {
  alert: InputBase
  base: InputBase
  disabled: InputBase
  focus: InputBase
  hover: InputBase
}

export const inputLight: InputColors = {
  alert: {
    bg: "#FFFFFF",
    border: "#DE1C22",
    icon: "#656565",
    placeholder: "#656565",
    text: "#1A1A1A",
  },
  base: {
    bg: "#FFFFFF",
    border: "#C7C7C7",
    icon: "#656565",
    placeholder: "#656565",
    text: "#1A1A1A",
  },
  disabled: {
    bg: "#FFFFFF",
    border: "#C7C7C7",
    icon: "#A1A1A1",
    placeholder: "#A1A1A1",
    text: "#A1A1A1",
  },
  focus: {
    bg: "#FFFFFF",
    border: "#2660AA",
    icon: "#656565",
    placeholder: "#656565",
    text: "#1A1A1A",
  },
  hover: {
    bg: "#FFFFFF",
    border: "#2660AA",
    icon: "#656565",
    placeholder: "#656565",
    text: "#1A1A1A",
  },
}
