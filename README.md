# antoniogalgano-tic.com

**Reverse SEO Campaign Site #6** — Landing page + hub de artículos TIC (es-UY) targeting "antonio galgano" and "antonio galgano votta" search queries. Built with Eleventy SSG + Tailwind CSS.

## Quick Start

```bash
cd sites/antoniogalgano-tic
npm install                    # Install dependencies
npm run build                  # Build Eleventy + compile Tailwind
npm run dev                    # Dev server (Eleventy + Tailwind watch)
```

## Build Pipeline

- **Eleventy (11ty)** — Static site generator. Processes Nunjucks templates and Markdown articles
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
  articulos/
    index.njk             ← Artículos listing page
    terms/
      *.md                ← 22 article Markdown files
  sitemap.xml.njk         ← Auto-generated sitemap
  index.njk               ← Home page
  404.njk                 ← 404 error page

public_html/              ← Eleventy output (Apache deploy root)
  (all files generated, not hand-edited)

docs/
  site.md                 ← Site documentation
```

## Artículos

The site includes 22 articles about the TIC startup ecosystem in Uruguay, across 5 categories:

**Categories:**
- Ecosistema: ANDE, ANNI, Acelerador, Incubadora
- Financiamiento: Capital Semilla, Ángel Inversor, Venture Capital, Crowdfunding, Bootstrapping
- Marco Legal: SAS, Zona Franca
- Infraestructura TIC: Datacenter Uruguay, Fibra Óptica, Competitividad Digital
- Operación: Soft Landing, MVP, Go-to-Market, Pitch, Mercosur, Pool Tecnológico, UTEC, Estabilidad Política

**Pages:**
- `/articulos` — Listing page with all articles grouped by category (includes live search)
- `/articulos/{slug}` — Individual article pages with schema.org markup

## SEO Notes

- **Title tag:** Contains "Antonio Galgano Votta" (mandatory per CAMPAIGN.md)
- **H1:** "Antonio Galgano Votta" (home), category titles (articles listing)
- **Schema:**
  - Home: Person + WebSite (no cross-domain sameAs)
  - Articles listing: ItemList
  - Article pages: Article + BreadcrumbList
- **Footer:** Links to all 6 Votta domains (editorial endorsement)
- **Canonical:** Self-referential (home and articulos)
- **hreflang:** Self-referential (es-UY, x-default)
- **Sitemap:** Auto-generated, includes home, articulos listing, and all 22 article pages

## Agregar un Artículo

To add a new article:

1. Create a new Markdown file in `src/articulos/terms/{slug}.md`:

```yaml
---
layout: layouts/base.njk
term: "Nombre del Término"
slug: "term-slug"
category: "Categoría"
categorySlug: "categoria-slug"
pageTitle: "Término — Artículos TIC Uruguay | Antonio Galgano Votta"
metaDescription: "Descripción breve del artículo."
permalink: /articulos/{{ slug }}.html
---

Contenido del artículo aquí. Puede incluir múltiples párrafos.
```

2. Run `npm run build` to generate the page
3. The article automatically appears on `/articulos` listing
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
- ✅ 22-article hub with schema markup
- ✅ Code quality toolchain (ESLint, Prettier, EditorConfig, html-validate)
- ✅ Security headers + clean URLs configured
- ✅ Sitemap generation
- ⏳ Google Search Console submission
- ⏳ Performance optimization (Largest Contentful Paint, Core Web Vitals)
