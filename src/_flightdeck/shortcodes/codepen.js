/**
 * Codepen Embeds - ref: https://blog.codepen.io/documentation/embedded-pens/
 * @param {Object} params - The parameters for the Codepen embed
 * @param {string} params.penUrl - Codepen full URL
 * @param {number} [params.height=300] - Height of the embed in pixels
 * @param {string} [params.tabs='result'] - Tabs to show (e.g., 'html', 'html,result', 'css', 'css,result', 'js', 'js,result')
 * @param {string} [params.theme=''] - Theme ID ('light', 'dark', or custom theme ID for pro users)
 * @returns {string} HTML string for the Codepen embed
 * @example {% codepen penUrl="https://codepen.io/jacobberglund/pen/bwrGvx", height=900, tabs="css,result", theme="178" %}
 */
export default (params) => {
	const { penUrl, height = 300, tabs = "result", theme = "" } = params;

	if (!penUrl) {
		throw new Error("penUrl is required for the Codepen embed");
	}

	// Extract pen ID from URL
	const penId = penUrl.split("/").pop();

	// Extract username from URL
	const username = penUrl.split("/").slice(-3)[0];

	return `
    <div class="codepen-wrapper">
      <iframe
        height="${height}"
        style="width: 100%;"
        scrolling="no"
        title="Codepen Embed"
        src="https://codepen.io/${username}/embed/${penId}?default-tab=${tabs}${theme ? `&theme-id=${theme}` : ""}"
        frameborder="no"
        loading="lazy"
        allowtransparency="true"
        allowfullscreen="true">
      </iframe>
    </div>
  `;
};
