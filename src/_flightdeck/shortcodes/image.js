/**
 * Generates an HTML picture tag with responsive attributes using the @11ty/eleventy-img library.
 * @param {Object} params - The parameters for the image
 * @param {string} params.src - The path to the image file.
 * @param {string} params.alt - The alternative text for the image.
 * @param {string} params.sizes - The responsive sizes attribute for the image.
 * @returns {Promise<string>} - The generated HTML for the image element.
 * @example {% image src="/assets/images/moon.jpg", alt="A picture of the moon", sizes="(max-width: 600px) 100vw, 50vw" %}
 */

import path from "node:path";
import { fileURLToPath } from "node:url";
import Image from "@11ty/eleventy-img";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function imageShortcode(params) {
	const { src, alt, sizes = "100vw" } = params;

	if (!src) {
		throw new Error("src is required for the image shortcode");
	}

	if (!alt) {
		throw new Error("alt is required for the image shortcode");
	}

	// Determine if src is absolute or relative
	const inputPath = src.startsWith("/") ? path.join(process.cwd(), "src", src) : path.join(process.cwd(), src);

	const options = {
		widths: [300, 600, 900, 1200],
		formats: ["avif", "webp", "jpeg"],
		outputDir: path.join(process.cwd(), "dist", "assets", "images"),
		urlPath: "/assets/images",
		sharpOptions: {
			animated: true,
			quality: 80,
			progressive: true,
		},
	};

	try {
		const metadata = await Image(inputPath, options);

		return Image.generateHTML(metadata, {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		});
	} catch (error) {
		console.error("Image processing error:", error);
		return `<img src="${src}" alt="${alt}" loading="lazy" decoding="async">`;
	}
}
