// @ts-check

/**
 * Universal filters
 * @summary This adds universal filters to the build process.
 * @see https://www.11ty.dev/docs/filters/
 *
 * @param {import("@11ty/eleventy").UserConfig} config - The Eleventy config object to which the filters will be added.
 */

import baseUrl from "./filters/baseUrl.mjs";
import { postLimit } from "./filters/postLimit.js";
import { stripFileExtension } from "./filters/stripFileExtension.js";
import { postDate, postDateTime } from "./filters/dates.js";
import excerpt from "./filters/excerpt.js";

export default (config) => {
  config.addFilter("excerpt", excerpt);
  config.addFilter("postLimit", postLimit);
  config.addFilter("removeExt", stripFileExtension);
  config.addFilter("baseUrl", baseUrl);
  config.addFilter("postDate", postDate);
  config.addFilter("postDateTime", postDateTime);
};
