import React from "react"

import {render, RenderOptions, RenderResult} from "@testing-library/react"

import {StyledThemeProvider} from "@rb/react-primitives"

const customRender = (
  ui: React.ReactElement,
  options: RenderOptions = {},
): RenderResult => render(ui, {wrapper: StyledThemeProvider, ...options})

// re-export everything
export * from "@testing-library/react"

// override render method
export {customRender as render}
