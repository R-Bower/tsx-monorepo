import {palette} from "../palette"
import {textLight} from "./text"

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

export const navLight: NavColors = {
  bg: {
    primary: textLight.primary,
    secondary: palette.secondary.light,
  },
  text: {
    link: palette.primary.main,
    primary: palette.secondary.light,
    secondary: textLight.primary,
  },
}
