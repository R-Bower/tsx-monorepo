const path = require("path")

// Make all of the changes in the eslint-config package.
// This is organized to prevent the eslint dependencies from bloating the root package.json.
const config = require(path.resolve("./packages/libs/eslint-config/index"))

module.exports = config
