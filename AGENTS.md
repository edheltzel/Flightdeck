# Agent Guidelines for Flightdeck Eleventy Project

## Build/Lint/Test Commands
- **Development**: `bun run dev` (cleans and starts dev server)
- **Build**: `bun run build` (production build with ENV=prod)
- **Lint**: `bun run lint` (Biome linter)
- **Format**: `bun run format` (Biome formatter)
- **Check**: `bun run check` (lint + format)
- **No test framework configured** - run manual verification after changes

## Code Style Guidelines
- **Formatting**: Tabs, 120 char line width, double quotes, semicolons always (Biome)
- **Files**: UTF-8, LF endings, final newline, trim trailing whitespace (.editorconfig)
- **JavaScript**: ES modules, JSDoc comments, @ts-check for TypeScript checking
- **Imports**: ES module imports at top of file
- **Naming**: camelCase for functions/variables/objects, kebab-case for files
- **Error Handling**: Use try/catch blocks, throw descriptive errors
- **Types**: Use JSDoc type annotations, prefer explicit typing
- **Comments**: JSDoc for functions, inline comments for complex logic only
- **Structure**: Modular exports, single responsibility functions
- **Security**: Never commit secrets/keys, validate user inputs