# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flightdeck is an opinionated Eleventy starter project that keeps Eleventy in control of the entire development and build process. The key philosophy is simplicity - no Webpack, Parcel, or Gulp. All asset processing (JavaScript bundling, CSS processing, image optimization) is handled through Eleventy transforms.

**Package Manager**: This project uses Bun (`bun@1.3.0`). Commands can be adapted to npm/pnpm/yarn if needed.

## Essential Commands

### Development
```bash
bun run dev         # Clean dist/ and start dev server
bun run start       # Start dev server (port 54321)
bun run debug       # Start with Eleventy debug logging
```

### Build & Deploy
```bash
bun run build       # Production build (sets ENV=prod)
bun run preview     # Clean, build, serve on localhost:54321
bun run deploy      # Deploy to Cloudflare Pages
```

### Code Quality
```bash
bun run check       # Run biome lint + format
bun run format      # Format with biome
bun run lint        # Lint with biome
```

### Maintenance
```bash
bun run clean       # Remove dist/ and .cache/
bun run purge       # Remove dist/, .cache/, node_modules, and lock files
bun run upgrade     # Update dependencies with npm-check-updates
bun run release     # Create GitHub release
```

## Architecture

### Configuration Structure

The Eleventy config (`eleventy.config.js`) is modular and organized into separate concerns:

- **`src/_flightdeck/workflow.js`** - Dev server configuration, watch targets, passthrough copy, layout aliases
- **`src/_flightdeck/transforms.js`** - Asset processing orchestration (esbuild, LightningCSS, markdown-it, HTML minification)
- **`src/_flightdeck/plugins.js`** - Eleventy plugins (embed-everything, syntax-highlight, navigation)
- **`src/_flightdeck/filters.js`** - Universal filters (dates, excerpts, URLs, etc.)
- **`src/_flightdeck/shortcodes.js`** - Content shortcodes (images, blockquotes, buttons, etc.)

Individual transforms, filters, and shortcodes are in their respective subdirectories.

### Asset Processing

**JavaScript (ESBuild)** - `src/_flightdeck/transforms/esBuild.js`
- Processes files in `src/assets/js/`
- Bundles, minifies, generates sourcemaps
- Directories starting with `_` are ignored (e.g., `_withoutAplineJs/`)
- Uses ESM format for browser platform
- Dependency tracking enabled for hot reload

**CSS (LightningCSS)** - `src/_flightdeck/transforms/lightning.js`
- Processes CSS files in `src/assets/styles/`
- Supports CSS nesting and custom media queries (draft syntax enabled)
- Minifies and generates sourcemaps
- Directories starting with `_` are ignored

**Images** - `src/_flightdeck/transforms/allimages.js`
- Disabled by default (`useImageDirTransform: false` in eleventy.config.js)
- When enabled, optimizes all images in `src/assets/images/`
- Uses @11ty/eleventy-img plugin under the hood

**HTML Minification** - `src/_flightdeck/transforms/minifyHtml.js`
- Uses html-minifier package
- Applied to all HTML output

### Directory Structure

```
src/
├── _includes/
│   ├── components/      # Reusable UI components (Nunjucks)
│   ├── data/           # Global data files (JSON, JS)
│   ├── layouts/        # Page layouts (base.njk, page.njk, post.njk, etc.)
│   ├── partials/       # Partial templates (header, footer, nav, meta)
│   ├── macros/         # Nunjucks macros
│   └── utilities/      # Utility templates (analytics, etc.)
├── _static/            # Root-level files (robots.txt, _redirects, favicon, etc.)
├── assets/
│   ├── fonts/          # Web fonts
│   ├── images/         # Images (copied via passthrough)
│   ├── js/             # JavaScript source files
│   │   ├── app.js      # Main entry point (Alpine.js)
│   │   └── components/ # JS components/modules
│   └── styles/         # CSS source files
│       └── _autopilot/ # Autopilot CSS framework
└── collections/
    ├── blog/           # Blog posts (markdown)
    └── pages/          # Static pages (markdown)
```

Output directory: `dist/`

### Template Engine

- **Primary**: Nunjucks (`.njk`)
- **Markdown**: Processed with `markdown-it` + extensions (attrs, bracketed-spans)
- **Markdown template engine**: Nunjucks (allows Nunjucks syntax in markdown)
- **Important**: When using `markdown-it-attrs`, use `{id=myid}` instead of `{#myid}` to avoid Nunjucks comment conflicts

### JavaScript Architecture

The project uses Alpine.js for reactive components:
- Main entry: `src/assets/js/app.js`
- Alpine components registered via `Alpine.data()`
- Components in `src/assets/js/components/`
- Alternative vanilla JS implementations in `src/assets/js/_withoutAplineJs/`

### CSS Framework - Autopilot

A custom minimal CSS framework for semantic HTML located in `src/assets/styles/_autopilot/`:
- `_base/` - Root variables, media queries, elements, fonts, accessibility
- `_components/` - UI components (buttons, cards, forms, navigation, etc.)
- `_utilities/` - Utility classes (grid, flex, spacing, text, colors, etc.)
- `_vendors/` - Third-party styles (Alpine.js, syntax highlighting)

Entry point: `src/assets/styles/app.css`

### Biome Configuration

Formatting and linting via Biome (`biome.json`):
- **Formatter**: Tabs, 120 char line width, double quotes, semicolons
- **Linter**: Enabled with recommended rules
- **Files**: JS, JSX, TS, TSX, JSON, CSS
- **Ignored**: node_modules, .cache, dist, package.json, etc.

## Development Workflow

1. **Starting development**: Run `bun run dev` (cleans build artifacts first)
2. **Dev server**: Runs on port 54321, shows all network interfaces for device testing
3. **Watch targets**: `src/assets/` directory watched for changes
4. **Hot reload**: ESBuild and LightningCSS track dependencies for intelligent rebuilding

## Important Notes

- **Image optimization**: Disabled by default for build performance. Enable by setting `useImageDirTransform: true` in `eleventy.config.js`
- **Production builds**: Controlled by `ENV=prod` environment variable
- **Layout aliases**: `base`, `default`, `page`, `post` are pre-configured
- **Deployment**: Configured for Cloudflare Pages (see `.node-version` for Node compatibility)
- **Clean script**: `.scrub.sh` bash script handles cleanup operations

## Common Patterns

### Adding a new filter
Create file in `src/_flightdeck/filters/`, export function, import and register in `src/_flightdeck/filters.js`

### Adding a new shortcode
Create file in `src/_flightdeck/shortcodes/`, export function, import and register in `src/_flightdeck/shortcodes.js`

### Adding a new transform
Create file in `src/_flightdeck/transforms/`, export function that accepts config, import and call in `src/_flightdeck/transforms.js`

### Creating new pages/posts
- Pages: Add markdown files to `src/collections/pages/`
- Blog posts: Add markdown files to `src/collections/blog/`
- Use frontmatter to specify layout, title, date, etc.
