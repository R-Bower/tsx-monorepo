import styled from "styled-components"

import {SPACE, sx, SxProp, SystemSpaceProps} from "@rb/react-style-system"

export interface ElementProps extends SystemSpaceProps, SxProp {}

/*
 * Simple div with an sx prop.
 * Used as the base component for more complex components that need to lock in
 * specific css properties.  Inherits SPACE because margin/padding are convenient.
 */
export const Element = styled.div<ElementProps>`
  ${SPACE};
  ${sx};
`
