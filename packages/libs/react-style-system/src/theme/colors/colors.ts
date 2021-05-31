import {BackgroundColors, bgLight} from "./components/bg"
import {borderLight, BorderColors} from "./components/border"
import {btnLight, BtnColors} from "./components/btn"
import {globalNavLight, GlobalNavColors} from "./components/global-nav"
import {iconLight, IconColors} from "./components/icon"
import {inputLight, InputColors} from "./components/input"
import {textLight, TextColors} from "./components/text"

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
