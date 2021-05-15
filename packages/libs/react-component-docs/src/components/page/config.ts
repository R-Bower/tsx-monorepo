export const pagePaddingY = {
  pb: [16, 52],
  pt: [16, 52],
}

export const pagePaddingX = {
  pl: [12, 40],
  pr: [12, 40],
}

// pages can opt into the uniform padding by spreading this object
// on the wrapping div.
export const pagePadding = {
  ...pagePaddingY,
  ...pagePaddingX,
}
