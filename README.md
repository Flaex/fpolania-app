# Fredy Polania — Founder-Visionary Digital HQ (2026)
> **Brand Anthem:** *Reliable Visionary Execution*  
> **Core Value Proposition:** *"Business Strategy. Design Vision. Technologic craft."* — Bridging 15+ years of CEO experience with deep design and front-end craftsmanship.

This repository is the **Digital Product HQ** hosting the code, styling, and production content collections for Fredy Polania's personal digital command center. It is structured as an **"Executive Monolith" Bento Grid** system, demonstrating the high-precision intersection of strategic thinking, visual design, and software engineering.

> [!NOTE]
> This repository acts as the active implementation source of truth. For platform-neutral brand strategy, marketing planning, LinkedIn publishing batches, and Behance case study drafts, refer to the [perfil-profesional](file:///Users/fpolania/projects/perfil-profesional) repository.


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
│   ├── config/                 # Master Layout Engine Configs
│   │   ├── bento.json          # Grid and sequence layout control file
│   │   ├── bento.schema.json   # JSON validation schema for bento.json
│   │   └── BENTO.md            # Rich Markdown layout and dimensions guide
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

#### English Article Directory
| # | Title (English) | Slug | Language | Lens |
| :- | :--- | :--- | :--- | :--- |
| 1 | **Everything is Design: The Philosophy of Utility** | `everything-is-design-the-philosophy-of-utility` | English | `ceo_lens` |
| 2 | **Graphic Design and Branding: The Authority System** | `graphic-design-and-branding-the-authority-system` | English | `ceo_lens` |
| 3 | **The Logo and the Company: The Investment in Trust** | `the-logo-and-the-company-the-investment-in-trust` | English | `ceo_lens` |
| 4 | **The Value of Graphic Design: A Strategic Perspective** | `the-value-of-graphic-design-a-strategic-perspective` | English | `ceo_lens` |
| 5 | **Illustrator Basics: Precision Tools** | `illustrator-basics-precision-tools` | English | `visual_lens` |
| 6 | **The Logo Variants: Strategic Adaptability** | `the-logo-variants-strategic-adaptability` | English | `visual_lens` |
| 7 | **Typographic Classification: The Geometry of Tone** | `typographic-classification-the-geometry-of-tone` | English | `visual_lens` |
| 8 | **Visual Communication or Graphic Design** | `visual-communication-or-graphic-design` | English | `visual_lens` |
| 9 | **What is Typography: The DNA of Information** | `what-is-typography-the-dna-of-information` | English | `visual_lens` |
| 10 | **Graphic Design and Web Programming: The Strategic Translation** | `graphic-design-and-web-programming-the-strategic-translation` | English | `builder_lens` |
| 11 | **What is CSS: The Visual Style System** | `what-is-css-the-visual-style-system` | English | `builder_lens` |
| 12 | **What is HTML: The Structure of Information** | `what-is-html-the-structure-of-information` | English | `builder_lens` |
| 13 | **What is the Utility of Learning HTML** | `what-is-the-utility-of-learning-html` | English | `builder_lens` |

#### Spanish Article Directory
| # | Title (Spanish) | Slug | Language | Lens |
| :- | :--- | :--- | :--- | :--- |
| 1 | **Todo es diseño: La filosofía de la utilidad** | `todo-es-diseno-la-filosofia-de-la-utilidad` | Spanish | `ceo_lens` |
| 2 | **Diseño Gráfico y Branding: El Sistema de Autoridad** | `diseno-grafico-y-branding-el-sistema-de-autoridad` | Spanish | `ceo_lens` |
| 3 | **El logotipo y la empresa: La inversión en confianza** | `el-logotipo-y-la-empresa-la-inversion-en-confianza` | Spanish | `ceo_lens` |
| 4 | **El valor del diseño gráfico** | `el-valor-del-diseno-grafico` | Spanish | `ceo_lens` |
| 5 | **Illustrator Básico: Herramientas de Precisión** | `illustrator-basico-herramientas-de-precision` | Spanish | `visual_lens` |
| 6 | **Las variantes del logotipo: Adaptabilidad Estratégica** | `las-variantes-del-logotipo-adaptabilidad-estrategica` | Spanish | `visual_lens` |
| 7 | **Clasificación Tipográfica: La Geometría del Tono** | `clasificacion-tipografica-la-geometria-del-tono` | Spanish | `visual_lens` |
| 8 | **Comunicación Visual o Diseño Gráfico** | `comunicacion-visual-o-diseno-grafico` | Spanish | `visual_lens` |
| 9 | **¿Qué es la tipografía?: El ADN de la civilización** | `que-es-la-tipografia-el-adn-de-la-civilizacion` | Spanish | `visual_lens` |
| 10 | **Diseño Gráfico y Programación Web: La Traducción Estratégica** | `diseno-grafico-y-programacion-web-la-traduccion-estrategica` | Spanish | `builder_lens` |
| 11 | **¿Qué es CSS?: El sistema de estilo visual** | `que-es-css-el-sistema-de-estilo-visual` | Spanish | `builder_lens` |
| 12 | **¿Qué es HTML?: La estructura de la información** | `que-es-html-la-estructura-de-la-informacion` | Spanish | `builder_lens` |
| 13 | **¿Cuál es la utilidad de aprender HTML?** | `cual-es-la-utilidad-de-aprender-html` | Spanish | `builder_lens` |

### 5. Architectural Blueprints & Workflows
- Drafted [brand_foundation.md](file:///home/flaex/projects/fpolania-app/web_app_blueprint/brand_foundation.md) to define visual colors, fonts, and logos.
- Documented [bento_grid_structure.md](file:///home/flaex/projects/fpolania-app/web_app_blueprint/bento_grid_structure.md) listing the exact layout grids for the homepage, portfolio pages, sitemaps, and categorical lenses.
- Authored [STITCH_WORKFLOW.md](file:///home/flaex/projects/fpolania-app/web_app_blueprint/STITCH_WORKFLOW.md) outlining the design-to-code export workflow using the Google Stitch web tool.

### 6. Master Bento Layout Control System (Strategy A)
- **Decoupled Configuration (`bento.json`):** Created a master layout control file that isolates bento positioning rules from page rendering logic.
- **JSON Schema-backed Verification (`bento.schema.json`):** Implemented strict schema validation providing VS Code autocompletion and hover descriptions for all layout dimensions (e.g., `1x1`, `2x2`, `2x1`, `4x2`).
- **Comprehensive Documentation ([BENTO.md](file:///home/flaex/projects/fpolania-app/src/config/BENTO.md)):** Detailed the responsive scaling schema and 12-column grid tracks with ASCII illustrations.
- **Dynamic Layout Refactoring:** Fully refactored `[page].astro` and `index.astro` to dynamically resolve styles using the centralized config schema, completely removing redundant branch code.

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
