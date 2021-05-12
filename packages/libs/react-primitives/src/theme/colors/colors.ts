export interface ThemeColors {
  primary: string
  secondary: string
  tertiary: string
  bg: {
    backdrop: string
    canvas: string
    canvasInset: string
    canvasInverse: string
    canvasMobile: string
    danger: string
    dangerInverse: string
    info: string
    infoInverse: string
    overlay: string
    primary: string
    secondary: string
    success: string
    successInverse: string
    tertiary: string
    warning: string
    warningInverse: string
  }
  border: {
    danger: string
    info: string
    inverse: string
    overlay: string
    primary: string
    secondary: string
    success: string
    tertiary: string
    warning: string
  }
  icon: {
    danger: string
    info: string
    primary: string
    secondary: string
    success: string
    tertiary: string
    warning: string
  }
  input: {
    bg: string
    border: string
    contrastBg: string
    disabledBg: string
    disabledBorder: string
    errorBorder: string
    tooltip: {
      error: {
        bg: string
        border: string
        text: string
      }
      success: {
        bg: string
        border: string
        text: string
      }
      warning: {
        bg: string
        border: string
        text: string
      }
    }
    warningBorder: string
  }
  text: {
    danger: string
    disabled: string
    inverse: string
    link: string
    placeholder: string
    primary: string
    secondary: string
    success: string
    tertiary: string
    warning: string
    white: string
  }
}

export const colors: ThemeColors = {
  bg: {
    backdrop: "rgba(27,31,35,0.5)",
    canvas: "#ffffff",
    canvasInset: "#f6f8fa",
    canvasInverse: "#24292e",
    canvasMobile: "#ffffff",
    danger: "#ffeef0",
    dangerInverse: "#d73a49",
    info: "#f1f8ff",
    infoInverse: "#0366d6",
    overlay: "#ffffff",
    primary: "#ffffff",
    secondary: "#fafbfc",
    success: "#dcffe4",
    successInverse: "#28a745",
    tertiary: "#f6f8fa",
    warning: "#fff5b1",
    warningInverse: "#ffd33d",
  },
  border: {
    danger: "#d73a49",
    info: "#0366d6",
    inverse: "#ffffff",
    overlay: "#e1e4e8",
    primary: "#e1e4e8",
    secondary: "#eaecef",
    success: "#34d058",
    tertiary: "#d1d5da",
    warning: "#f9c513",
  },
  icon: {
    danger: "#d73a49",
    info: "#0366d6",
    primary: "#24292e",
    secondary: "#586069",
    success: "#22863a",
    tertiary: "#959da5",
    warning: "#b08800",
  },

  input: {
    bg: "#ffffff",
    border: "#e1e4e8",
    contrastBg: "#fafbfc",
    disabledBg: "#f6f8fa",
    disabledBorder: "#e1e4e8",
    errorBorder: "#cb2431",
    tooltip: {
      error: {
        bg: "#ffeef0",
        border: "#f97583",
        text: "#86181d",
      },
      success: {
        bg: "#dcffe4",
        border: "#34d058",
        text: "#144620",
      },
      warning: {
        bg: "#fff5b1",
        border: "#f9c513",
        text: "#735c0f",
      },
    },
    warningBorder: "#f9c513",
  },
  primary: "#425664",
  secondary: "#C6AD8F",

  tertiary: "#F6F4F2",
  text: {
    danger: "#cb2431",
    disabled: "#959da5",
    inverse: "#ffffff",
    link: "#0366d6",
    placeholder: "#6a737d",
    primary: "#24292e",
    secondary: "#586069",
    success: "#22863a",
    tertiary: "#6a737d",
    warning: "#b08800",
    white: "#ffffff",
  },
}
