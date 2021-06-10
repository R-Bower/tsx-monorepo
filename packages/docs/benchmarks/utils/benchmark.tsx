import React from "react"

import fse from "fs-extra"
import path from "path"
import {reduce} from "rambda"

import {render} from "./test-utils"

const getBreakdown = reduce(
  (acc, {id, actualDuration}) => ({
    ...acc,
    [id]: `${Math.round(actualDuration)}ms`,
  }),
  {},
)

export const writeResult = (
  id: string, // the "id" prop of the Profiler tree that has just committed
  phase: "mount" | "update", // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration: number, // time spent rendering the committed update
  baseDuration: number, // estimated time to render the entire subtree without memoization
  startTime: number, // when React began rendering this update
  commitTime: number, // when React committed this update
): void => {
  fse.writeJsonSync(
    path.resolve(__dirname, `../results/${id}.json`),
    {actualDuration, baseDuration, commitTime, id, phase, startTime},
    {spaces: 2},
  )
}

export const testIterations = 10000

/*
 * Reusable benchmark function which runs a React.Profiler test to simulate thousands of renders.
 */
export const Benchmark = (id: string, Component): void =>
  describe(id, () => {
    test(id, () => {
      render(
        <>
          <React.Profiler id={id} onRender={writeResult}>
            <Component />
          </React.Profiler>
        </>,
      )
    })
  })
