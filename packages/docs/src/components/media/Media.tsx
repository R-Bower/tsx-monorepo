import {createMedia} from "@artsy/fresnel"

import {defaultTheme} from "@rb/react-style-system"

const breakpoints = defaultTheme.breakpoints.map((bp) =>
  parseInt(bp.replace("px", "")),
)

const mediaBreakpoints = {
  lg: breakpoints[3],
  md: breakpoints[2],
  sm: breakpoints[1],
  xl: breakpoints[4],
  xs: breakpoints[0],
  xxl: breakpoints[5],
  xxs: 0,
}

export type BreakpointKey = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"

// https://artsy.github.io/blog/2019/05/24/server-rendering-responsively/
const AppMedia = createMedia({
  breakpoints: mediaBreakpoints,
})

// Make styles for injection into the header of the page
export const mediaStyles = AppMedia.createMediaStyle()

export const Media = AppMedia.Media
export const MediaContextProvider = AppMedia.MediaContextProvider
