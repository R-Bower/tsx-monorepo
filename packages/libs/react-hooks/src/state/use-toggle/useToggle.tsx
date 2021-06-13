import {useCallback, useState} from "react"

/**
 * A simple hook for on/off toggling.
 */
function useToggle(initialState = false): [boolean, () => void] {
  const [toggled, setToggled] = useState<boolean>(initialState)

  const toggle = useCallback(() => {
    setToggled((prevState) => !prevState)
  }, [])

  return [toggled, toggle]
}

export default useToggle
