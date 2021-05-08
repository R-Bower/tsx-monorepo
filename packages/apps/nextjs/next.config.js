const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = {
  future: {
    webpack5: false,
  },
  reactStrictMode: true,
  webpack: (config, options) => {
    // Let Babel compile outside of src/.
    const tsRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes("tsx|ts"),
    )
    tsRule.include = undefined
    tsRule.exclude = /node_modules/

    const {dev} = options

    // Do not run type checking twice:
    if (dev) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    return config
  },
}
