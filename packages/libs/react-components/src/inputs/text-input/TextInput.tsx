import React, {ChangeEventHandler} from "react"

import {Box} from "../../primitives/box/Box"
import {Flex} from "../../primitives/flex/Flex"
import {Input, InputProps} from "../../primitives/input/Input"
import {Text} from "../../primitives/text/Text"
import {
  inputSizes,
  inputVariants,
  labelSizes,
  TextInputVariants,
} from "./styles"

export interface TextInputProps extends InputProps {
  caption?: string
  disabled?: boolean
  form?: string
  label?: string
  icon?: React.ReactNode
  iconPlacement?: "left" | "right"
  onChange: ChangeEventHandler<HTMLInputElement>
  size?: "small" | "medium" | "large"
  value: string
  variant?: keyof TextInputVariants
}

// TODO: add icons
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      disabled,
      icon,
      iconPlacement,
      label,
      size = "medium",
      variant = "primary",
      ...props
    }: TextInputProps,
    ref,
  ) => {
    const inputStyles = {...inputVariants[variant], ...inputSizes[size]}
    return (
      <Flex flexDirection={"column"}>
        {label ? (
          <Text variant={"span"} {...labelSizes[size]}>
            {label}
          </Text>
        ) : null}
        <Flex as={"span"} display={"inline-flex"} outline={"none"}>
          {icon ? <Box mx={1}>{icon}</Box> : null}
          <Flex order={icon && iconPlacement === "left" ? 1 : 0}>
            <Input
              ref={ref}
              disabled={disabled}
              width={1}
              {...props}
              {...inputStyles}
            />
          </Flex>
        </Flex>
      </Flex>
    )
  },
)

TextInput.displayName = "Components.TextInput"
