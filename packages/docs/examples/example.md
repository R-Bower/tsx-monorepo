---
group: docs  
subgroup: examples  
id: example
---

Frontmatter blocks are enclosed within a `---` block (three dashes).

# This is an example MDX file.

Each docs component must include a frontmatter block with the following:
- `group`
  - An identifier that corresponds to `group` string in the package's `docs.config.json`.
- `subgroup`
  - This is an additional organizational category which is determined at the package level.  For component or utility libraries, subgroups are typically located within the `src` directory of the package.
  - Ex: If you were to add a `Checkbox` component in the `react-components` package, the subgroup would be the existing `inputs` subgroup in `src`.
- `id`
  - A unique identifier for this component.  This should match the name of the component in [kebab-case](https://www.theserverside.com/definition/Kebab-case).
