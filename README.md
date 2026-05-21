# Fredy Polania — Founder-Visionary Digital HQ (2026)
> **Brand Anthem:** *Reliable Visionary Execution*  
> **Core Value Proposition:** *"Business Strategy. Design Vision. Technical Craft."* — Bridging 15+ years of CEO experience with deep design and front-end craftsmanship.

This repository hosts the code and content for Fredy Polania's (@flaex_) personal digital command center. It is structured as an **"Executive Monolith" Bento Grid** system, demonstrating the high-precision intersection of strategic thinking, visual design, and software engineering.

---

## 🚀 Technology Stack

- **Framework:** [Astro v6.x](https://astro.build/) — Optimized for content-first, high-performance static and dynamic architectures.
- **Styling:** [Tailwind CSS v4.x](https://tailwindcss.com/) — Integrated via the next-generation `@tailwindcss/vite` compiler.
- **Typography:** Custom editorial headers using *Fraunces* (signaling authority/ruler archetype) and technical/precise body copy using *Geist Sans* (signaling precision/magician archetype).
- **Icons & Symbols:** Google Material Symbols for surgical visual cues.

---

## 🛠️ Project Structure

```text
/
├── public/                     # Static assets (Favicons, images)
├── src/
│   ├── assets/                 # Brand assets
│   ├── components/             # Reusable Astro UI components
│   │   ├── Navigation.astro    # Persistent monochromatic header
│   │   ├── Footer.astro        # Persistent monochromatic footer
│   │   └── Welcome.astro       # Default welcome components
│   ├── content/                # Bilingual thought leadership database
│   │   └── blog/
│   │       ├── en/             # 13 articles in English (CEO, Visual, Builder)
│   │       └── es/             # 13 articles in Spanish (CEO, Visual, Builder)
│   ├── layouts/
│   │   └── Layout.astro        # Main HTML wrapper (fonts, styles, dark theme)
│   ├── pages/
│   │   └── index.astro         # Homepage (Bento Grid layout)
│   └── styles/
│       └── global.css          # Core design system tokens (Tailwind CSS v4)
├── web_app_blueprint/          # Foundational blueprints and planning guides
│   ├── brand_foundation.md     # Visual identity rules and archetypes
│   ├── bento_grid_structure.md # Site mapping and layout configuration
│   └── STITCH_WORKFLOW.md      # Google Stitch design-to-code workflow
├── GEMINI.md                   # Brand guidelines & project mandates
├── RESEARCH_LOG.md             # Discovery and framework research log
└── package.json                # Project dependencies and run scripts
```

---

## 📈 Activities Completed So Far

### 1. Brand Strategy & Archetype Synthesis
- Synthesized Felipe's multi-disciplinary background into the **Founder-Visionary** brand positioning.
- Aligned branding to **Hogshead's Fascination Advantage** (Power & Trust, forming "The Gravitas") and **Jungian Archetypes** (The Ruler & The Magician).
- Codified the core conflict (the "Translation Gap" between business ROI, design empathy, and technical execution) as the primary value proposition.
- Documented discovery process in [RESEARCH_LOG.md](file:///Users/fpolania/projects/fpolania-app/RESEARCH_LOG.md).

### 2. Infrastructure & Design System Setup
- Initialized the Astro 6 workspace and integrated Tailwind CSS v4 using Vite tooling.
- Configured custom theme tokens for the monochromatic aesthetic in [global.css](file:///Users/fpolania/projects/fpolania-app/src/styles/global.css):
  - **Colors:** Carbon Black (`#1A1B1A`), Dim Grey (`#666666`), Silver (`#C0C0C0`), Alabaster (`#E0E0E0`), White (`#FFFFFF`).
  - **Fonts:** *Fraunces* (Serif headings) and *Geist Sans* (Sans-serif body/technical code).
- Configured the main layout wrapper in [Layout.astro](file:///Users/fpolania/projects/fpolania-app/src/layouts/Layout.astro) to import assets, fonts, and global bento styles.

### 3. Layout Engineering & Component Development
- Created responsive modular components:
  - [Navigation.astro](file:///Users/fpolania/projects/fpolania-app/src/components/Navigation.astro): Monochromatic header with sticky blur and logo.
  - [Footer.astro](file:///Users/fpolania/projects/fpolania-app/src/components/Footer.astro): Simplified authority footer.
- Engineered the homepage [index.astro](file:///Users/fpolania/projects/fpolania-app/src/pages/index.astro) as a responsive 12-column Bento Grid featuring:
  - **Strategic Core:** Hero header cards, latest article teaser, and stat counter.
  - **Featured Works:** Image grids for premier projects like the *Bienal Iberoamericana de Diseño* (BID) selected *Banco del Libro*, *Maximiza*, and *Novanet Studio*.
  - **Action Cluster:** Elegant email audit call-to-action alongside monochromatic social connection links.

### 4. Bilingual Content Migration
- Structured and uploaded 26 articles across two languages to the Astro content collections directories:
  - **English:** [src/content/blog/en/](file:///Users/fpolania/projects/fpolania-app/src/content/blog/en/) (13 articles)
  - **Spanish:** [src/content/blog/es/](file:///Users/fpolania/projects/fpolania-app/src/content/blog/es/) (13 articles)
- Grouped articles into three functional lenses matching the brand pillars:
  - *The CEO Lens* (Business/ROI Strategy)
  - *The Visual Lens* (Design/Typography/Identity)
  - *The Builder Lens* (Web/HTML/CSS/Execution)

### 5. Architectural Blueprints & Workflows
- Drafted [brand_foundation.md](file:///Users/fpolania/projects/fpolania-app/web_app_blueprint/brand_foundation.md) to define visual colors, fonts, and logos.
- Documented [bento_grid_structure.md](file:///Users/fpolania/projects/fpolania-app/web_app_blueprint/bento_grid_structure.md) listing the exact layout grids for the homepage, portfolio pages, sitemaps, and categorical lenses.
- Authored [STITCH_WORKFLOW.md](file:///Users/fpolania/projects/fpolania-app/web_app_blueprint/STITCH_WORKFLOW.md) outlining the design-to-code export workflow using the Google Stitch web tool.

---

## 🧞 Dev commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local development server at `localhost:4321` |
| `npm run build` | Compiles site static production build to `./dist/` |
| `npm run preview` | Runs local server to preview production build |
| `npm run astro ...` | Invokes the Astro CLI (e.g. `astro check`, `astro add`) |

---

## 🤖 AI Mandate

This project follows the **"Created by People, Refined with AI"** workflow. AI is used as a power tool to plan, orchestrate execution speed, and verify layout integrity. The visual layout, typography structure, copy tone, and strategic positioning are directed entirely by human creative intent.
