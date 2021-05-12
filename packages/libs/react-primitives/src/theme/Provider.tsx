import React, {useMemo} from "react"

import {ThemeProvider as StyledThemeProvider} from "styled-components"
import {Theme} from "styled-system"

import {ThemeColors} from "./colors/colors"
import {defaultTheme} from "./config"
import {ThemeShadows} from "./shadows/shadows"

interface ThemeProp extends Omit<Theme, "colors" | "shadows"> {
  colors: ThemeColors
  shadows: ThemeShadows
}

interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[]
  colors?: ThemeColors
  shadows?: ThemeShadows
}

export default function ThemeProvider({
  children,
  colors = defaultTheme.colors,
  shadows = defaultTheme.shadows,
}: ThemeProviderProps): JSX.Element {
  const mergedTheme: ThemeProp = useMemo(
    () => ({
      ...defaultTheme,
      colors,
      shadows,
    }),
    [colors, shadows],
  )
  return (
    <StyledThemeProvider theme={mergedTheme}>{children}</StyledThemeProvider>
  )
}
