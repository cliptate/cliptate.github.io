# Cliptate Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual, high-performance Astro landing page for the Mac app Cliptate and deploy it to GitHub Pages.

**Architecture:** Start from an Astro static site with Tailwind CSS and keep JavaScript minimal. Render the landing page from structured bilingual content, use CSS-driven visuals for the futuristic Mac-app feel, and add a lightweight client-side language toggle plus GitHub Pages deployment workflow.

**Tech Stack:** Astro, Tailwind CSS, TypeScript, static SVG/CSS visuals, GitHub Actions

---

### Task 1: Scaffold the Astro site

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/pages/index.astro`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/styles/global.css`
- Create: `public/favicon.svg`

- [ ] **Step 1: Create the project skeleton**

```bash
npm create astro@latest . -- --template minimal --install --git=false
```

- [ ] **Step 2: Add Tailwind integration**

```bash
npx astro add tailwind --yes
```

- [ ] **Step 3: Verify the fresh site builds**

```bash
npm run build
```

Expected: Astro build succeeds and writes static files to `dist/`.

### Task 2: Build the landing page structure and content model

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/layouts/BaseLayout.astro`
- Create: `src/data/site.ts`
- Create: `src/components/LanguageToggle.astro`
- Create: `src/components/HeroVisual.astro`

- [ ] **Step 1: Define bilingual content in one data file**

```ts
export const siteCopy = {
  zh: { ... },
  en: { ... },
} as const;
```

- [ ] **Step 2: Render a single-page information architecture**

```astro
<section id="hero">...</section>
<section id="features">...</section>
<section id="workflow">...</section>
<section id="privacy">...</section>
<section id="scenarios">...</section>
<section id="cta">...</section>
```

- [ ] **Step 3: Add a minimal language toggle**

```astro
<button data-lang-switch="zh">中文</button>
<button data-lang-switch="en">EN</button>
```

- [ ] **Step 4: Build the Mac-style app mockup**

```astro
<div class="window-chrome">...</div>
<div class="timeline-grid">...</div>
```

- [ ] **Step 5: Verify the page renders and content switches**

```bash
npm run build
```

Expected: build succeeds and generated HTML includes both language payloads.

### Task 3: Implement the visual system and performance-focused styling

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add the base dark theme and grid/radial background**

```css
body {
  background:
    radial-gradient(...),
    linear-gradient(...);
}
```

- [ ] **Step 2: Add glassmorphism card styles and CTA styles**

```css
.glass-card { ... }
.cta-primary { ... }
.cta-secondary { ... }
```

- [ ] **Step 3: Add the Bento-style layout and mockup details**

```css
.feature-grid { ... }
.hero-visual { ... }
.timeline-track { ... }
```

- [ ] **Step 4: Add reduced-motion-safe enhancement transitions**

```css
@media (prefers-reduced-motion: reduce) { ... }
```

- [ ] **Step 5: Verify styling survives production build**

```bash
npm run build
```

Expected: build succeeds and output CSS is bundled without runtime errors.

### Task 4: Wire GitHub Pages deployment and repository hygiene

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `.gitignore`
- Modify: `astro.config.mjs`
- Modify: `package.json`
- Create: `README.md`

- [ ] **Step 1: Configure Astro for GitHub Pages static export**

```js
export default defineConfig({
  site: 'https://cliptate.github.io',
});
```

- [ ] **Step 2: Add a GitHub Actions deployment workflow**

```yaml
name: Deploy
on:
  push:
    branches: [main]
```

- [ ] **Step 3: Add repository ignores and concise project docs**

```gitignore
node_modules
dist
.astro
```

- [ ] **Step 4: Verify deployment-targeted production build**

```bash
npm run build
```

Expected: build succeeds in a clean static-export configuration suitable for Pages.

### Task 5: Final verification

**Files:**
- No file changes required

- [ ] **Step 1: Install dependencies if needed**

```bash
npm install
```

- [ ] **Step 2: Run the production build**

```bash
npm run build
```

- [ ] **Step 3: Inspect the generated output**

```bash
find dist -maxdepth 2 -type f | sort
```

- [ ] **Step 4: Review git status**

```bash
git --no-pager status --short
```
