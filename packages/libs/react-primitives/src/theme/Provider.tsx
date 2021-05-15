import React, {useMemo} from "react"

import {ThemeProvider} from "styled-components"
import {Theme} from "styled-system"

import {ThemeColors} from "./colors/colors"
import {defaultTheme} from "./config"
import {ThemeShadows} from "./shadows/shadows"

export interface ThemeProp extends Omit<Theme, "colors" | "shadows"> {
  colors: ThemeColors
  shadows: ThemeShadows
}

export interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[]
  colors?: ThemeColors
  shadows?: ThemeShadows
}

export const StyledThemeProvider: React.FC = ({
  children,
  colors = defaultTheme.colors,
  shadows = defaultTheme.shadows,
}: ThemeProviderProps) => {
  const mergedTheme: ThemeProp = useMemo(
    () => ({
      ...defaultTheme,
      colors,
      shadows,
    }),
    [colors, shadows],
  )
  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
}
