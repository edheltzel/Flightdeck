import { DateTime } from "luxon"; //bundled with 11ty

/**
 * Format a date using Luxon's DateTime
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export const postDate = (date) => {
	return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);
};

/**
 * Format a date for use in HTML datetime attributes
 * @param {Date} date - The date to format
 * @returns {string} ISO date string
 */
export const postDateTime = (date) => {
	return DateTime.fromJSDate(date).toFormat("yyyy-LL-dd");
};
