import React, {useEffect} from "react"

import {FiCheck} from "@react-icons/all-files/fi/FiCheck"
import {FiClipboard} from "@react-icons/all-files/fi/FiClipboard"
import copy from "copy-to-clipboard"

import {Button, ButtonProps, ReactIcon} from "@rb/react-components"

export const CodeClipboardCopy = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({value}, ref) => {
  const [copied, setCopied] = React.useState(false)

  // state will be toggled off after 1s
  useEffect(() => {
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
      onClick={() => {
        copy(value.toString())
        setCopied(true)
      }}
      p={2}
      variant={"icon"}
    >
      {copied ? (
        <ReactIcon color={"icon.success"} icon={FiCheck} size={18} />
      ) : (
        <ReactIcon
          color={"icon.primary"}
          icon={FiClipboard}
          size={18}
          title={"Copy code"}
        />
      )}
    </Button>
  )
})
