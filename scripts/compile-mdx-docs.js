const fs = require("fs")
const path = require("path")
const {last, map, pipe, split, tail} = require("rambda")

const reactComponents = path.join(
  __dirname,
  "../packages/libs/react-components/src",
)
const reactPrimitives = path.join(
  __dirname,
  "../packages/libs/react-primitives/src/primitives",
)

const isMdx = (file) => file.endsWith(".mdx")

const collectMdxFiles = (dir, componentPaths) => {
  if (fs.readdirSync) {
    fs.readdirSync(dir).forEach((file) => {
      const currentFilePath = path.join(dir, file)
      if (fs.existsSync(currentFilePath)) {
        if (fs.lstatSync(currentFilePath).isDirectory()) {
          collectMdxFiles(currentFilePath, componentPaths)
        } else if (isMdx(file)) {
          componentPaths.push(currentFilePath)
        }
      }
    })
  }

  return componentPaths
}

const generateConfigFromPaths = (paths) =>
  paths.map((path) => {
    const shortPath = path.substring(path.indexOf("src"))
    const segments = pipe(
      split("/"),
      (path) => tail(path),
      map((pathSegment) => {
        return pathSegment
      }),
    )(shortPath)
    return {
      hierarchy: segments,
      mdxFileName: last(segments),
      path,
    }
  })

module.exports = () => {
  const config = [
    ...generateConfigFromPaths(collectMdxFiles(reactComponents, [])),
    ...generateConfigFromPaths(collectMdxFiles(reactPrimitives, [])),
  ]
  fs.writeFileSync(
    path.resolve(
      __dirname,
      "../packages/docs/src/components/sidebar/sidebar-docs.json",
    ),
    JSON.stringify(config),
  )
}
