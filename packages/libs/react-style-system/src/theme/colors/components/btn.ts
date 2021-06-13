export interface BtnColors {
  outline: {
    disabledBg: string
    disabledText: string
    focusBorder: string
    focusShadow: string
    hoverBg: string
    hoverBorder: string
    hoverInsetShadow: string
    hoverShadow: string
    hoverText: string
    selectedBg: string
    selectedBorder: string
    selectedShadow: string
    selectedText: string
    text: string
  }
}

export const btnLight: BtnColors = {
  outline: {
    disabledBg: "#FFFFFF",
    disabledText: "#A1A1A1",
    focusBorder: "rgba(27,31,35,0.15)",
    focusShadow: "0 0 0 3px rgba(0,92,197,0.4)",
    hoverBg: "#EEF2F8",
    hoverBorder: "rgba(27,31,35,0.15)",
    hoverInsetShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
    hoverShadow: "0 1px 0 rgba(27,31,35,0.1)",
    hoverText: "#A1A1A1",
    selectedBg: "#035fc7",
    selectedBorder: "rgba(27,31,35,0.15)",
    selectedShadow: "inset 0 1px 0 rgba(5,38,76,0.2)",
    selectedText: "#ffffff",
    text: "#0366d6",
  },
}

export const btnDark: BtnColors = {
  outline: {
    disabledBg: "#0d1117",
    disabledText: "rgba(88,166,255,0.5)",
    focusBorder: "#58a6ff",
    focusShadow: "0 0 0 3px rgba(17,88,199,0.4)",
    hoverBg: "#30363d",
    hoverBorder: "#58a6ff",
    hoverInsetShadow: "inset 0 1px 0 rgba(240,246,252,0.03)",
    hoverShadow: "0 1px 0 rgba(1,4,9,0.1)",
    hoverText: "#58a6ff",
    selectedBg: "#0d419d",
    selectedBorder: "rgba(240,246,252,0.1)",
    selectedShadow: "0 0 rgba(0,0,0,0)",
    selectedText: "#f0f6fc",
    text: "#58a6ff",
  },
}
