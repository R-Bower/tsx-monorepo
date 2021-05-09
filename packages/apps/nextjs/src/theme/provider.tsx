import React from "react"

import {ThemeProvider as StyledThemeProvider} from "styled-components"
import {Theme} from "styled-system"

interface ThemeProp extends Theme {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  colors: {[key: string]: any}
}

interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[]
  theme: ThemeProp
}

export default function ThemeProvider({
  children,
  theme,
}: ThemeProviderProps): JSX.Element {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
