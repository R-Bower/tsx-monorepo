import {css, keyframes} from "styled-components"

export const rotateKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const rotateCss = css`
  animation: ${rotateKeyframes} 5s infinite linear;
`
