// @ts-check

/**
 * Eleventy plugins that modify content
 * @summary This adds eleventy plugins to the build process.
 * @see https://www.11ty.dev/docs/plugins/
 *
 * @param {import("@11ty/eleventy").UserConfig} config - The Eleventy config object to which the plugins will be added.
 */

import navigation from "@11ty/eleventy-navigation";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import embedEverything from "eleventy-plugin-embed-everything";

export default (config) => {
	config.addPlugin(embedEverything);
	config.addPlugin(syntaxHighlight);
	config.addPlugin(navigation);
};
