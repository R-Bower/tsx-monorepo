import React, {ChangeEventHandler} from "react"

import {Flex} from "../../primitives/flex/Flex"
import {Input, InputProps} from "../../primitives/input/Input"
import {inputSizes, inputVariants, TextInputVariants} from "./styles"

export interface TextInputProps extends InputProps {
  caption?: string
  label?: string
  icon?: React.ReactNode
  iconPlacement?: "left" | "right"
  onChange: ChangeEventHandler<HTMLInputElement>
  size?: "small" | "medium" | "large"
  value: string
  variant?: keyof TextInputVariants
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({size = "medium", variant = "primary", ...props}: TextInputProps, ref) => {
    const inputStyles = {...inputVariants[variant], ...inputSizes[size]}
    return (
      <Flex as={"span"} display={"inline-flex"} outline={"none"}>
        <Input ref={ref} width={1} {...props} sx={inputStyles} />
      </Flex>
    )
  },
)

TextInput.displayName = "Components.TextInput"
