/**
 * Blockquote Component – FlightDeck Autopilot
 * @param {Object} [params] - The parameters for the blockquote (all optional)
 * @param {string} [params.text] - The text to display in the blockquote
 * @param {string} [params.source] - The source of the blockquote or Author of the quote
 * @param {string} [params.classes] - Additional CSS classes to apply to the blockquote
 * @returns {string} HTML string for the blockquote
 * @example {% blockquote text="First, solve the problem. Then, write the code.", source="John Johnson", classes="text-lg italic" %}
 */
export default (params = {}) => {
	const { text = "", source = "", classes = "" } = params;
	return `<!-- Blockquote-->
  <blockquote ${classes ? `class="${classes}"` : ""}>
    ${text}
    ${source ? `<footer><cite>- ${source}</cite></footer>` : ""}
  </blockquote>
`;
};
