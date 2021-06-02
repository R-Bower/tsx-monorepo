import React, {useCallback, useState} from "react"

import {equals} from "rambda"

import {Flex, TextInput} from "@rb/react-components"

import {propsList} from "./props"
import StyleProps, {PropsListProps} from "./StyleProps"
import {filterEntries} from "./utils"

interface StylePropsSearchProps {
  propGroups: PropsListProps["id"][]
}

const getFilteredPropsList = (propGroups: PropsListProps["id"][]) =>
  equals("all", propGroups[0])
    ? propsList
    : propsList.filter(({id}) => propGroups.includes(id))

export default function StylePropsSearch({
  propGroups,
}: StylePropsSearchProps): JSX.Element {
  const [input, setInput] = useState<string>("")

  const [filteredState, setFilteredState] = useState<PropsListProps[]>(
    getFilteredPropsList(propGroups),
  )

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {value} = event.target
      setInput(value)
      setFilteredState(value ? filterEntries(value, propsList) : propsList)
    },
    [],
  )

  return (
    <Flex flexDirection={"column"}>
      <TextInput
        mb={4}
        onChange={onInputChange}
        placeholder={"Props search..."}
        value={input}
      />
      {filteredState.map((entry) => (
        <StyleProps
          key={entry.id}
          id={entry.id.toUpperCase()}
          props={entry.props}
        />
      ))}
    </Flex>
  )
}
