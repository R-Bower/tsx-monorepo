import styled from "styled-components";
import { sharedSystemProps, shouldForwardProp, } from "../system/shared";
const Svg = styled.svg.withConfig({ shouldForwardProp }) `
  ${sharedSystemProps};
`;
Svg.displayName = "Primitives.Svg";
export default Svg;
//# sourceMappingURL=Svg.js.map