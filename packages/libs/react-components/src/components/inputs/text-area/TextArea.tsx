import React, {TextareaHTMLAttributes} from "react"

import styled from "styled-components"

import {
  COMMON,
  INTERACTIVITY,
  shouldForwardProp,
  sx,
  SystemCommonProps,
  SystemInteractivityProps,
  SystemTypographyProps,
  TYPOGRAPHY,
} from "@rb/react-primitives"

export interface TextAreaProps
  extends SystemCommonProps,
    SystemInteractivityProps,
    SystemTypographyProps,
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "color"> {
  variant?: string
}

const TextAreaStyled = styled.textarea.withConfig({
  shouldForwardProp,
})<TextAreaProps>`
  box-sizing: border-box;
  ${COMMON};
  ${INTERACTIVITY};
  ${TYPOGRAPHY};
  ${sx};
`

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    return <TextAreaStyled ref={ref} {...props} />
  },
)

TextArea.defaultProps = {
  fontSize: "16px",
  outline: "none",
  resize: "none",
}
TextArea.displayName = "TextArea"
