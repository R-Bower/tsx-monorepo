import styled from "styled-components";
import { sharedSystemProps, shouldForwardProp, } from "../system/shared";
const Box = styled.div.withConfig({ shouldForwardProp }) `
  ${sharedSystemProps};
`;
export default Box;
//# sourceMappingURL=Box.js.map