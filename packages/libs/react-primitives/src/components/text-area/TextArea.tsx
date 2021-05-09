import React from "react"

import styled from "styled-components"
import {typography, TypographyProps} from "styled-system"

import {CustomTextProps} from "../../system/customProps"
import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"
import {ComponentProps} from "../../types/props"

export interface TextAreaProps
  extends CommonSystemProps,
    TypographyProps,
    CustomTextProps {}

const TextAreaStyled = styled.textarea.withConfig({
  shouldForwardProp,
})<TextAreaProps>`
  box-sizing: border-box;
  outline: none;
  resize: none;
  ${typography};
  ${commonSystemProps};
`

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaProps | ComponentProps<typeof TextAreaStyled>
>((props: TextAreaProps, ref) => {
  return <TextAreaStyled ref={ref} {...props} />
})

TextArea.defaultProps = {
  fontSize: "16px",
}

export default TextArea
