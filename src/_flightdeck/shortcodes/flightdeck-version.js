/**
 * Get the current package version - version
 * @returns {string} Current package version prefixed with 'v'
 * @example {% version %}
 */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packagePath = resolve(__dirname, "../../../package.json");
const packageJson = JSON.parse(readFileSync(packagePath, "utf8"));

export default () => {
	return `v${packageJson.version}`;
};
