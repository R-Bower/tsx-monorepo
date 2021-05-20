const chokidar = require("chokidar")
const fse = require("fs-extra")
const path = require("path")

const removeStorybookCache = () => {
  const targetPath = path.resolve(
    __dirname,
    "../node_modules/@rb/monorepo-docs/node_modules/.dev-server",
  )
  fse.removeSync(targetPath)
}

removeStorybookCache()

/*
 * Watches all .mdx files and recompiles the docs sidebar on add/remove.
 * This is for hot reloading the docs config on add/remove for a better dev experience.
 */
const watcher = chokidar.watch(
  path.resolve(
    __dirname,
    "../node_modules/@rb/monorepo-docs/node_modules/.cache",
  ),
  {
    ignoreInitial: true,
  },
)

const formatPath = (path) => path.substring(path.indexOf("packages"))

const onAdd = (path) => {
  console.debug("Doc added:", formatPath(path))
  removeStorybookCache()
}

const onChange = (path) => {
  console.debug("Doc changed:", formatPath(path))
  removeStorybookCache()
}

const onRemove = (path) => {
  console.debug("Doc removed:", formatPath(path))
  removeStorybookCache()
}

watcher.on("add", onAdd)
watcher.on("change", onChange)
watcher.on("unlink", onRemove)
