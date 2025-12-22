/**
 * Removes the file extension from a filename or path.
 *
 * @param {string} file - The file name or path
 * @returns {string} The file name without the extension
 * @usage <body class="layout--{{ layout | removeExt }}">
 * useful for creating css classes based on layouts
 */
export const stripFileExtension = (file) => {
	return file.replace(/\.[^/.]+$/, "");
};
