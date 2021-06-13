import React from "react"

import {Base} from "@rb/react-components"
import {SystemStyleObject} from "@rb/react-style-system"

import {Benchmark, testIterations} from "../../utils/benchmark"

const sx: SystemStyleObject = {
  border: "solid 3px",
  borderColor: "border.primary",
  height: 100,
  width: [100, 150, 200],
}

function SxStatic(): JSX.Element {
  return (
    <>
      {new Array(testIterations).fill(null).map((_, i) => (
        <Base
          /* eslint-disable-next-line react/no-array-index-key */
          key={i}
          sx={sx}
        >
          Test
        </Base>
      ))}
    </>
  )
}

Benchmark("SxStatic", SxStatic)
