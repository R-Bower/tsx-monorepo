import React from "react"

export function usePersistentScroll(id: string): {
  onScroll: React.UIEventHandler
  ref: React.RefObject<any>
} {
  const ref = React.useRef<any>()

  const handleScroll = React.useCallback(
    // Save scroll position in session storage on every scroll change
    (event) => window.sessionStorage.setItem(id, event.target.scrollTop),
    [id],
  )

  React.useEffect(() => {
    // Restore scroll position when component mounts
    const scrollPosition = window.sessionStorage.getItem(id)
    if (scrollPosition && ref.current) {
      ref.current.scrollTop = scrollPosition
    }
  }, [id])

  // Return props to spread onto the scroll container
  return {
    onScroll: handleScroll,
    ref,
  }
}
