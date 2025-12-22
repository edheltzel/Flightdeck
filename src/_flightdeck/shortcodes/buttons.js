/**
 * Button Component – FlightDeck Autopilot
 * @description Makes a button component
 * @param {Object} [params] - The parameters for the button (all optional)
 * @param {string} [params.type='button'] - The type of button (submit/reset/button)
 * @param {string} [params.text='Button'] - The text to display in the button
 * @param {string} [params.classes='btn'] - The classes to apply to the button (e.g., Tailwind classes)
 * @returns {string} HTML string for the button
 * @example {% button type="submit", text="Click Me", classes="btn btn-primary" %}
 */
export const button = (params = {}) => {
	const { type = "button", text = "Button", classes = "btn" } = params;
	return `<button class="${classes}" type="${type}">${text}</button>`;
};

/**
 * Button Component for Links – FlightDeck Autopilot
 * @description Makes a link look like a button
 * @param {Object} [params] - The parameters for the link button (all optional)
 * @param {string} [params.url='/'] - The link to a page or external URL
 * @param {string} [params.text='Button'] - The text to display in the link
 * @param {string} [params.classes='btn'] - The classes to apply to the link (e.g., Tailwind classes)
 * @param {string} [params.target='_self'] - The target attribute for the link (_blank/_self)
 * @returns {string} HTML string for the link button
 * @example {% link url="https://example.com", text="Visit Site", classes="btn btn-primary", target="_blank" %}
 */
export const buttonLink = (params = {}) => {
	const { url = "/", text = "Button", classes = "btn", target = "_self" } = params;
	return `<a href="${url}" class="${classes}" target="${target}">${text}</a>`;
};
