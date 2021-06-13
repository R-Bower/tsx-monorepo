import {ButtonProps} from "./Button"

export const sizes = {
  lg: {px: 8, py: 4},
  md: {px: 6, py: 3},
  sm: {px: 4, py: 2},
}

type ButtonVariant = Omit<ButtonProps, "variant">

interface ButtonVariants {
  outline: ButtonVariant
  icon: ButtonVariant
  transparent: ButtonVariant
}

export const buttonVariants: ButtonVariants = {
  outline: {

  },
  icon: {
    alignItems: "center",
    bg: "bg.secondary",
    border: "solid 1px",
    borderColor: "border.primary",
    borderRadius: 5,
    justifyContent: "center",
    outline: "none",
    sx: {
      "&:hover": {
        bg: "btn.outline.hoverBg",
        boxShadow: "btn.outline.hoverShadow",
      },
    },
  },
  transparent: {
    bg: "transparent",
    border: "none",
    outline: "none",
  },
}
