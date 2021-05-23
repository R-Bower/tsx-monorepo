import React from "react"

import styled from "styled-components"

import {sx, SxProp} from "../../system/sx"

export interface ElementProps {
  children?: HTMLCollection & React.ReactNode
}

// simple div with an sx prop.
// Used as the base component for more complex components that need special css properties.
export const Element = styled.div<SxProp>`
  ${sx};
`
