import frontmatter from "front-matter"
import fs from "fs"
import path from "path"
import {chain, findIndex, propEq} from "rambda"

import {SidebarDocGroup} from "../src/components/layout/sidebar/sidebarSlice"

const isMdx = (file) => file.endsWith(".mdx")

interface DocMeta {
  group: string
  subgroup: string
  id: string
}

// recursively aggregates mdx files into the hierarchy
const collectMdxFiles = (
  dir: string,
  components: SidebarDocGroup[],
  numDocs,
) => {
  if (fs.readdirSync) {
    fs.readdirSync(dir).forEach((file) => {
      const currentFilePath = path.join(dir, file)
      if (fs.existsSync(currentFilePath)) {
        if (fs.lstatSync(currentFilePath).isDirectory()) {
          collectMdxFiles(currentFilePath, components, numDocs)
        } else if (isMdx(file)) {
          const fileContents = fs.readFileSync(currentFilePath, {
            encoding: "utf-8",
          })

          // substring from the package dir onward for lookup in Webstorm
          const projectRelativeFilePath = currentFilePath.substring(
            currentFilePath.indexOf("packages"),
          )
          const fm = frontmatter(fileContents)
          const attributes = fm.attributes as DocMeta

          if (!attributes.group || !attributes.subgroup || !attributes.id) {
            console.error(
              `Expected group, subgroup, and id!  Skipping file because one or more fields were missing:`,
              projectRelativeFilePath,
            )
          } else {
            const groupId = attributes.group.toLowerCase()
            const subgroupId = attributes.subgroup.toLowerCase()
            const id = attributes.id.toLowerCase()
            let groupIndex = findIndex(propEq("id", groupId), components)
            if (groupIndex === -1) {
              components.push({
                id: groupId,
                subgroups: [],
              })
              groupIndex = components.length - 1
            }
            const group = components[groupIndex]
            let subgroupIndex = findIndex(
              propEq("id", subgroupId),
              group.subgroups,
            )
            if (subgroupIndex === -1) {
              group.subgroups.push({
                id: subgroupId,
                /* eslint-disable-next-line */
                elements: [],
              })
              subgroupIndex = group.subgroups.length - 1
            }
            const subgroup = group.subgroups[subgroupIndex]
            subgroup.elements.push({
              group: groupId,
              id,
              mdxBody: fm.body,
              mdxFileName: file,
              mdxFilePath: projectRelativeFilePath,
              subgroup: subgroupId,
              url: `/doc/${groupId}/${subgroupId}/${id}`,
            })
          }
        }
      }
    })
  }

  return components
}

function main(componentDirs: string[], writeFile: boolean) {
  const config = chain((dir) => collectMdxFiles(dir, [], 0), componentDirs)

  if (writeFile) {
    fs.writeFileSync(
      path.resolve(
        __dirname,
        "../src/components/layout/sidebar/search/components.json",
      ),
      JSON.stringify(config, null, "  "),
    )
  }

  return config
}

module.exports = main
