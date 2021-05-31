import React, {useEffect, useState} from "react"

import {ThemeProvider} from "styled-components"

import {
  darkColors,
  DefaultGlobalStyle,
  defaultTheme,
  lightColors,
} from "@rb/react-style-system"

import {ViewMode} from "~redux/reducers/ui/uiSlice"
import {useAppSelector} from "~redux/store"

import Layout from "./Layout"

interface ProvidersProps {
  children: React.ReactNode
}

const darkTheme = {...defaultTheme, colors: darkColors}
const lightTheme = {...defaultTheme, colors: lightColors}

export default function Providers({children}: ProvidersProps): JSX.Element {
  const viewMode = useAppSelector<ViewMode>((state) => state.ui.viewMode)
  return (
    <>
      <DefaultGlobalStyle />
      {/* caching this would be possible if we persisted the setting via the API */}
      <ThemeProvider theme={viewMode === "dark" ? darkTheme : lightTheme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </>
  )
}
