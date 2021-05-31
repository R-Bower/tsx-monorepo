import {InputProps} from "../../primitives/input/Input"
import {TextProps} from "../../primitives/text/Text"

export interface TextInputSizes {
  large: Partial<TextProps>
  medium: Partial<TextProps>
  small: Partial<TextProps>
}

export const inputSizes: TextInputSizes = {
  large: {
    fontSize: 20,
    fontWeight: 400,
    height: 48,
    lineHeight: 1.5,
    maxWidth: 312,
  },
  medium: {
    fontSize: 16,
    height: 40,
    lineHeight: 1.5,
    maxWidth: 280,
    px: 4,
    py: 3,
  },
  small: {
    fontSize: 14,
    height: "30px",
    lineHeight: 1.5,
  },
}

export interface TextInputVariants {
  primary: InputProps
}

export const inputVariants: TextInputVariants = {
  primary: {
    border: "solid 1px",
    borderColor: "input.border",
    borderRadius: 5,
    color: "text.primary",
    sx: {
      "&:focus": {
        borderColor: "input.focusBorder",
      },
      "&:hover:not(:focus)": {
        borderColor: "input.hoverBorder",
      },
      "::placeholder": {
        color: "input.primary.placeholder",
      },
    },
  },
}
