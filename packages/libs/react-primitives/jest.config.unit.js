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
    "^~system(.*)$": "<rootDir>/src/system$1",
    "^~utils(.*)$": "<rootDir>/src/utils$1",
  },
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", {configFile: "./babel.config.jest.json"}],
  },
}
