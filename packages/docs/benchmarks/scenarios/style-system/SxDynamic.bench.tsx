import React from "react"

import {Element} from "@rb/react-components"

import {Benchmark, testIterations} from "../../utils/benchmark"

function SxDynamic(): JSX.Element {
  return (
    <>
      {new Array(testIterations).fill(null).map((_, i) => (
        <Element
          /* eslint-disable-next-line react/no-array-index-key */
          key={i}
          sx={{
            border: "solid 3px",
            borderColor: "border.primary",
            height: 100,
            width: [100, 150, 200],
          }}
        >
          Test
        </Element>
      ))}
    </>
  )
}

Benchmark("SxDynamic", SxDynamic)
