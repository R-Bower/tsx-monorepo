import React from "react"

import {Flex, Input, InputProps} from "@rb/react-primitives"

export type TextInputProps = InputProps

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    return (
      <Flex as={"span"} display={"inline-flex"} outline={"none"} {...props}>
        <Input ref={ref} className={"TextInput-Wrapper"} width={1} />
      </Flex>
    )
  },
)

export default TextInput
