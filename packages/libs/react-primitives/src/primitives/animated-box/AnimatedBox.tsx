import {animated} from "react-spring"
import styled from "styled-components"

import {commonSystemProps, shouldForwardProp} from "../../system/shared"

export const AnimatedBox = styled(animated.div).withConfig({
  shouldForwardProp,
})`
  ${commonSystemProps};
`

AnimatedBox.displayName = "AnimatedBox"
