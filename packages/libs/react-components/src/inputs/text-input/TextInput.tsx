import React, {ChangeEventHandler} from "react"

import {Flex} from "~primitives/flex/Flex"
import {Input} from "~primitives/input/Input"
import {TextProps} from "~primitives/text/Text"

export interface TextInputProps extends TextProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  label?: string
  value: string
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    return (
      <Flex as={"span"} display={"inline-flex"} outline={"none"}>
        <Input ref={ref} width={1} {...props} />
      </Flex>
    )
  },
)

TextInput.displayName = "Components.TextInput"
