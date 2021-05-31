import {BackgroundColors, bgDark, bgLight} from "./components/bg"
import {borderLight, BorderColors, borderDark} from "./components/border"
import {btnLight, BtnColors} from "./components/btn"
import {
  globalNavLight,
  GlobalNavColors,
  globalNavDark,
} from "./components/global-nav"
import {iconLight, IconColors, iconDark} from "./components/icon"
import {inputLight, InputColors, inputDark} from "./components/input"
import {textLight, TextColors, textDark} from "./components/text"

export interface ThemeColors {
  bg: BackgroundColors
  border: BorderColors
  btn: BtnColors
  globalNav: GlobalNavColors
  icon: IconColors
  input: InputColors
  text: TextColors
}

export const lightColors: ThemeColors = {
  bg: bgLight,
  border: borderLight,
  btn: btnLight,
  globalNav: globalNavLight,
  icon: iconLight,
  input: inputLight,
  text: textLight,
}

export const darkColors: ThemeColors = {
  bg: bgDark,
  border: borderDark,
  // TODO: implement dark
  btn: btnLight,
  globalNav: globalNavDark,
  icon: iconDark,
  input: inputDark,
  text: textDark,
}
