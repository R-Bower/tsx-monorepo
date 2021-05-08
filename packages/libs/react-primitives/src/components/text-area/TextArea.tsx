import styled from "styled-components"
import {typography, TypographyProps} from "styled-system"

import {
  ISharedSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"

export interface ITextAreaProps extends ISharedSystemProps, TypographyProps {}

const TextArea = styled.textarea.withConfig({
  shouldForwardProp,
})<ITextAreaProps>`
  box-sizing: border-box;
  outline: none;
  resize: none;

  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors["background-primary"]};
    cursor: pointer;
    opacity: 0;
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.grey};
    cursor: pointer;
    border-radius: 0;
    opacity: 0;
  }
  ${typography};
  ${commonSystemProps};
`

TextArea.defaultProps = {
  fontSize: "16px",
}

export default TextArea
