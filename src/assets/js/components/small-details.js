// @ts-check

/**
 * Details element that defaults to closed @small and open @medium+
 */
export default class SmallDetails extends HTMLElement {
	/** @type {HTMLDetailsElement} */
	details;

	/** @type {HTMLElement} */
	summary;

	/** @type {MediaQueryList} */
	mediaQuery;

	/**
	 * Listen for media query changes
	 */
	listen() {
		this.mediaQuery.addEventListener("change", (e) => {
			this.update(e.matches);
		});
	}

	/**
	 * Update details element based on media query
	 * @param {boolean} matches
	 */
	update(matches) {
		if (matches) {
			this.details.open = false;
			this.summary.tabIndex = 0;
		} else {
			this.details.open = true;
			this.summary.tabIndex = -1;
		}
	}

	connectedCallback() {
		this.details = /** @type {HTMLDetailsElement} */ (this.querySelector("details"));
		this.summary = /** @type {HTMLElement} */ (this.querySelector("summary"));
		this.mediaQuery = window.matchMedia("(max-width: 44.999em)");
		this.update(this.mediaQuery.matches);
		this.listen();
	}
}

window.customElements.define("small-details", SmallDetails);
