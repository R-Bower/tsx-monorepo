import React from "react"

import {ThemeProvider as StyledThemeProvider} from "styled-components"
import {Theme} from "styled-system"

interface IThemeProp extends Theme {
  colors: {[key: string]: any}
}

interface IThemeProviderProps {
  children: JSX.Element | JSX.Element[]
  theme: IThemeProp
}

export default function ThemeProvider({
  children,
  theme,
}: IThemeProviderProps): JSX.Element {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
