const {paramCase} = require("change-case")
const fs = require("fs")
const path = require("path")
const {reduce} = require("rambda")
const {replace} = require("rambda")
const {last, pipe, split, tail} = require("rambda")

const reactComponents = path.join(__dirname, "../../libs/react-components")

const isMdx = (file) => file.endsWith(".mdx")

const collectMdxFiles = (dir, components) => {
  if (fs.readdirSync) {
    fs.readdirSync(dir).forEach((file) => {
      const currentFilePath = path.join(dir, file)
      if (fs.existsSync(currentFilePath)) {
        if (fs.lstatSync(currentFilePath).isDirectory()) {
          collectMdxFiles(currentFilePath, components)
        } else if (isMdx(file)) {
          console.debug(currentFilePath)
          components.push(currentFilePath)
        }
      }
    })
  }

  return components
}

const generateConfigV2 = reduce(
  (acc, current) => {
    const pathPrefix = current.substring(0, current.indexOf("/src"))
    const shortPath = current.substring(current.indexOf("src"))
    const hierarchy = pipe(split("/"), (path) => tail(path))(shortPath)
    console.debug(hierarchy)
    return acc
  },
  {components: []},
)

const generateConfigFromPaths = (paths) =>
  paths.map((path) => {
    const pathPrefix = path.substring(0, path.indexOf("/src"))
    const shortPath = path.substring(path.indexOf("src"))
    const hierarchy = pipe(split("/"), (path) => tail(path))(shortPath)
    return {
      hierarchy: hierarchy,
      mdxFileName: last(hierarchy),
      name: pipe(last, replace(".mdx", ""), paramCase)(hierarchy),
      path,
      pathPrefix,
    }
  })

function main() {
  const componentFilePaths = collectMdxFiles(reactComponents, [])

  const config = generateConfigV2(componentFilePaths)

  fs.writeFileSync(
    // path.resolve(__dirname, "../src/components/sidebar/sidebar-docs.json"),
    path.resolve(__dirname, "./docs.json"),
    JSON.stringify(
      config,
      null,
      process.env.NODE_ENV === "development" ? 2 : 0,
    ),
  )
}

module.exports = main

// if called from CLI
if (require.main === module) {
  main()
}
