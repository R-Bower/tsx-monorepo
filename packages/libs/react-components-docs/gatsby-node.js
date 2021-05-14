const webpack = require("webpack")

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    node: {
      global: true,
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: require.resolve("buffer/"),
        process: require.resolve("./stubs/process.js"),
      }),
    ],
    resolve: {
      alias: {
        chalk: require.resolve("./stubs/chalk.js"),
        process: require.resolve("./stubs/process.js"),
      },
      fallback: {
        assert: false,
        fs: false,
        os: false,
        path: require.resolve("path-browserify"),
      },
    },
  })
}

exports.onCreateBabelConfig = ({stage, actions}, pluginOptions) => {
  const ssr = stage === `build-html` || stage === `build-javascript`

  actions.setBabelPlugin({
    name: `babel-plugin-styled-components`,
    options: {...pluginOptions, ssr},
    stage,
  })
}
