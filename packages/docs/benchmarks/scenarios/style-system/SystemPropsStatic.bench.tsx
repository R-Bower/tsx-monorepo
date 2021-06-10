import React from "react"

import {Box, BoxProps} from "@rb/react-components"

import {Benchmark, testIterations} from "../../utils/benchmark"

const props: BoxProps = {
  border: "solid 3px",
  borderColor: "border.primary",
  height: 100,
  width: [100, 150, 200],
}

function SystemPropsStatic(): JSX.Element {
  return (
    <>
      {new Array(testIterations).fill(null).map((_, i) => (
        <Box
          /* eslint-disable-next-line react/no-array-index-key */
          key={i}
          {...props}
        >
          Test
        </Box>
      ))}
    </>
  )
}

Benchmark("SystemPropsStatic", SystemPropsStatic)
