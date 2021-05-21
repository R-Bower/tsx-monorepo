import {createGlobalStyle, css} from "styled-components"

const fontFamily = css`
  font-family: "Nunito", Source Code Pro, sans-serif;
`

// margins must be 0 here but can be adjusted elsewhere.
// styled-components tends to add them for the default style.
export const DefaultGlobalStyle = createGlobalStyle`
    * { box-sizing: border-box; }
  html {
    ${fontFamily};
  }

  body {
    margin: 0;
    padding: 0;
    ${fontFamily};
    font-size: 16px;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  
  table { border-collapse: collapse; }

  [role="button"]:focus:not(:focus-visible):not(.focus-visible),
  [role="tabpanel"][tabindex="0"]:focus:not(:focus-visible):not(.focus-visible),
  button:focus:not(:focus-visible):not(.focus-visible),
  summary:focus:not(:focus-visible):not(.focus-visible),
  a:focus:not(:focus-visible):not(.focus-visible) {
      outline: none;
      box-shadow: none;
  }
`
