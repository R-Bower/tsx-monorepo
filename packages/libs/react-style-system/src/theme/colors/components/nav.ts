import {palette} from "../palette"
import {text} from "./text"

export interface NavColors {
  bg: {
    primary: string
    secondary: string
  }
  text: {
    link: string
    primary: string
    secondary: string
  }
}

export const nav: NavColors = {
  bg: {
    primary: text.primary,
    secondary: palette.secondary.light,
  },
  text: {
    link: palette.primary.main,
    primary: palette.secondary.light,
    secondary: text.primary,
  },
}
