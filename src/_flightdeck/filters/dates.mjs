import { DateTime } from "luxon"; // bundled with 11ty

/**
 * Human readable date format for date
 * @param {Date} date
 * @returns {string} May 20, 1982
 * @example {{ page.date | postDate }}
 */
export const postDate = (date) => {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
};

/**
 * Human readable format for date with time
 * @param {Date} date
 * @returns {string} May 20, 1982, 5:30 PM EDT
 * @example {{ page.date | postDateTime }}
 */
export const postDateTime = (date) => {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_MED);
};
