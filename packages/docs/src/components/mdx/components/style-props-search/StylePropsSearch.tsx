import React, {useCallback, useState} from "react"

import {equals, findIndex} from "rambda"

import {Flex, TextInput} from "@rb/react-components"

import PropGroup, {PropsListProps} from "./PropGroup"
import {propsList} from "./props"
import {filterEntries} from "./utils"

interface StylePropsSearchProps {
  propGroups: PropsListProps["id"][]
  searchable?: boolean
  showTitle?: boolean
}

const getFilteredPropsList = (propGroups: PropsListProps["id"][]) => {
  const props = equals("all", propGroups[0])
    ? propsList
    : propsList.filter(({id}) => propGroups.includes(id))
  return props.sort((a, b) => {
    const aIndex = findIndex(equals(a.id), propGroups) + 1
    const bIndex = findIndex(equals(b.id), propGroups) + 1
    return aIndex - bIndex
  })
}

/*
 * A simple search interface for our system props.  Prop groups are sorted based
 * on the order that they're provided in the @propGroups array.
 */
export default function StylePropsSearch({
  propGroups,
  searchable = true,
  showTitle = true,
}: StylePropsSearchProps): JSX.Element {
  const [input, setInput] = useState<string>("")

  const [filteredState, setFilteredState] = useState<PropsListProps[]>(
    getFilteredPropsList(propGroups),
  )

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {value} = event.target
      setInput(value)
      setFilteredState(
        value
          ? filterEntries(value, propsList)
          : getFilteredPropsList(propGroups),
      )
    },
    [propGroups],
  )

  return (
    <Flex flexDirection={"column"}>
      {searchable ? (
        <TextInput
          mb={2}
          onChange={onInputChange}
          placeholder={"Props search..."}
          value={input}
        />
      ) : null}
      {filteredState.map((entry) => (
        <PropGroup
          key={entry.id}
          id={entry.id.toUpperCase()}
          props={entry.props}
          showTitle={showTitle}
        />
      ))}
    </Flex>
  )
}
