/**
 * Limits an array to a subset of items up to the provided limit.
 *
 * @param {Array} arr - The input array
 * @param {number} limit - The number of items to return
 * @returns {Array} The subset of the array up to the limit
 * @usage {{ for item in collections.all | postLimit(3) }}
 */
export const postLimit = (arr, limit) => {
	return arr.slice(0, limit);
};
