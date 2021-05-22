import React, {TextareaHTMLAttributes} from "react"

import styled from "styled-components"

import {
  CommonSystemProps,
  shouldForwardProp,
  sx,
  SystemTextProps,
  TEXT,
} from "@rb/react-primitives"

export interface TextAreaProps
  extends CommonSystemProps,
    SystemTextProps,
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "color"> {}

const TextAreaStyled = styled.textarea.withConfig({
  shouldForwardProp,
})<TextAreaProps>`
  box-sizing: border-box;
  outline: none;
  resize: none;
  ${TEXT};
  ${sx};
`

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    return <TextAreaStyled ref={ref} {...props} />
  },
)

TextArea.defaultProps = {
  fontSize: "16px",
}
TextArea.displayName = "TextArea"
