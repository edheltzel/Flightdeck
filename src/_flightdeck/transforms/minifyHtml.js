// @ts-check

/**
 * Minify HTML
 * @module minifyHtml
 * @requires html-minifier-terser
 */

import htmlmin from "html-minifier-terser";

/**
 * @typedef {import('@11ty/eleventy').UserConfig} EleventyConfig
 */

/**
 * Adds HTML minification transform to Eleventy.
 * @param {EleventyConfig} config - The Eleventy configuration object.
 */
export default (config) => {
	config.addTransform("htmlMin", async (content, outputPath) => {
		if (outputPath?.endsWith(".html")) {
			const minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true,
			});

			return minified;
		}

		return content;
	});
};
