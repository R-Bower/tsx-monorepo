import React from "react"

import {StyledThemeProvider} from "@rb/react-primitives"

import {MediaContextProvider} from "./media/Media"

export default function Root({children, element}) {
  return (
    <MediaContextProvider>
      <>
        <StyledThemeProvider>{element || children}</StyledThemeProvider>
      </>
    </MediaContextProvider>
  )
}
