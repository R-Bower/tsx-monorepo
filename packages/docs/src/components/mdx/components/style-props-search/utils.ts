import fuzzysearch from "fuzzysearch"

import {PropsListProps} from "./StyleProps"

export const filterProps = (
  term: string,
  props: PropsListProps["props"],
): PropsListProps["props"] =>
  props.filter(
    ([prop, cssProperty]) =>
      fuzzysearch(term, prop.toLowerCase()) ||
      fuzzysearch(term, cssProperty.toLowerCase()),
  )

export const filterEntries = (
  term: string,
  list: PropsListProps[],
): PropsListProps[] => {
  return list
    .map(({id, props}) => {
      if (fuzzysearch(term.toLowerCase(), id.toLowerCase())) {
        return {id, props}
      } else {
        return {id, props: filterProps(term.toLowerCase(), props)}
      }
    })
    .filter(({props}) => props.length)
}
