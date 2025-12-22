// @ts-check

/**
 * @file allimages.js
 * @description This module provides an image optimization transform using `@11ty/eleventy-img`.
 * @requires @11ty/eleventy-img
 * @requires path
 * @requires fast-glob
 */

import path from "node:path";
import Image from "@11ty/eleventy-img";
import glob from "fast-glob";

/**
 * Optimizes all images in the specified base directory.
 * @returns {Promise<void>}
 */
const optimizeImages = async () => {
	const baseDirectory = "./src/assets/images";
	const outputDirectory = "./dist/assets/images";
	const imageFormats = ["jpg", "jpeg", "png", "gif", "webp", "avif"];

	try {
		// Find all image files
		const imageFiles = await glob(`${baseDirectory}/**/*.{${imageFormats.join(",")}}`);

		// Process each image
		for (const imagePath of imageFiles) {
			const outputPath = path.join(outputDirectory, path.relative(baseDirectory, imagePath));

			await Image(imagePath, {
				formats: ["avif", "webp", "jpeg"],
				outputDir: path.dirname(outputPath),
				filenameFormat: (_id, src, width, format) => {
					const ext = path.extname(src);
					const name = path.basename(src, ext);
					return `${name}-${width}w.${format}`;
				},
				widths: [400, 800, 1200],
				sharpOptions: {
					animated: true,
				},
			});
		}
	} catch (error) {
		console.error("Image optimization error:", error);
	}
};

/**
 * @typedef {import('@11ty/eleventy').UserConfig} EleventyConfig
 */

/**
 * Adds the image optimization transform to the Eleventy config.
 * @param {EleventyConfig} config - The Eleventy configuration object.
 */
export default (config) => {
	// Run image optimization during build
	config.on("eleventy.after", optimizeImages);
};
