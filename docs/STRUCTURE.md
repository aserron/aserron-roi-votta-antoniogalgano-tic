# File Structure & Organization

---

## Directory Layout

```
antoniogalgano-tic/
├── docs/                           # Documentation (this folder)
│   ├── PURPOSE.md                  # Site purpose & vision
│   ├── STRUCTURE.md                # This file
│   ├── CONTENT.md                  # Article guidelines & templates
│   └── DEVELOPMENT.md              # Build, dev, & contribution guide
│
├── src/                            # Source files (Eleventy input)
│   ├── _data/
│   │   └── site.js                 # Global site configuration
│   │
│   ├── _includes/
│   │   ├── layouts/
│   │   │   └── base.njk            # Root HTML template
│   │   └── partials/
│   │       ├── header.njk          # Site header & nav
│   │       └── footer.njk          # Site footer & network links
│   │
│   ├── css/
│   │   ├── input.css               # Tailwind directives
│   │   └── styles.css              # Compiled output (generated)
│   │
│   ├── static/                     # Assets copied as-is
│   │   ├── .htaccess               # Apache config (rewrites, caching, headers)
│   │   ├── .well-known/
│   │   │   └── security.txt        # Security policy
│   │   ├── robots.txt              # Search engine crawling rules
│   │   ├── manifest.json           # PWA metadata
│   │   ├── humans.txt              # Team/credits
│   │   └── favicon files           # Site icons
│   │
│   ├── articles/                   # Content hub (FUTURE - replaces Artículos)
│   │   ├── index.njk               # Article archive listing
│   │   ├── ecosistema/
│   │   │   ├── index.njk           # Category landing
│   │   │   ├── ande-financiamiento.md
│   │   │   ├── anni-innovacion.md
│   │   │   └── [other articles]
│   │   ├── marco-legal/
│   │   │   ├── sas-ventajas.md
│   │   │   ├── zona-franca.md
│   │   │   └── [other articles]
│   │   ├── financiamiento/
│   │   ├── infraestructura/
│   │   ├── talento/
│   │   └── operacion/
│   │
│   ├── articulos/                   # CURRENT
│   │   ├── index.njk               # Artículos archive
│   │   └── terms/
│   │       ├── ande.md
│   │       ├── anni.md
│   │       └── [22 artículos total]
│   │
│   ├── index.njk                   # Homepage
│   ├── 404.njk                     # 404 page
│   └── sitemap.xml.njk             # XML sitemap template
│
├── public_html/                    # Build output (generated)
│   ├── index.html
│   ├── 404.html
│   ├── css/
│   │   └── styles.css              # Compiled Tailwind
│   ├── articulos/
│   │   ├── index.html
│   │   └── [22 artículos HTML]
│   ├── articles/                   # (Future output)
│   ├── .htaccess
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
│
├── scripts/                        # Build & setup scripts
│   ├── setup-fonts.js              # Font initialization
│   └── tools/
│       └── generate-favicons.js    # Favicon generation
│
├── node_modules/                   # Dependencies (npm install)
├── .eleventy.js                    # Eleventy config
├── .editorconfig                   # Editor conventions
├── .eslintrc.json                  # JavaScript linting
├── .htmlvalidate.json              # HTML validation rules
├── .prettierrc                      # Code formatting config
├── .gitignore                      # Git ignore rules
├── tailwind.config.js              # Tailwind CSS config
├── package.json                    # Dependencies & scripts
├── package-lock.json               # Dependency lock file
└── README.md                       # Repository readme
```

---

## Content Organization: Artículos

### Current State (Artículos)
```
src/articulos/
├── index.njk                  # Lists all 22 terms
└── terms/
    ├── ande.md               # 150-1500 word articles
    ├── anni.md
    └── [20 more terms]

URL pattern: /articulos/[term-slug].html
```

### Expansión Futura
```
src/articles/
├── index.njk                  # Article archive with categories
├── ecosistema/               # Organized by topic
│   ├── index.njk
│   ├── ande-financiamiento.md    # 800-1500 word articles
│   └── anni-innovacion.md
├── marco-legal/
│   ├── sas-ventajas.md
│   └── zona-franca.md
├── financiamiento/
├── infraestructura/
├── talento/
└── operacion/

URL pattern: /articles/[category]/[article-slug].html
```

