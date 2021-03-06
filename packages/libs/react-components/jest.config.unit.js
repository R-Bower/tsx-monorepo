// jest.config.js
// Sync object
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
    "^~components(.*)$": "<rootDir>/src/components$1",
    "^~primitives(.*)$": "<rootDir>/src/primitives$1",
    "^~test(.*)$": "<rootDir>/src/test$1",
  },
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["/dist/"],
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", {configFile: "./babel.config.jest.json"}],
  },
}
