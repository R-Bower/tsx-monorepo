const fs = require("fs")
const path = require("path")
const {toPairs} = require("rambda")
const {chain, init, last, pipe, reduce, split, tail} = require("rambda")

const isMdx = (file) => file.endsWith(".mdx")

const collectMdxFiles = (dir, components) => {
  if (fs.readdirSync) {
    fs.readdirSync(dir).forEach((file) => {
      const currentFilePath = path.join(dir, file)
      if (fs.existsSync(currentFilePath)) {
        if (fs.lstatSync(currentFilePath).isDirectory()) {
          collectMdxFiles(currentFilePath, components)
        } else if (isMdx(file)) {
          components.push(currentFilePath)
        }
      }
    })
  }

  return components
}

/**
 * Add items to an object at a specific path.
 * @param obj {Object}          The object
 * @param pathSegments {[]}  The path to assign the value to
 * @param val {{}}               The value to assign
 */
const deepInsert = (obj, pathSegments, val) => {
  // Cache the path length and current spot in the object
  const length = pathSegments.length
  let current = obj

  // Loop through the path
  pathSegments.forEach((key, index) => {
    // If this is the last item in the loop, assign the value.
    if (index === length - 1) {
      current[key] = val
    } else {
      // Otherwise, update the current place in the object.
      // If the key doesn't exist, create it
      if (!current[key]) {
        current[key] = {}
      }

      // Update the current place in the objet
      current = current[key]
    }
  })

  return obj
}

const generateConfig = reduce((acc, current) => {
  const shortPath = current.substring(current.indexOf("src"))
  const hierarchy = pipe(split("/"), (path) => tail(path))(shortPath)
  const mdxFileName = last(hierarchy)
  const pathSegments = init(hierarchy)
  return deepInsert(acc, pathSegments, {
    mdxFileName,
    url: `/components/${pathSegments.join("/")}`,
  })
}, {})

/**
 * maps the config object into an array matching the SidebarDocs interface.
 */
const consolidateConfig = (obj) => {
  if (obj.mdxFileName) {
    return obj
  }
  return toPairs(obj).map(([key, value]) => {
    if (value.mdxFileName) {
      return {...value, id: key}
    }
    return {components: consolidateConfig(value), id: key}
  })
}

function main(componentDirs, writeFile) {
  const componentFilePaths = chain(
    (dir) => collectMdxFiles(dir, []),
    componentDirs,
  )

  const config = consolidateConfig(generateConfig(componentFilePaths))

  if (writeFile) {
    fs.writeFileSync(
      path.resolve(
        __dirname,
        "../src/components/layout/sidebar/search/components.json",
      ),
      JSON.stringify(config, null, "  "),
    )
  }

  return componentFilePaths
}

module.exports = main

// if called from CLI
if (require.main === module) {
  main()
}
