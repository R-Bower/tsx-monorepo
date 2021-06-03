import React, {useMemo} from "react"

import {ThemeProvider} from "styled-components"

import {SystemTheme} from "../system/constants"
import {lightColors, ThemeColors} from "./colors/colors"
import {defaultTheme} from "./config"
import {lightShadows, ThemeShadows} from "./shadows/shadows"

export interface ThemeProviderProps {
  children: React.ReactNode
  colors?: ThemeColors
  shadows?: ThemeShadows
}

export const StyledThemeProvider: React.FC = ({
  children,
  colors = lightColors,
  shadows = lightShadows,
}: ThemeProviderProps) => {
  const mergedTheme: SystemTheme = useMemo(
    () => ({
      ...defaultTheme,
      colors,
      shadows,
    }),
    [colors, shadows],
  )
  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
}
