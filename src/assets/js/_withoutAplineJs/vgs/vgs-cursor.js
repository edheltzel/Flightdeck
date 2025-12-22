/**
 * flightdeck's Visual Guidance System (VGS).
 * flightdeck - VGS Cursor
 * @description Initializes a custom cursor that interacts with links.
 * @function VGSCursor
 */
export function VGSCursor() {
	/**
	 * The cursor element.
	 * @type {HTMLElement}
	 */
	const cursorElement = document.querySelector(".vgs-cursor");

	if (cursorElement) {
		/**
		 * The inner cursor element.
		 * @type {HTMLElement}
		 */
		const innerCursor = document.querySelector(".cursor-inner");

		/**
		 * The outer cursor element.
		 * @type {HTMLElement}
		 */
		const outerCursor = document.querySelector(".cursor-outer");

		/**
		 * The y-coordinate of the mouse.
		 * @type {number}
		 */
		let _mouseY;

		/**
		 * The x-coordinate of the mouse.
		 * @type {number}
		 */
		let _mouseX = 0;

		/**
		 * Whether the cursor is hovering over a clickable element.
		 * @type {boolean}
		 */
		let isHovering = false;

		const targetElements = "a, .vgs-pointer, button";
		/**
		 * Updates the position of the cursor based on the mouse position.
		 * @function updateCursor
		 * @param {MouseEvent} event - The mouse event.
		 * @returns {void}
		 */
		function updateCursor(event) {
			if (!isHovering) {
				outerCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
				innerCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
				_mouseY = event.clientY;
				_mouseX = event.clientX;
			}
		}

		/**
		 * Handles the mouseover event for clickable elements.
		 * @function handleMouseOver
		 * @param {MouseEvent} event - The mouse event.
		 * @returns {void}
		 */
		function handleMouseOver(event) {
			if (event.target.matches(targetElements)) {
				innerCursor.classList.add("cursor-hover");
				outerCursor.classList.add("cursor-hover");
				isHovering = true;
			}
		}

		/**
		 * Handles the mouseout event for clickable elements.
		 * @function handleMouseOut
		 * @param {MouseEvent} event - The mouse event.
		 * @returns {void}
		 */
		function handleMouseOut(event) {
			if (
				!event.target.matches(targetElements) &&
				(!event.relatedTarget || !event.relatedTarget.matches(targetElements))
			) {
				innerCursor.classList.remove("cursor-hover");
				outerCursor.classList.remove("cursor-hover");
				isHovering = false;
			}
		}

		window.addEventListener("mousemove", updateCursor);
		document.body.addEventListener("mouseover", handleMouseOver);
		document.body.addEventListener("mouseout", handleMouseOut);

		innerCursor.style.visibility = "visible";
		outerCursor.style.visibility = "visible";
	}
}
