// const { i18n } = require('./next-i18next.config')
const withImages = require("next-images");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = withImages({
  // i18n,
  output: "export",
  trailingSlash: true,
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === "string"
        ? process.env.LOCALE_SUBPATHS
        : "none",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, options) => {
    cssModules: true, config.plugins.push();
    config.node = {};
    return config;
  },
});
