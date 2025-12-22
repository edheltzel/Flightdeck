/**
 * Email obfuscation shortcode with CSS
 * @param {Object} [params={}] - The parameters for email obfuscation
 * @param {string} [params.address] - The email address to obfuscate
 * @param {string} [params.honeypot='honeypot'] - The honeypot text to insert (will be hidden with CSS)
 * @returns {string} HTML string with obfuscated email
 * @example
 * // Basic usage
 * {% email address="your-email@example.com" %}
 * // With custom honeypot
 * {% email address="your-email@example.com", honeypot="nospam" %}
 * @typedef {Object} EmailParams
 * @property {string} [address] - The email address to obfuscate
 * @property {string} [honeypot] - The honeypot text to insert
 * @type {(params?: EmailParams) => string}
 * @see src/assets/styles/_autopilot/_utilities/text.css
 */
export default (params = {}) => {
	const { address, honeypot = "honeypot" } = params;
	return `<span class="email">${address}<b>${honeypot}.com</b></span>`;
};
