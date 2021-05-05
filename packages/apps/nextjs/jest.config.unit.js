module.exports = {
  globals: {
    "babel-jest": {
      babelrcFile: "./jest.babelrc.json",
    },
  },
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testIgnorePaths: ["<rootDir>/node_modules", "<rootDir>/.next"],
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", {configFile: "./jest.babelrc.json"}],
  },
}
