import styled from "styled-components";
import { typography } from "styled-system";
import { sharedSystemProps, shouldForwardProp, } from "../system/shared";
const Input = styled.input.withConfig({
    shouldForwardProp,
}) `
  ${typography};
  ${sharedSystemProps};
  outline: none;
  // Safari placeholder centering fix
  box-sizing: border-box;
  line-height: normal;
`;
export default Input;
//# sourceMappingURL=Input.js.map