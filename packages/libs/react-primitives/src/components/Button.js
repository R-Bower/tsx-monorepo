import styled from "styled-components";
import { flexbox, typography } from "styled-system";
import { sharedSystemProps, shouldForwardProp, } from "../system/shared";
const Button = styled.button.withConfig({
    shouldForwardProp,
}) `
  display: flex;
  /* Remove outline for non-keyboard :focus */

  &:active {
    outline: none;
  }

  *:focus:not(.focus-visible) {
    outline: none;
  }

  will-change: transform;
  ${sharedSystemProps};
  ${flexbox};
  ${typography};
`;
Button.defaultProps = {
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "center",
    px: "16px",
};
export default Button;
//# sourceMappingURL=Button.js.map