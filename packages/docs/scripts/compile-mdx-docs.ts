import frontmatter from "front-matter"
import fs from "fs"
import fse from "fs-extra"
import path from "path"
import {chain, find, findIndex, propEq} from "rambda"

import {SidebarDocGroup} from "../src/components/page-layout/sidebar/sidebarSlice"

const isMdx = (file) => file.endsWith(".mdx")

const isGroupConfigFile = (file: string) => file === "docs.config.json"

interface SidebarGroupConfig {
  group: string
  subgroupOrder: {[key: string]: number}
}

interface DocMeta {
  group: string
  subgroup: string
  id: string
}

/*
 * Recursively traverses the filesystem and aggregates mdx files into the
 * format expected by the application.
 */
const collectMdxFiles = (
  dir: string,
  components: SidebarDocGroup[],
  configs: SidebarGroupConfig[],
): SidebarDocGroup[] => {
  if (fs.readdirSync) {
    fs.readdirSync(dir).forEach((file) => {
      const currentFilePath = path.join(dir, file)
      if (fs.lstatSync(currentFilePath).isDirectory()) {
        collectMdxFiles(currentFilePath, components, configs)
      } else if (isGroupConfigFile(file)) {
        const config = fse.readJSONSync(currentFilePath)
        configs.push(config)
      } else if (isMdx(file)) {
        const fileContents = fs.readFileSync(currentFilePath, {
          encoding: "utf-8",
        })

        // substring from the package dir onward for lookup in Webstorm
        const projectRelativeFilePath = currentFilePath.substring(
          currentFilePath.indexOf("packages"),
        )
        // parse the mdx file for metadata and contents.
        const fm = frontmatter(fileContents)
        const attributes = fm.attributes as DocMeta

        if (!attributes.group || !attributes.subgroup || !attributes.id) {
          // required attribute(s) missing - inform the developer via console error.
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
            // if no group found, push the new group.
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
            // no subgroup found, so push the new subgroup.
            group.subgroups.push({
              id: subgroupId,
              /* eslint-disable-next-line */
                elements: [],
            })
            subgroupIndex = group.subgroups.length - 1
          }
          // retrieve the target subgroup.
          const subgroup = group.subgroups[subgroupIndex]
          // add the current mdx file's details to this group.
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
    })
  }

  return components
}

function main(componentDirs: string[], writeFile: boolean) {
  const groupConfigs = []
  const config = chain((dir: string) => collectMdxFiles(dir, [], groupConfigs))(
    componentDirs,
  )

  // sort the configs if order is defined for each group
  const groups = config.map((group) => {
    const groupConfig = find(propEq("group", group.id), groupConfigs)
    if (groupConfig) {
      group.subgroups.sort((a, b) => {
        const {subgroupOrder} = groupConfig
        const aOrder = subgroupOrder[a.id] || 100
        const bOrder = subgroupOrder[b.id] || 100
        return aOrder - bOrder
      })
    }
    return group
  })

  if (writeFile) {
    fs.writeFileSync(
      path.resolve(
        __dirname,
        "../src/components/page-layout/sidebar/search/components.json",
      ),
      JSON.stringify(groups, null, "  "),
    )
  }

  return config
}

module.exports = main
