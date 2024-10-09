// @ts-check

/**
 * Eleventy Configuration
 * @module .eleventy
 * @see {@link https://www.11ty.dev/docs/config/}
 * @see {@link https://www.11ty.dev/docs/quicktips/local-plugin/}
 * @param {import("@11ty/eleventy").UserConfig} config - Eleventy's configuration object
 * @returns {import("@11ty/eleventy").EleventyConfig} - Returns Eleventy's configuration options
 */

const addWorkflow = require("./src/_flightdeck/workflow");
const addTransforms = require("./src/_flightdeck/transforms");
const addShortcodes = require("./src/_flightdeck/shortcodes");
const addPlugins = require("./src/_flightdeck/plugins");

module.exports = async (config) => {

	/** @type {{useImageDirTransform: boolean}} */
	const options = {
		useImageDirTransform: false,
	};

	// Configure 11ty development server, layout aliases, watch, passthrough copy
	addWorkflow(config, options);

	// Custom plugins that integrate esbuild, scss, image optimization
	addTransforms(config, options);

	// Add eleventy plugins and configurations
	addPlugins(config);

	// Custom shortcodes for Nunjucks/Liquid template - ui components go here
	addShortcodes(config);

	// Custom universal filters for Nunjucks/Liquid templates
	const { default: addFilters } = await import("./src/_flightdeck/filters.mjs");
	addFilters(config);

	// 11ty configuration options
	return {
		dir: {
			input: "src",
			output: "dist",
			data: "_includes/data",
		},
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	};
};
