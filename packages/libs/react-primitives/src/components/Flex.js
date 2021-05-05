import styled from "styled-components";
import { flexbox } from "styled-system";
import { sharedSystemProps, shouldForwardProp, } from "../system/shared";
const Flex = styled.div.withConfig({ shouldForwardProp }) `
  box-sizing: border-box;
  ${flexbox};
  ${sharedSystemProps};
`;
Flex.defaultProps = {
    display: "flex",
};
export default Flex;
//# sourceMappingURL=Flex.js.map