import React from "react"

import {Benchmark, testIterations} from "../../utils/benchmark"

function Control(): JSX.Element {
  return (
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
  )
}

Benchmark("Control", Control)
