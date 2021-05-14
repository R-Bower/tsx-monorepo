import React from "react"
import {ServerStyleSheet, StyleSheetManager} from "styled-components"

import PageWrapper from "./src/core/AppLayout"
import RootWrapper from "./src/core/AppRoot"

// eslint-disable-next-line no-undef
const sheetByPathname = new Map()

// https://www.gatsbyjs.org/docs/ssr-apis/#wrapPageElement
export const wrapPageElement = PageWrapper

export const wrapRootElement = ({element, pathname, ...props}) => {
  const sheet = new ServerStyleSheet()
  sheetByPathname.set(pathname, sheet)
  return (
    <StyleSheetManager sheet={sheet.instance}>
      <RootWrapper element={element} pathname={pathname} {...props} />
    </StyleSheetManager>
  )
}

export const onRenderBody = ({setHeadComponents, pathname}) => {
  const sheet = sheetByPathname.get(pathname)
  setHeadComponents([...(sheet ? [sheet.getStyleElement()] : [])])

  if (sheet) {
    sheetByPathname.delete(pathname)
  }
}
