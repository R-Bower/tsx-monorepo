import {border, BorderColors} from "./components/border"
import {btn, BtnColors} from "./components/btn"
import {caption, CaptionColors} from "./components/caption"
import {checkbox, CheckboxColors} from "./components/checkbox"
import {chip, ChipColors} from "./components/chip"
import {icon, IconColors} from "./components/icon"
import {input, InputColors} from "./components/input"
import {label, LabelColors} from "./components/label"
import {nav, NavColors} from "./components/nav"
import {radio, RadioColors} from "./components/radio"
import {text, TextColors} from "./components/text"
import {toast, ToastColors} from "./components/toast"
import {palette, Palette} from "./palette"

export interface ThemeColors {
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
  toast: ToastColors
}

export const colors: ThemeColors = {
  border,
  btn,
  caption,
  checkbox,
  chip,
  icon,
  input,
  label,
  nav,
  palette,
  radio,
  text,
  toast,
}
