const chokidar = require("chokidar")
const path = require("path")

const compileDocs = require("./compile-mdx-docs")

const reactComponents = path.join(__dirname, "../../libs/react-components")

compileDocs([reactComponents], true)

/*
 * Watches all .mdx files and recompiles the docs sidebar on add/remove.
 * This is for hot reloading the docs config on add/remove for a better dev experience.
 */
const watcher = chokidar.watch(path.resolve(__dirname, "../libs"), {
  ignoreInitial: true,
  ignored: [
    "node_modules**/*",
    "dist/**/*",
    "*.js",
    "*.jsx",
    "*.ts",
    "*.tsx",
    "*.json",
    "*.map",
  ],
})

const formatPath = (path) => path.substring(path.indexOf("packages"))

const onRemove = (path) => {
  console.debug("Doc removed:", formatPath(path))
  compileDocs([reactComponents], true)
}

const onAdd = (path) => {
  console.debug("Doc added:", formatPath(path))
  compileDocs([reactComponents], true)
}

watcher.on("add", onAdd)
watcher.on("unlink", onRemove)
