interface ToastBase {
  bg: string
  description: string
  icon: string
  title: string
}

export interface ToastColors {
  primary: ToastBase
  secondary: ToastBase
}

export const toast: ToastColors = {
  primary: {
    bg: "#2660AA",
    description: "#FFFFFF",
    icon: "#FFFFFF",
    title: "#FFFFFF",
  },
  secondary: {
    bg: "#E4E4E4",
    description: "#656565",
    icon: "#656565",
    title: "#1A1A1A",
  },
}
