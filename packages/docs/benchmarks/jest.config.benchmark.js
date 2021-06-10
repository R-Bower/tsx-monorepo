// jest.config.js
// Sync object

const path = require("path")

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  globals: {
    "babel-jest": {
      babelrcFile: "./babel.config.jest.json",
    },
  },
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "@rb/react-components": path.resolve(
      __dirname,
      "../../libs/react-components/src",
    ),
  },
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/../jest.setup.js"],
  testPathIgnorePatterns: ["/dist/"],
  testRegex: "(/__benchmarks__/.*|\\.bench)\\.(ts|tsx|js)$",
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", {configFile: "./babel.config.jest.json"}],
  },
}
