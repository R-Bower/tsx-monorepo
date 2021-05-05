import styled from "styled-components";
import { typography } from "styled-system";
import { sharedSystemProps, shouldForwardProp, } from "../system/shared";
const TextArea = styled.textarea.withConfig({
    shouldForwardProp,
}) `
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
  ${sharedSystemProps};
`;
TextArea.defaultProps = {
    fontSize: "16px",
};
export default TextArea;
//# sourceMappingURL=TextArea.js.map