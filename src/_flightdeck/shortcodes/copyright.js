/**
 * Get the current year - copyright
 * @returns {string} HTML copyright symbol with current year
 * @usage {% year %}
 */
export default () => {
	return `&copy; ${new Date().getFullYear()}`;
};
