import React, {ChangeEventHandler} from "react"

import {Flex, FlexProps} from "~primitives/flex/Flex"
import {Input, InputProps} from "~primitives/input/Input"

const flexWrapperStyle = {
  as: "span",
  className: "TextInput-FlexWrapper",
  display: "inline-flex",
  outline: "none",
} as FlexProps

const inputStyle = {
  width: 1,
} as InputProps

export interface TextInputProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({onChange, value}: TextInputProps, ref) => {
    return (
      <Flex {...flexWrapperStyle}>
        <Input ref={ref} onChange={onChange} value={value} {...inputStyle} />
      </Flex>
    )
  },
)

TextInput.displayName = "Components.TextInput"