// @ts-check

/**
 * Adds a CSS hook for when the page has scrolled
 */
export default class ScrollSentinel extends HTMLElement {
	/** @type {HTMLElement} */
	target;

	/**
	 * Observe scroll position and add/remove 'scrolled' class
	 */
	hasScrolled() {
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.intersectionRatio <= 0) {
					this.target.classList.add("scrolled");
				} else {
					this.target.classList.remove("scrolled");
				}
			}
		});
		observer.observe(this);
	}

	connectedCallback() {
		this.target = document.documentElement;
		this.setAttribute("aria-hidden", "true");
		this.hasScrolled();
	}
}

window.customElements.define("scroll-sentinel", ScrollSentinel);
