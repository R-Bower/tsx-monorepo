import {animated} from "react-spring"
import styled from "styled-components"

import {commonSystemProps, shouldForwardProp} from "~system/shared"

const AnimatedBox = styled(animated.div).withConfig({
  shouldForwardProp,
})`
  ${commonSystemProps};
`

export default AnimatedBox
