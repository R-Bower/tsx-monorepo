import React from "react"

import {ThemeProvider as StyledThemeProvider} from "styled-components"
import {Theme} from "styled-system"

interface IThemeProviderProps {
  children: JSX.Element | JSX.Element[]
  theme: Theme
}

export default function ThemeProvider({
  children,
  theme,
}: IThemeProviderProps): JSX.Element {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
