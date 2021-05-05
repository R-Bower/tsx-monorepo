const terminal = require("open-terminal")

// spawn terminal and run `dev` on sub-projects that need to compile on change
const runWorkspace = (workspace) => {
  const cmd = `yarn workspace ${workspace} dev`
  return terminal.default(`echo "Running ${cmd}" && ${cmd}`)
}

const workspaces = ["@rb/react-components", "@rb/react-primitives"]

workspaces.map(runWorkspace)
