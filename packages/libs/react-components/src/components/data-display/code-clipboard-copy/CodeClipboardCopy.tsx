import React from "react"

import copy from "copy-to-clipboard"

import {Button} from "../../inputs/button/Button"

export default function CodeClipboardCopy({value}) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) {
        setCopied(false)
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <Button
      aria-label={"Copy to clipboard"}
      onClick={() => {
        copy(value)
        setCopied(true)
      }}
      px={2}
    >
      {/*{copied ? (*/}
      {/*  <StyledOcticon color={"green.5"} icon={GoCheck} />*/}
      {/*) : (*/}
      {/*  <StyledOcticon color={"gray.5"} icon={GoCheck} />*/}
      {/*)}*/}
    </Button>
  )
}
