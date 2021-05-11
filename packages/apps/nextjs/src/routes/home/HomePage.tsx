import React from "react"

import {Box, Input} from "@rb/react-primitives"

export default function HomePage(): JSX.Element {
  return (
    <Box>
      <Input
        aria-label={"test"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.debug(e)}
        onClick={(e) => {
          console.debug((e.target as HTMLInputElement).value)
        }}
        value={"test"}
      />
    </Box>
  )
}
