// @ts-check

/**
 * Eleventy Configuration
 * @module .eleventy
 * @see {@link https://www.11ty.dev/docs/config/}
 * @see {@link https://www.11ty.dev/docs/quicktips/local-plugin/}
 * @param {import("@11ty/eleventy").UserConfig} config - Eleventy's configuration object
 * @returns {import("@11ty/eleventy").EleventyConfig} - Returns Eleventy's configuration options
 */

import addFilters from "./src/_flightdeck/filters.js";
import addPlugins from "./src/_flightdeck/plugins.js";
import addShortcodes from "./src/_flightdeck/shortcodes.js";
import addTransforms from "./src/_flightdeck/transforms.js";
import addWorkflow from "./src/_flightdeck/workflow.js";

export default function (config) {
	/** @type {{useImageDirTransform: boolean}} */
	const options = {
		useImageDirTransform: false,
	};

	// Configure development workflow (server, watch, passthrough)
	addWorkflow(config, options);

	// Add transforms (esbuild, lightningcss, image optimization)
	addTransforms(config, options);

	// Add eleventy plugins
	addPlugins(config);

	// Add shortcodes for templates
	addShortcodes(config);

	// Add universal filters
	addFilters(config);

	return {
		dir: {
			input: "src",
			output: "dist",
			data: "_includes/data",
			includes: "_includes",
			layouts: "_includes/layouts",
		},
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		templateFormats: ["md", "njk", "html"],
	};
}
