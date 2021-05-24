export const pagePaddingY = {
  pb: [4, 12],
  pt: [4, 12],
}

export const pagePaddingX = {
  pl: [4, 12],
  pr: [4, 12],
}

// pages can opt into the uniform padding by spreading this object
// on the wrapping div.
export const pagePadding = {
  ...pagePaddingY,
  ...pagePaddingX,
}
