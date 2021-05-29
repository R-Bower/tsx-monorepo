import styled from "styled-components"

import {sx, SxProp} from "@rb/react-style-system"

/*
 * Simple div with an sx prop.
 * Used as the base component for more complex components that need to lock in
 * specific css properties.
 */
export const Element = styled.div<SxProp>`
  ${sx};
`
