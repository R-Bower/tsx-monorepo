interface ChipBase {
  bg: string
  border: string
  icon: string
  text: string
}

export interface ChipColors {
  alert: ChipBase
  base: ChipBase
  hover: ChipBase
  disabled: ChipBase
}

export const chipLight: ChipColors = {
  alert: {
    bg: "#FFFFFF",
    border: "#DE1C22",
    icon: "#FFFFFF",
    text: "#FFFFFF",
  },
  base: {
    bg: "#F1F1F1",
    border: "#E4E4E4",
    icon: "#656565",
    text: "#1A1A1A",
  },
  disabled: {
    bg: "#E4E4E4",
    border: "#E4E4E4",
    icon: "#A1A1A1",
    text: "#A1A1A1",
  },
  hover: {
    bg: "#C2D3E7",
    border: "#C2D3E7",
    icon: "#656565",
    text: "#1A1A1A",
  },
}
