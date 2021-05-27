import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import type {NextConfig} from "next/dist/next-server/server/config"

const withMDX = require("@next/mdx")()

const nextConfig: NextConfig = {
  experimental: {
    reactRoot: false,
    turboMode: false,
  },
  future: {
    webpack5: true,
  },
  pageExtensions: ["tsx", "md", "mdx"],
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

    return config
  },
}

module.exports = withMDX(nextConfig)
