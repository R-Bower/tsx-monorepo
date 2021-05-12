const fs = require("fs")
const path = require("path")

/*
 * Removes node_modules and package-lock.json for the root folder and all sub-folders of this repository.
 */
function resetNodeModules(currentDir) {
  fs.readdirSync(currentDir).forEach((file) => {
    const currentFilePath = path.join(currentDir, file)
    if (fs.lstatSync(currentFilePath).isDirectory()) {
      if (file === "node_modules") {
        fs.rmSync(currentFilePath, {recursive: true})
        console.debug("Removed: ", currentFilePath)
      } else {
        resetNodeModules(currentFilePath)
      }
    } else if (file === "package-lock.json") {
      fs.rmSync(currentFilePath)
    }
  })
}

resetNodeModules(path.resolve(__dirname, "../"))
