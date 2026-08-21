# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is a fresh, unmodified Vite + React + TypeScript scaffold (project name in package.json is still `my-app`). There is no custom application code yet beyond the default template — `src/App.tsx` is the stock Vite starter page. Treat this as the starting point for a wedding invitation site; expect the architecture described below to change quickly as real features are added.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check via `tsc -b` (project references across `tsconfig.app.json` / `tsconfig.node.json`) then production-build with Vite
- `npm run lint` — run ESLint over the whole repo
- `npm run preview` — serve the production build locally

There is no test runner configured yet (no test script, no test framework installed).

Node version is pinned via `.nvmrc` (v24.7.0).

## Architecture

- Entry point: `src/main.tsx` mounts `<App />` from `src/App.tsx` into `#root` (see `index.html`) inside `React.StrictMode`.
- Single-page app, no router installed.
- Styling is plain CSS (`src/App.css`, `src/index.css`), no CSS-in-JS or Tailwind configured.
- Static assets under `src/assets/` are imported directly by components; files in `public/` (e.g. `icons.svg`, `favicon.svg`) are referenced by absolute path (e.g. `/icons.svg#documentation-icon`) since Vite serves `public/` as-is at the root.
- TypeScript is split via project references: `tsconfig.app.json` covers `src/` (bundler resolution, `noEmit`, strict unused-locals/params checks), `tsconfig.node.json` covers Vite config itself; the root `tsconfig.json` just wires the two together.
- ESLint config (`eslint.config.js`) is flat-config style: `@eslint/js` recommended + `typescript-eslint` recommended + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` (Vite-specific). Type-aware lint rules are not enabled (see README for how to opt in).