---

## Eleventy Collections

### Current
```javascript
collections.articulos  → All files in src/articulos/terms/*.md
```

### Future
```javascript
collections.articles  → All files in src/articles/**/*.md
collections.byCategory → Organized by article category
```

---

## Static Assets Structure

```
public_html/
├── css/
│   └── styles.css           # Compiled Tailwind (minified, 15-20KB)
├── .htaccess                # Apache directives
├── robots.txt               # Crawling rules + sitemap reference
├── sitemap.xml              # Generated from src/sitemap.xml.njk
├── manifest.json            # PWA manifest
└── .well-known/
    └── security.txt         # Security contact info
```

---

## Configuration Files

### .eleventy.js
- Entry point for Eleventy build
- Defines collections (articulos)
- Configures output paths
- Sets up Nunjucks filters & tags

### tailwind.config.js
- Dark theme (bg: #07080f)
- Accent colors: cyan (#00d8ff), emerald (#34d399)
- Typography: IBM Plex Sans, IBM Plex Mono
- Custom spacing, sizing, animations

### package.json
```json
{
  "name": "antoniogalgano-tic",
  "scripts": {
    "build": "npm run build:11ty && npm run build:css",
    "dev": "concurrent \"eleventy --serve\" \"tailwindcss --watch\""
  }
}
```

---

## Data Files

### src/_data/site.js
```javascript
module.exports = {
  name: 'Antonio Galgano Votta',
  baseUrl: 'https://antoniogalgano-tic.com',
  lang: 'es-UY',
  locale: 'es_UY',
  // ... network links, social profiles, theme colors
}
```

Used globally in templates via `{{ site.name }}`, `{{ site.baseUrl }}`, etc.

---

## Build Process

### Development
```bash
npm run dev
# Runs in parallel:
# - Eleventy in watch mode (port 8080)
# - Tailwind CSS in watch mode (rebuilds on file change)
```

### Production
```bash
npm run build
# Runs in sequence:
# - npm run build:11ty  → Generates HTML from src/
# - npm run build:css   → Compiles & minifies Tailwind CSS
# → Output: public_html/
```

---

## URL Structure

### Current URLs
```
/                          → Homepage
/articulos                  → Artículos archive (22 artículos)
/articulos/[term-slug]      → Individual term page
/404.html                  → 404 page
/sitemap.xml               → XML sitemap
/robots.txt                → Search engine rules
```

### Future URLs
```
/                          → Homepage (unchanged)
/articles                  → Article archive
/articles/[category]       → Category landing
/articles/[category]/[slug] → Individual article
/404.html                  → 404 page (unchanged)
```

---

## Build Output Size

| Artifact | Size | Notes |
|----------|------|-------|
| public_html/ (total) | ~250KB | 26 files fase artículos |
| index.html | 26KB | Homepage with schema |
| articulos/index.html | 12KB | Archive listing |
| CSS (minified) | 15-20KB | Tailwind compiled |
| Artículo individual | 3-5KB | Average per-page |

---

## Git Tracking

### Committed
- ✅ All source files (src/)
- ✅ Config files (.eleventy.js, tailwind.config.js, etc.)
- ✅ Scripts (scripts/)
- ✅ Documentation (docs/)
- ✅ package.json, package-lock.json

### Generated (Not Committed)
- ❌ node_modules/
- ❌ public_html/ (rebuild locally or in CI/CD)
- ❌ .css compiled output (regenerated from input.css)

---

## Deployment

**Deploy Root:** `public_html/`  
**Server:** Hostinger shared hosting  
**SSL:** Required (HTTPS)  
**Deploy Method:** FTP / Git-based CI/CD

Files served to web:
- `public_html/index.html` → `/`
- `public_html/articulos/ande.html` → `/articulos/ande`
- `public_html/articles/ecosistema/ande-financiamiento.html` → `/articles/ecosistema/ande-financiamiento`
