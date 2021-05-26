import {useEffect, useState} from "react"

interface UseDebounceOptions<TValue> {
  delay: number
  initialValue?: TValue
}

export function useDebounce<T>(
  value: T,
  options: UseDebounceOptions<T> = {delay: 100},
): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(options.initialValue)

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, options.delay)

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed within the delay period.
      // Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [options.delay, value], // Only re-call effect if value or delay changes
  )

  return debouncedValue
}
