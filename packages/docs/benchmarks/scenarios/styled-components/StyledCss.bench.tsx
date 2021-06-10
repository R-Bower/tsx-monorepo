import React from "react"

import styled, {css, FlattenSimpleInterpolation} from "styled-components"

import {Benchmark, testIterations} from "../../utils/benchmark"

const StyledDiv = styled.div<{css?: FlattenSimpleInterpolation}>``

const divCss = css`
  width: 100px;
  height: 100px;
  border: solid 3px;
  border-color: ${(props) => props.theme.colors.border.primary};
  @media only screen and (min-width ${(props) => props.theme.breakpoints[0]}) {
    width: 150px;
  }
  @media only screen and (min-width ${(props) => props.theme.breakpoints[1]}) {
    width: 200px;
  }
`

export function StyledCss() {
  return (
    <>
      {new Array(testIterations).fill(null).map((_, i) => (
        <StyledDiv
          /* eslint-disable-next-line react/no-array-index-key */
          key={i}
          // @ts-ignore
          css={divCss}
        >
          Test
        </StyledDiv>
      ))}
    </>
  )
}

Benchmark("StyledCss", StyledCss)
