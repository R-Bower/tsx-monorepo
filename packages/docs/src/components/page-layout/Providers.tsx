import React from "react"

import {ThemeProvider} from "styled-components"

import {
  darkColors,
  darkDimmedColors,
  DefaultGlobalStyle,
  defaultTheme,
  lightColors,
  SystemTheme,
} from "@rb/react-style-system"

import {ViewMode} from "~redux/reducers/ui/uiSlice"
import {useAppSelector} from "~redux/store"

import Layout from "./Layout"

interface ProvidersProps {
  children: React.ReactNode
}

const lightTheme = {...defaultTheme, colors: lightColors}

const themeMap: {[key in ViewMode]: SystemTheme} = {
  dark: {...defaultTheme, colors: darkColors},
  "dark-dimmed": {...defaultTheme, colors: darkDimmedColors},
  light: lightTheme,
}

export default function Providers({children}: ProvidersProps): JSX.Element {
  const viewMode = useAppSelector<ViewMode>((state) => state.ui.viewMode)
  return (
    <>
      <DefaultGlobalStyle />
      {/* caching this would be possible if we persisted the setting via the API */}
      <ThemeProvider theme={themeMap[viewMode] || lightTheme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </>
  )
}
