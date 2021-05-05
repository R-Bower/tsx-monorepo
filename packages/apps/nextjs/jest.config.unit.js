module.exports = {
  globals: {
    "babel-jest": {
      babelrcFile: "./babel.jest.config.json",
    },
  },
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "^~components(.*)$": "<rootDir>/src/components$1",
    "^~lib(.*)$": "<rootDir>/src/lib$1",
    "^~pages(.*)$": "<rootDir>/src/pages$1",
    "^~routes(.*)$": "<rootDir>/src/routes$1",
    "^~test(.*)$": "<rootDir>/src/test$1",
    "^~theme(.*)$": "<rootDir>/src/theme$1",
    "^~types(.*)$": "<rootDir>/src/types$1",
  },
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", {configFile: "./babel.jest.config.json"}],
  },
}
