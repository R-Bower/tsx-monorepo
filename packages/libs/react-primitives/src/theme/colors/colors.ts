import {border, BorderColors} from "./components/border"
import {btn, BtnColors} from "./components/btn"
import {caption, CaptionColors} from "./components/caption"
import {checkbox, CheckboxColors} from "./components/checkbox"
import {chip, ChipColors} from "./components/chip"
import {input, InputColors} from "./components/input"
import {label, LabelColors} from "./components/label"
import {radio, RadioColors} from "./components/radio"
import {text, TextColors} from "./components/text"
import {toast, ToastColors} from "./components/toast"

interface BgColors {
  header: string
}

const bg: BgColors = {
  header: "#EDEDED",
}

export interface SystemThemeColors {
  bg: BgColors
  border: BorderColors
  btn: BtnColors
  caption: CaptionColors
  checkbox: CheckboxColors
  chip: ChipColors
  label: LabelColors
  input: InputColors
  radio: RadioColors
  text: TextColors
  toast: ToastColors
}

export const colors: SystemThemeColors = {
  bg,
  border,
  btn,
  caption,
  checkbox,
  chip,
  input,
  label,
  radio,
  text,
  toast,
}
