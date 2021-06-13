import React from "react"

import {Base} from "@rb/react-components"

import {Benchmark, testIterations} from "../../utils/benchmark"

function SxWrapper(): JSX.Element {
  return (
    <Base
      sx={{
        div: {
          border: "solid 3px",
          borderColor: "border.primary",
          height: 100,
          width: [100, 150, 200],
        },
      }}
    >
      <>
        {new Array(testIterations).fill(null).map((_, i) => (
          <div
            /* eslint-disable-next-line react/no-array-index-key */
            key={i}
          >
            Test
          </div>
        ))}
      </>
    </Base>
  )
}

Benchmark("SxWrapper", SxWrapper)
