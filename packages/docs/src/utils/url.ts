export const removeTrailingHash = (url: string): string => {
  const hashIndex = url.indexOf("#")
  return hashIndex === -1 ? url : url.substring(0, hashIndex)
}
