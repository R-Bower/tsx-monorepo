import {BackgroundColors, bgDark, bgDarkDimmed, bgLight} from "./components/bg"
import {
  borderLight,
  BorderColors,
  borderDarkDimmed,
  borderDark,
} from "./components/border"
import {btnLight, BtnColors, btnDark} from "./components/btn"
import {
  globalNavLight,
  GlobalNavColors,
  globalNavDarkDimmed,
  globalNavDark,
} from "./components/global-nav"
import {
  iconLight,
  IconColors,
  iconDarkDimmed,
  iconDark,
} from "./components/icon"
import {
  inputLight,
  InputColors,
  inputDarkDimmed,
  inputDark,
} from "./components/input"
import {
  textLight,
  TextColors,
  textDarkDimmed,
  textDark,
} from "./components/text"

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

export const darkDimmedColors: ThemeColors = {
  bg: bgDarkDimmed,
  border: borderDarkDimmed,
  // TODO: implement darkDimmed
  btn: btnDark,
  globalNav: globalNavDarkDimmed,
  icon: iconDarkDimmed,
  input: inputDarkDimmed,
  text: textDarkDimmed,
}

export const darkColors: ThemeColors = {
  bg: bgDark,
  border: borderDark,
  btn: btnDark,
  globalNav: globalNavDark,
  icon: iconDark,
  input: inputDark,
  text: textDark,
}
