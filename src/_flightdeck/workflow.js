// @ts-check
/**
 * Workflow Configuration
 * @summary keeps the main eleventy config file clean and is used to configure the local dev server.
 *
 * @param {import("@11ty/eleventy").UserConfig} config - The Eleventy config object to be configured.
 * @param {{useImageDirTransform: boolean}} options - Custom options for configuring workflow.
 * @see https://www.11ty.dev/docs/dev-server/
 */

export default (config, options) => {
	config.setQuietMode(true); // reduce console
	config.setServerOptions({
		port: 54321, // like Astro
		showVersion: true, // show the server version number on the command line
		showAllHosts: true, // show local network IP address for device testing
	});

	/* --- Watch Targets --- */
	config.addWatchTarget("./src/assets");

	/* --- Passthrough Copy --- */
	config.addPassthroughCopy({
		"./src/_static": "./", // root level files ie: _redirects, robots.txt, favicon.io,etc
		"./src/assets/fonts": "./assets/fonts",
	});

	if (!options.useImageDirTransform) {
		config.addPassthroughCopy("./src/assets/images"); // copy images if useImageDirTransform is false
	}

	/* --- Layout Aliases --- */
	config.addLayoutAlias("base", "layouts/base.njk");
	config.addLayoutAlias("default", "layouts/base.njk");
	config.addLayoutAlias("page", "layouts/page.njk");
	config.addLayoutAlias("post", "layouts/post.njk");
};
