import {createGlobalStyle, css} from "styled-components"

const fontFamily = css`
  font-family: "Quicksand", sans-serif;
`

// margins must be 0 here but can be adjusted elsewhere.
// styled-components tends to add them for the default style.
export const DefaultGlobalStyle = createGlobalStyle`
  html {
    ${fontFamily};
  }

  body {
    margin: 0;
    padding: 0;
    ${fontFamily};
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`
