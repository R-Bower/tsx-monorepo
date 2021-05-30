import React, {useCallback, useState} from "react"

import {Flex, TextInput} from "@rb/react-components"

import {propsList} from "./props"
import StyleProps, {PropsListProps} from "./StyleProps"
import {filterEntries} from "./utils"

export default function StylePropsSearch(): JSX.Element {
  const [input, setInput] = useState<string>("")
  const [filteredState, setFilteredState] =
    useState<PropsListProps[]>(propsList)

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
