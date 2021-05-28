import React from "react"

import {GoCheck} from "@react-icons/all-files/go/GoCheck"
import {IoMdClipboard} from "@react-icons/all-files/io/IoMdClipboard"
import copy from "copy-to-clipboard"

import {Button, ButtonProps} from "../../inputs/button/Button"
import {Flex} from "../../primitives/flex/Flex"

export const CodeClipboardCopy = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({value}, ref) => {
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
      ref={ref}
      aria-label={"Copy to clipboard"}
      border={"solid 1px"}
      borderColor={"border.light"}
      borderRadius={5}
      onClick={() => {
        copy(value.toString())
        setCopied(true)
      }}
      p={"6px"}
    >
      {copied ? (
        <Flex alignItems={"center"} color={"success.1"}>
          <GoCheck color={"inherit"} size={20} />
        </Flex>
      ) : (
        <Flex alignItems={"center"} color={"gray.5"}>
          <IoMdClipboard color={"inherit"} size={20} />
        </Flex>
      )}
    </Button>
  )
})
