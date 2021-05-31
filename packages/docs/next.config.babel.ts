import BundleAnalyzer from "@next/bundle-analyzer"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import withPlugins from "next-compose-plugins"
import type {NextConfig} from "next/dist/next-server/server/config"

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

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

    // use preact on CSR to shave 30kb off of the bundle
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
      })
    }

    return config
  },
}

module.exports = withPlugins([withMDX, withBundleAnalyzer], nextConfig)
