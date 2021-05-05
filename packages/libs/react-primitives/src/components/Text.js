import styled, { css } from "styled-components";
import { typography } from "styled-system";
import { sharedSystemProps, shouldForwardProp, } from "../system/shared";
const textProps = css `
  margin: 0;
  ${typography};
  ${sharedSystemProps};
`;
const Text = styled.p.withConfig({ shouldForwardProp }) `
  ${textProps};
`;
Text.defaultProps = {
    fontSize: "16px",
    fontWeight: 300,
    letterSpacing: "normal",
};
export default Text;
//# sourceMappingURL=Text.js.map