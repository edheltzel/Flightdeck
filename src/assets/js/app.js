// @ts-check

/**
 * app.js
 * @file app.js
 * @description Main JavaScript file flightdeck using Alpine.js
 * @reference https://alpinejs.dev/
 */

import Alpine from "alpinejs";
/** @type {import('./components/toggle-theme').default} */
import toggleTheme from "./components/toggle-theme";

/** @type {import('alpinejs').Alpine} */
// @ts-expect-error
window.Alpine = Alpine;
Alpine.data("theme", toggleTheme);
Alpine.start();
