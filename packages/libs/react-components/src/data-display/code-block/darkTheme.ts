import {PrismTheme} from "prism-react-renderer"

const darkTheme: PrismTheme = {
  plain: {
    backgroundColor: "#1E1E1E",
    color: "#f6f8fa",
  },
  styles: [
    {
      languages: ["jsx", "tsx"],
      style: {
        color: "#0AB615",
        fontStyle: "italic",
      },
      types: ["comment", "prolog", "doctype", "cdata"],
    },
    {
      languages: ["jsx", "tsx"],
      style: {
        color: "#e3116c",
      },
      types: ["string", "attr-value"],
    },
    {
      languages: ["jsx", "tsx"],
      style: {
        color: "#393A34",
      },
      types: ["punctuation", "operator"],
    },
    {
      languages: ["jsx", "tsx"],
      style: {
        color: "#36acaa",
      },
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
    },
    {
      languages: ["jsx", "tsx"],
      style: {
        color: "#00a4db",
      },
      types: ["atrule", "keyword", "attr-name", "selector"],
    },
    {
      languages: ["jsx", "tsx"],
      style: {
        color: "#d73a49",
      },
      types: ["function", "deleted", "tag"],
    },
    {
      languages: ["jsx", "tsx"],
      style: {
        color: "#6f42c1",
      },
      types: ["function-variable"],
    },
    {
      languages: ["jsx", "tsx"],
      style: {
        color: "#D4C4A9",
      },
      types: ["tag", "selector"],
    },
    {
      languages: ["jsx", "tsx"],
      style: {
        color: "",
      },
      types: ["keyword"],
    },
  ],
}

export default darkTheme
