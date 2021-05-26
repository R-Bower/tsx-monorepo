import React, {useMemo} from "react"

import {ThemeProvider} from "styled-components"

import {SystemTheme} from "../system/constants"
import {ThemeColors} from "./colors/colors"
import {defaultTheme} from "./config"
import {ThemeShadows} from "./shadows/shadows"

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
