import {TextProps} from "./Text"

export const textStyles: {[key: string]: Partial<TextProps>} = {
  code: {fontSize: "inherit"},
  h1: {
    fontSize: 28,
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h2: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h3: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h4: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
  },
  inlineCode: {
    bg: "bg.canvasInset",
    borderRadius: 2,
    fontSize: "inherit",
    lineHeight: 1.5,
    px: 1,
  },
  p: {
    fontSize: [14, 16],
    fontWeight: 400,
    lineHeight: ["20px", "24px"],
  },
  span: {
    fontSize: [14, 16],
    fontWeight: 400,
    lineHeight: ["20px", "24px"],
  },
}
