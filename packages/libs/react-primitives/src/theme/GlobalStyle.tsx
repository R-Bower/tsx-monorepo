import {createGlobalStyle, css} from "styled-components"

const fontFamily = css`
  font-family: "Open Sans", sans-serif;
`

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Open Sans";
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  html {
    ${fontFamily};
  }
  body {
    margin: 0;
    padding: 0;
    ${fontFamily};
  }
`

export default GlobalStyles