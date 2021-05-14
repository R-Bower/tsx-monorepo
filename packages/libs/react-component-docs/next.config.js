const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const webpack = require("webpack")

/** @type {import('next/dist/next-server/server/config').NextConfig} */
module.exports = {
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  webpack: (config, options) => {
    // Let Babel compile outside of src/.
    const tsRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes("tsx|ts"),
    )
    tsRule.include = undefined
    tsRule.exclude = /node_modules/

    const {dev, isServer} = options

    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    if (!isServer) {
      config.node = {global: true}
      config.resolve.fallback.fs = false
    }
    // setup for docs

    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: require.resolve("buffer/"),
        process: require.resolve("./stubs/process.js"),
      }),
    )

    return config
  },
}
