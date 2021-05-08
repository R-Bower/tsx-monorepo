module.exports = {
  future: {
    webpack5: false,
  },
  reactStrictMode: true,
  webpack: (config) => {
    // Let Babel compile outside of src/.
    const tsRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes("tsx|ts"),
    )
    tsRule.include = undefined
    tsRule.exclude = /node_modules/

    return config
  },
}
