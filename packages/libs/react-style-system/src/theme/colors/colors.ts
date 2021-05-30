import {BackgroundColors, bgLight} from "./components/bg"
import {borderLight, BorderColors} from "./components/border"
import {btnLight, BtnColors} from "./components/btn"
import {captionLight, CaptionColors} from "./components/caption"
import {checkboxLight, CheckboxColors} from "./components/checkbox"
import {chipLight, ChipColors} from "./components/chip"
import {iconLight, IconColors} from "./components/icon"
import {inputLight, InputColors} from "./components/input"
import {labelLight, LabelColors} from "./components/label"
import {navLight, NavColors} from "./components/nav"
import {radioLight, RadioColors} from "./components/radio"
import {textLight, TextColors} from "./components/text"
import {palette, Palette} from "./palette"

export interface ThemeColors {
  bg: BackgroundColors
  border: BorderColors
  btn: BtnColors
  caption: CaptionColors
  checkbox: CheckboxColors
  chip: ChipColors
  label: LabelColors
  icon: IconColors
  input: InputColors
  nav: NavColors
  palette: Palette
  radio: RadioColors
  text: TextColors
}

export const lightColors: ThemeColors = {
  bg: bgLight,
  border: borderLight,
  btn: btnLight,
  caption: captionLight,
  checkbox: checkboxLight,
  chip: chipLight,
  icon: iconLight,
  input: inputLight,
  label: labelLight,
  nav: navLight,
  palette,
  radio: radioLight,
  text: textLight,
}
