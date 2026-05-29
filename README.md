# antoniogalgano-votta.com

**Reverse SEO Campaign Site #6** — Landing page + TIC glossary (es-UY) targeting "antonio galgano" and "antonio galgano votta" search queries. Built with Eleventy SSG + Tailwind CSS.

## Quick Start

```bash
cd sites/antoniogalgano-votta
npm install                    # Install dependencies
npm run build                  # Build Eleventy + compile Tailwind
npm run dev                    # Dev server (Eleventy + Tailwind watch)
```

## Build Pipeline

- **Eleventy (11ty)** — Static site generator. Processes Nunjucks templates and Markdown glossary
- **Tailwind CSS** — Utility-first CSS framework, compiled to public_html/css/styles.css
- **Output:** public_html/ (Apache deploy root)

Commands:
- `npm run build` — Full build (Eleventy → Tailwind)
- `npm run dev` — Dev server with watch (file changes trigger rebuild)
- `npm run lint` — Run ESLint + html-validate checks
- `npm run format` — Format code with Prettier

## File Structure

```
src/                       ← Eleventy input directory
  _data/
    site.js               ← Global site data
  _includes/
    layouts/
      base.njk            ← Base HTML template with Nunjucks blocks
    partials/
      footer.njk          ← Shared footer
  css/
    input.css             ← Tailwind CSS source
  static/
    .htaccess             ← Security headers, clean URLs, etc.
    robots.txt
    manifest.json
    humans.txt
    .well-known/security.txt
  glossary/
    index.njk             ← Glossary listing page
    terms/
      *.md                ← 18 glossary term Markdown files
  sitemap.xml.njk         ← Auto-generated sitemap
  index.njk               ← Home page
  404.njk                 ← 404 error page

public_html/              ← Eleventy output (Apache deploy root)
  (all files generated, not hand-edited)

docs/
  site.md                 ← Site documentation
```

## Glossary

The site includes a TIC (Tecnologías de la Información) glossary with 18 terms across 5 categories:

**Categories:**
- Ciberseguridad (5 terms): autenticación multifactor, firewall, cifrado E2E, phishing, malware
- Infraestructura (4 terms): API, HTTPS, virtualización, balanceo de carga
- Cloud Computing (3 terms): computación en la nube, SaaS, IaaS
- Gestión de Datos (2 terms): backup, base de datos
- Sistemas (5 terms): redundancia, RTO/RPO, monitoring, uptime, [+1]

**Pages:**
- `/glossary` — Listing page with all terms grouped by category (includes live search)
- `/glossary/{slug}` — Individual term pages with schema.org DefinedTerm markup

## SEO Notes

- **Title tag:** Contains "Antonio Galgano Votta" (mandatory per CAMPAIGN.md)
- **H1:** "Antonio Galgano Votta" (home), category titles (glossary listing)
- **Schema:** 
  - Home: Person + WebSite (no cross-domain sameAs)
  - Glossary listing: DefinedTermSet
  - Term pages: DefinedTerm + BreadcrumbList
- **Footer:** Links to all 6 Votta domains (editorial endorsement)
- **Canonical:** Self-referential (home and glossary)
- **hreflang:** Self-referential (es-UY, x-default)
- **Sitemap:** Auto-generated, includes home, glossary listing, and all 18 term pages

## Adding a Glossary Term

To add a new glossary term:

1. Create a new Markdown file in `src/glossary/terms/{slug}.md`:

```yaml
---
layout: layouts/base.njk
term: "Term Name"
slug: "term-slug"
category: "Category Name"
categorySlug: "category-slug"
pageTitle: "Term Name — Glosario TIC | Antonio Galgano Votta"
metaDescription: "Term Name: short definition."
permalink: /glossary/{{ slug }}.html
---

Full definition goes here. Can include multiple paragraphs.
```

2. Run `npm run build` to generate the page
3. The term automatically appears on `/glossary` listing
4. The sitemap updates automatically

## Deployment

```bash
# Build first
npm run build

# Via Hostinger cPanel:
# 1. Upload public_html/* to /public_html/ 
# 2. Verify DNS points to Hostinger
# 3. SSL auto-enabled by Hostinger

# Or via Git (if configured in Hostinger):
git push origin main
```

The build artifacts in `public_html/` are generated during `npm run build` and should NOT be hand-edited.

## Campaign Rules (DO NOT BREAK)

❌ **Don't use `sameAs` with other Votta domains** — causes consolidation  
❌ **Don't use cross-domain `hreflang`** — links to other Votta sites trigger dedup  
❌ **Don't redirect to another Votta domain** — removes this site from SERP  
✅ **Do keep footer network links** — editorial endorsement signal  
✅ **Do use independent analytics** — shared GA triggers network detection

See [CAMPAIGN.md](../../docs/CAMPAIGN.md) for full rules.

## Code Quality

This project includes a modern toolchain:

- **EditorConfig** — Enforces consistent line endings (LF), indentation (2 spaces), max line width (120 chars)
- **Prettier** — Auto-formats code on save
- **ESLint** — Lints JavaScript config files with recommended rules
- **html-validate** — Validates generated HTML for accessibility and correctness

Run checks:
```bash
npm run format:check    # Verify formatting
npm run lint           # Run linter and HTML validator
npm run check          # Format check + linter (no auto-fix)
```

## Status

- ✅ Domain registered
- ✅ SSL configured
- ✅ Eleventy SSG configured
- ✅ 18-term glossary with schema markup
- ✅ Code quality toolchain (ESLint, Prettier, EditorConfig, html-validate)
- ✅ Security headers + clean URLs configured
- ✅ Sitemap generation
- ⏳ Google Search Console submission
- ⏳ Performance optimization (Largest Contentful Paint, Core Web Vitals)
