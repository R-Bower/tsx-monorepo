import React from "react"
import ReactDOM from "react-dom"

import {StyledThemeProvider} from "@rb/react-primitives"

import App from "./App"

ReactDOM.render(
  <StyledThemeProvider>
    <App />
  </StyledThemeProvider>,
  document.getElementById("root"),
)
