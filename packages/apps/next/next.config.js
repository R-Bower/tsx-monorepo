// this allows us to use a TypeScript file for the next config.
require("@babel/register")({
  extensions: [".ts"],
  presets: ["@babel/preset-typescript"],
})
module.exports = require("./next.config.babel.ts")
