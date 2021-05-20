export const pagePaddingY = {
  pb: [16, 48],
  pt: [16, 48],
}

export const pagePaddingX = {
  pl: [16, 48],
  pr: [16, 48],
}

// pages can opt into the uniform padding by spreading this object
// on the wrapping div.
export const pagePadding = {
  ...pagePaddingY,
  ...pagePaddingX,
}
