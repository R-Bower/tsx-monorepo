import fs from "fs"
import path from "path"
import {last, map, pipe, split, tail} from "rambda"

const cwd = process.cwd()

const reactComponents = path.join(cwd, "../libs/react-components/src")
const reactPrimitives = path.join(
  cwd,
  "../libs/react-primitives/src/primitives",
)

const isMdx = (file: string) => file.endsWith(".mdx")

const collectMdxFiles = (dir: string, componentPaths: string[]) => {
  fs.readdirSync(dir).forEach((file) => {
    const currentFilePath = path.join(dir, file)
    if (fs.lstatSync(currentFilePath).isDirectory()) {
      collectMdxFiles(currentFilePath, componentPaths)
    } else if (isMdx(file)) {
      componentPaths.push(currentFilePath)
    }
  })
  return componentPaths
}

export interface SidebarDoc {
  path: string
  hierarchy: readonly string[]
  mdxFileName: string
}

const generateConfigFromPaths = (paths: string[]): SidebarDoc[] =>
  paths.map((path: string) => {
    const shortPath: string = path.substring(path.indexOf("src"))
    const segments = pipe(
      split("/"),
      (path) => tail(path),
      map((pathSegment: string) => {
        return pathSegment
      }),
    )(shortPath)
    return {
      hierarchy: segments,
      mdxFileName: last(segments),
      path,
    }
  })

export default function buildSidebar(): SidebarDoc[] {
  return [
    ...generateConfigFromPaths(collectMdxFiles(reactComponents, [])),
    ...generateConfigFromPaths(collectMdxFiles(reactPrimitives, [])),
  ]
}
