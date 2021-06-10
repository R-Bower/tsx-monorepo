import React from "react"

import {Box} from "@rb/react-components"

import {Benchmark, testIterations} from "../../utils/benchmark"

function SystemPropsDynamic(): JSX.Element {
  return (
    <>
      {new Array(testIterations).fill(null).map((_, i) => (
        <Box
          /* eslint-disable-next-line react/no-array-index-key */
          key={i}
          border={"solid 3px"}
          borderColor={"border.primary"}
          height={100}
          width={[100, 150, 200]}
        >
          Test
        </Box>
      ))}
    </>
  )
}

Benchmark("SystemPropsDynamic", SystemPropsDynamic)
