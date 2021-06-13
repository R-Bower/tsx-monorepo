import styled from "styled-components"

import {
  SIZING,
  SPACE,
  sx,
  SxProp,
  SystemSizingProps,
  SystemSpaceProps,
} from "@rb/react-style-system"

export interface BaseProps
  extends SystemSpaceProps,
    SystemSizingProps,
    SxProp {}

/*
 * Simple div with an sx prop.
 * Used as the base component for more complex components that need to lock in
 * specific css properties.  Inherits SPACE because margin/padding are convenient.
 */
export const Base = styled.div<BaseProps>`
  ${SIZING};
  ${SPACE};
  ${sx};
`
