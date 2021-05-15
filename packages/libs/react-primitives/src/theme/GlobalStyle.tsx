import {createGlobalStyle, css} from "styled-components"

const fontFamily = css`
  font-family: "Quicksand", sans-serif;
`

export const DefaultGlobalStyle = createGlobalStyle`  
  html {
    ${fontFamily};
  }
  body {
    margin: 0;
    padding: 0;
    ${fontFamily};
  }
`
