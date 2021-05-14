/* eslint-disable sort-keys-fix/sort-keys-fix */
// develop and build:local scripts require the environment file at .env.development
require("dotenv").config({path: `.env.${process.env.CONFIG_STAGE}`})

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-alias-imports`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
  ],
}
