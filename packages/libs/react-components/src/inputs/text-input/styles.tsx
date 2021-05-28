import {SystemStyleObject} from "@rb/react-style-system"

import {InputProps} from "../../primitives/input/Input"
import {TextProps} from "../../primitives/text/Text"

export interface TextInputSizes {
  large: Partial<TextProps>
  medium: Partial<TextProps>
  small: Partial<TextProps>
}

export const inputSizes: TextInputSizes = {
  large: {
    fontSize: "16px",
    fontWeight: 400,
    height: 48,
    lineHeight: 1.5,
    maxWidth: 312,
  },
  medium: {fontSize: "14px"},
  small: {
    fontSize: "12px",
    height: "30px",
  },
}

export interface TextInputVariants {
  primary: InputProps
}

export const inputVariants: TextInputVariants = {
  primary: {
    sx: {
      "::placeholder": {
        color: "input.base.placeholder",
      },
      border: "solid 1px",
      borderColor: "input.base.border",
      color: "input.base.text",
    },
  },
}
