// @ts-check

/**
 * Markdown-it configuration
 * @module markdownIt
 * @requires markdown-it
 * @requires markdown-it-attrs
 * @requires markdown-it-bracketed-spans
 *
 * @see {@link https://github.com/markdown-it/markdown-it}
 * @see {@link https://github.com/arve0/markdown-it-attrs}
 * @see {@link https://github.com/mb21/markdown-it-bracketed-spans}
 */

import mdIt from "markdown-it";
import mdItAttrs from "markdown-it-attrs";
import mdItBracketedSpans from "markdown-it-bracketed-spans";

/**
 * @typedef {Object} MarkdownItOptions
 * @property {boolean} html - Enable HTML tags in source
 * @property {boolean} breaks - Convert '\n' in paragraphs into <br>
 * @property {boolean} linkify - Autoconvert URL-like text to links
 * @property {boolean} typographer - Enable smartquotes and other typographic replacements
 */

/**
 * Creates a configured markdown-it instance
 * @returns {import('markdown-it')} Configured markdown-it instance
 */
export default () => {
	const options = {
		html: true,
		breaks: true,
		linkify: true,
		typographer: true,
	};

	const md = mdIt(options).use(mdItAttrs).use(mdItBracketedSpans);

	return md;
};
