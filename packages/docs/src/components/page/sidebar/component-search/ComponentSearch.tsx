import React, {useCallback, useEffect, useState} from "react"

import {Flex, Input} from "@rb/react-primitives"

export default function ComponentSearch(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>()

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value
      setInputValue(value)
    },
    [],
  )

  return (
    <Flex flex={"1 0 auto"} flexDirection={"column"} py={16}>
      <Input
        mx={16}
        onChange={onInputChange}
        placeholder={"Search..."}
        value={inputValue}
      />
    </Flex>
  )
}
