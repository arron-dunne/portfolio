# Repository guidance

## Commands
- Run npm commands from `code/`; the repository root is not an npm package. Use `npm ci` with its `package-lock.json`.
- Use Node 24 LTS to satisfy the locked Vite and ESLint engine requirements.
- `npm run dev` starts Vite; open `/portfolio/` on the URL it prints.
- Verify code changes with `npm run lint` and `npm run build`. Build runs `tsc -b` before Vite; `npx tsc -b` checks types alone across both app and Vite configuration projects.
- Focused lint: `npx eslint src/components/HeroSection.tsx` (substitute the changed file).
- `npm run preview` serves the production output after `npm run build`.
- No test runner or test script is configured; use lint/build plus browser verification for UI changes.

## App and assets
- `code/` is a single React client app. Entry flow: `index.html` → `src/main.tsx` → `src/App.tsx`; `App.tsx` owns the role content array and section composition. Navigation labels currently have no routing implementation.
- `design/` contains Affinity design sources and reference images; browser-served assets live in `code/public/`.
- Vite's base is `/portfolio/`. Keep asset URLs compatible with that subpath; existing component images use relative public filenames. For explicit base-aware public URLs, use `import.meta.env.BASE_URL` rather than a root-absolute `/image.png`.
- Tailwind v4 is wired through `@tailwindcss/vite` and `@import "tailwindcss"` in `src/index.css`; global heading styles also live there. Do not assume a Tailwind v3 config/PostCSS setup.
- Both TypeScript projects enable `verbatimModuleSyntax`, `erasableSyntaxOnly`, and unused-local/parameter checks: use type-only imports for types and avoid enums or parameter properties.
- `code/README.md` is Vite template prose, not repository-specific setup guidance; defer to `package.json` and tool configs.
