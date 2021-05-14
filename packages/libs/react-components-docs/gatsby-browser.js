import PageWrapper from "./src/core/AppLayout"
import RootWrapper from "./src/core/AppRoot"

// https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
export const wrapPageElement = PageWrapper

// https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
export const wrapRootElement = RootWrapper

export const onPreRouteUpdate = () => {
  // window is always available in gatsby-browser.js, so no need for a check
  // window.scrollTo({behavior: "smooth", top: 0})
}
