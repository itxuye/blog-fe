require("dotenv").config();

const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = withTypescript(
  withSass({
    webpack(config, options) {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, `${process.env.NODE_ENV}.env`),
          systemvars: true
        })
      ];

      return config;
    },
    cssModules: true,
    sassLoaderOptions: {}
  })
);
