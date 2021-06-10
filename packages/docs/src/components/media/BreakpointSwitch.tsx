import React, {useEffect} from "react"

import {setBreakpoint} from "~redux/reducers/ui/uiSlice"
import {useAppDispatch} from "~redux/store"

import {BreakpointKey, Media} from "./Media"

const mediaConfig: BreakpointKey[] = ["xxs", "xs", "sm", "md", "lg", "xl"]

/**
 * This is a dummy component that renders an empty fragment.  Its only purpose is to set
 * the current breakpoint, and is rendered conditionally based on the parent <Media> context.
 */
function BreakpointOption({breakpoint, dispatch}) {
  useEffect(() => {
    dispatch(setBreakpoint(breakpoint))
  }, [breakpoint, dispatch])
  return null
}

/**
 * A quick solution to set the current breakpoint on browser hydration.
 * This doesn't solve the Cumulative Layout Shift problem on initial load.
 * <Media> renders on the server and when it's time for the browser to hydrate,
 * it computes the layout.
 */
export default function BreakpointSwitch(): JSX.Element {
  const dispatch = useAppDispatch()
  return (
    <>
      {mediaConfig.map((at, bp) => (
        <Media key={at} at={at}>
          <BreakpointOption breakpoint={bp} dispatch={dispatch} />
        </Media>
      ))}
      <Media greaterThanOrEqual={"xxl"}>
        <BreakpointOption breakpoint={5} dispatch={dispatch} />
      </Media>
    </>
  )
}
