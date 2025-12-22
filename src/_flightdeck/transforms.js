// @ts-check

/**
 * Transforms
 * @summary This adds custom transforms to Eleventy, keeping Eleventy in control of the entire development and build processes.
 *
 * @param {import("@11ty/eleventy").UserConfig} config - The Eleventy config object to which the transformations will be added.
 * @param {{useImageDirTransform: boolean}} options - Custom options for configuring transforms.
 */

import imageTransform from "./transforms/allimages.js";
import esbuildTransform from "./transforms/esBuild.js";
import lightningTransform from "./transforms/lightning.js";
import markdownIt from "./transforms/markdownIt.js";
import minifyHtml from "./transforms/minifyHtml.js";

const isProd = process.env.ENV === "prod";

export default (config, options) => {
	// Set up markdown processing
	config.setLibrary("md", markdownIt());

	// Add transforms
	minifyHtml(config);
	esbuildTransform(config);
	lightningTransform(config);

	// Add image optimization if enabled
	if (options?.useImageDirTransform) {
		imageTransform(config);
	}

	// production build only
	if (isProd) {
		// No minifyHtml config.addPlugin equivalent, so leaving this commented out
		// config.addPlugin(minifyHtml);
	}
};
