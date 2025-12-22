// @ts-check

/**
 * Universal filters
 * @summary This adds universal filters to the build process.
 * @see https://www.11ty.dev/docs/filters/
 *
 * @param {import("@11ty/eleventy").UserConfig} config - The Eleventy config object to which the filters will be added.
 */

import baseUrl from "./filters/baseUrl.js";
import * as date from "./filters/dates.js";
import excerpt from "./filters/excerpt.js";
import { postLimit } from "./filters/postLimit.js";
import { stripFileExtension } from "./filters/stripFileExtension.js";

export default (config) => {
	config.addFilter("excerpt", excerpt);
	config.addFilter("postLimit", postLimit);
	config.addFilter("removeExt", stripFileExtension);
	config.addFilter("baseUrl", baseUrl);
	config.addFilter("postDate", date.postDate);
	config.addFilter("postDateTime", date.postDateTime);
};
