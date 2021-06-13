import {InputProps} from "../../primitives/input/Input"
import {TextProps} from "../../primitives/text/Text"

export interface TextInputSizes {
  large: Partial<TextProps>
  medium: Partial<TextProps>
  small: Partial<TextProps>
}

export const labelSizes: TextInputSizes = {
  large: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
    maxWidth: 312,
    mb: 2,
  },
  medium: {
    fontSize: 14,
    lineHeight: 1.5,
    maxWidth: 280,
    mb: 1,
  },
  small: {
    fontSize: 12,
    lineHeight: 1.25,
    maxWidth: 280,
    mb: 1,
  },
}

export const inputSizes: TextInputSizes = {
  large: {
    fontSize: 20,
    fontWeight: 400,
    height: 48,
    lineHeight: 1.5,
    maxWidth: 312,
    px: 5,
    py: 3,
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
    height: 30,
    lineHeight: 1.5,
    maxWidth: 280,
    px: 2,
    py: 1,
  },
}

export interface TextInputVariants {
  primary: InputProps
}

export const inputVariants: TextInputVariants = {
  primary: {
    bg: "input.bg",
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
