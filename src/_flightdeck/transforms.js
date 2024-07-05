/**
 * Transforms
 * @summary This adds custom transforms to Eleventy, keeping Eleventy in control of the entire development and build processes.
 *
 * @file
 * This module exports a function that adds several transformations to an Eleventy config object.
 *
 * @module transforms
 *
 * @param {Object} config - The Eleventy config object to which the transformations will be added.
 * @param {boolean} useImageDirTransform - Whether or not to use image transforms (default: true).
 *
 * @todo drop scss for css + lightningCSS
 * @todo Add Scss configuration in README for those that still want to use Scss.
 */

const isProd = process.env.ENV === "production";
const { markdownIt } = require("./transforms/markdownIt"); // markdown-it plugins
const { transformImageDir } = require("./transforms/allimages"); // optimize all images in src/assets/images
const minifyHtml = require("./transforms/minifyHtml");
const { transformJs } = require("./transforms/esBuild"); // js bundling
const lightningCss = require("./transforms/lightning"); // css bundling
// const { transformScss } = require("./transforms/scss"); // scss compiling

module.exports = (config, options) => {
  // config.addPlugin(transformScss);
  config.setLibrary("md", markdownIt);
  config.addPlugin(transformJs);
  config.addPlugin(lightningCss);

  if (options.useImageDirTransform) {
    config.addPlugin(transformImageDir);
  }
  // production build only
  if (isProd) {
    config.addPlugin(minifyHtml);
  }
};