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

interface SystemTextAreaProps
  extends CommonSystemProps,
    TypographyProps,
    CustomTextProps {}

const TextAreaStyled = styled.textarea.withConfig({
  shouldForwardProp,
})<SystemTextAreaProps>`
  box-sizing: border-box;
  outline: none;
  resize: none;
  ${typography};
  ${commonSystemProps};
`

export type TextAreaProps = ComponentProps<typeof TextAreaStyled>

const TextArea = React.forwardRef((props: TextAreaProps, ref) => {
  return <TextAreaStyled ref={ref} {...props} />
})

TextArea.defaultProps = {
  fontSize: "16px",
}

export default TextArea
