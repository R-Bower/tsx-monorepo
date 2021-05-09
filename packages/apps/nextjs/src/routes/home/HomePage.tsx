import React from "react"

import {Input} from "@rb/react-primitives"

export default function HomePage(): JSX.Element {
  return (
    <Input
      aria-label={"test"}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.debug(e)}
      onClick={(e) => {
        console.debug(e)
      }}
      value={"test"}
    />
  )
}
