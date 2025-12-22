/**
 * Returns the first 200 characters as the excerpt
 * @param {string} content - The content to create an excerpt from
 * @returns {string} The excerpt with ellipsis
 * @usage {{ post.templateContent | excerpt | safe }}
 */
export default (content) => {
	// Remove HTML tags
	const text = content.replace(/<[^>]+>/g, "");

	// Get first 200 characters
	let excerpt = text.substring(0, 200);

	// If excerpt ends mid-word, cut it off at the last space
	const lastSpace = excerpt.lastIndexOf(" ");
	if (lastSpace !== -1) {
		excerpt = excerpt.substring(0, lastSpace);
	}

	return `${excerpt}...`;
};
