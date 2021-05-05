import React from "react"

import {render, RenderOptions, RenderResult} from "@testing-library/react"

import Providers from "../components/page/Providers"

// test-utils.js

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)

const customRender = (
  ui: React.ReactElement,
  options: RenderOptions = {},
): RenderResult => render(ui, {wrapper: Providers, ...options})

// re-export everything
export * from "@testing-library/react"

// override render method
export {customRender as render}
