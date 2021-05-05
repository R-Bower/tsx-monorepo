import { animated } from "react-spring";
import styled from "styled-components";
import { sharedSystemProps, shouldForwardProp } from "../system/shared";
const AnimatedBox = styled(animated.div).withConfig({
    shouldForwardProp,
}) `
  ${sharedSystemProps};
`;
export default AnimatedBox;
//# sourceMappingURL=AnimatedBox.js.map