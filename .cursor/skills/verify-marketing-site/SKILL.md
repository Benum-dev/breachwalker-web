---
name: verify-marketing-site
description: >-
  Build, typecheck, and browser-smoke the Breachwalker marketing site. Use after
  SEO/copy/layout changes, before claiming a page looks correct, or when the user
  asks to verify preview or production.
---

# Verify marketing site

## 1. Static checks

```bash
npm run check
npm run build
```

Fix type/Astro errors before visual QA.

## 2. Preview

```bash
npm run preview
# or: astro preview --background  (if supported in this Astro version)
```

Default local URL: `http://localhost:4321` (confirm from CLI output).

## 3. Browser smoke (cursor-ide-browser)

For each changed route (at least `/` plus the edited path):

1. `browser_tabs` → list
2. `browser_navigate` → URL (trailing slash)
3. `browser_lock` → lock
4. `browser_snapshot` → headings, CTAs, skip link, main landmark
5. `browser_take_screenshot` if visual/CSS changed
6. Unlock when finished

### Must confirm

- Title/description sensible in snapshot
- Primary CTA reaches `/alpha/`
- No broken internal links (trailing slashes)
- FAQ page still exposes FAQ structure when touched
- Mobile width: resize or narrow viewport if layout changed

## 4. Production (optional)

If user asks: smoke `https://breachwalker.com/` the same way. Do not mutate Cloudflare config during verify unless explicitly asked.
