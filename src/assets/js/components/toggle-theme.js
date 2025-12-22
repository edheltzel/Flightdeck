// @ts-check

/**
 * Toggle theme module
 * @returns {Object} Theme object
 */
export default function toggleTheme() {
	return {
		darkMode: localStorage.getItem("themeMode") || "auto",

		get isDarkMode() {
			if (this.darkMode === "auto") {
				return window.matchMedia("(prefers-color-scheme: dark)").matches;
			}
			return this.darkMode === "dark";
		},

		toggleDarkMode() {
			// If it's auto, set it based on current system preference
			if (this.darkMode === "auto") {
				this.darkMode = this.isDarkMode ? "light" : "dark";
			} else {
				// Simply toggle between dark and light
				this.darkMode = this.darkMode === "dark" ? "light" : "dark";
			}
			localStorage.setItem("themeMode", this.darkMode);
		},
	};
}
