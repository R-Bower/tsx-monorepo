import React, {TextareaHTMLAttributes} from "react"

import styled from "styled-components"

import {SystemTextProps, systemTextProps} from "../../system/customProps"
import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"

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
  ${systemTextProps};
  ${commonSystemProps};
`

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    return <TextAreaStyled ref={ref} {...props} />
  },
)

TextArea.defaultProps = {
  fontSize: "16px",
}

export default TextArea
