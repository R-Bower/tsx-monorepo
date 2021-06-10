import React from "react"

import styled from "styled-components"

import {Benchmark, testIterations} from "../../utils/benchmark"

const Styled = styled.div`
  div {
    width: 100px;
    height: 100px;
    border: solid 3px;
    border-color: ${(props) => props.theme.colors.border.primary};
    @media only screen and (min-width ${(props) =>
        props.theme.breakpoints[0]}) {
      width: 150px;
    }
    @media only screen and (min-width ${(props) =>
        props.theme.breakpoints[1]}) {
      width: 200px;
    }
  }
`

export function StyledWrapper() {
  return (
    <Styled>
      {new Array(testIterations).fill(null).map((_, i) => (
        <div
          /* eslint-disable-next-line react/no-array-index-key */
          key={i}
        >
          Test
        </div>
      ))}
    </Styled>
  )
}

Benchmark("StyledWrapper", StyledWrapper)
