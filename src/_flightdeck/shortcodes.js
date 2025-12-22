// @ts-check

/**
 * Shortcodes
 * @summary This adds custom shortcodes for additional functionality.
 * @see https://www.11ty.dev/docs/shortcodes/
 *
 * @param {import("@11ty/eleventy").UserConfig} config - The Eleventy config object to which the shortcodes will be added.
 */
import blockquote from "./shortcodes/blockquote.js";
import { button, buttonLink } from "./shortcodes/buttons.js";
import codepen from "./shortcodes/codepen.js";
import copyright from "./shortcodes/copyright.js";
import email from "./shortcodes/email.js";
import version from "./shortcodes/flightdeck-version.js";
import image from "./shortcodes/image.js";

export default (config) => {
	config.addShortcode("blockquote", blockquote);
	config.addShortcode("button", button);
	config.addShortcode("link", buttonLink);
	config.addShortcode("codepen", codepen);
	config.addShortcode("year", copyright);
	config.addShortcode("image", image);
	config.addShortcode("version", version);
	config.addShortcode("email", email);
};
