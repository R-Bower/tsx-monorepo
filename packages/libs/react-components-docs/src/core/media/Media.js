import {createMedia} from "@artsy/fresnel"
import styled from "styled-components"

import {breakpoints} from "@rb/react-primitives"

const QueryBreakpoints = createMedia({
  breakpoints: {
    lg: breakpoints[3],
    md: breakpoints[2],
    sm: breakpoints[1],
    xl: breakpoints[4],
    xs: breakpoints[0],
    xxs: 0,
  },
})

// Generate CSS to be injected into the head
export const mediaStyles = QueryBreakpoints.createMediaStyle()
export const {MediaContextProvider} = QueryBreakpoints

const {Media: MediaComponent} = QueryBreakpoints

export const Media = styled(MediaComponent)`
  width: ${(props) => props.width};
`
