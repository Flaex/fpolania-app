# Project Instructions: Professional Branding (2026)

This document contains the foundational mandates for the "Founder-Visionary" brand. All content creation, website development, and profile updates must adhere to these standards.

## 1. Brand Identity & Archetypes
- **Persona:** The Founder-Visionary (Senior Product Strategist).
- **Jungian Archetypes:** The Ruler (Sovereign Authority) & The Magician (Technical Alchemy).
- **Fascination Advantage:** Power (Authority) & Trust (Reliability).
- **Brand Anthem:** Reliable Visionary Execution.
- **Core Value Prop:** "Business Strategy. Design Vision. Technologic craft." — Bridging 15+ years of CEO experience with deep Design and Front-end craft.

## 2. Visual & Technical Standards
- **Tech Stack:** Astro (Content-First Framework) + Tailwind CSS (Utility-First Styling).
- **Color Palette (Tailwind Config):**
  - `carbon`: `#1A1B1A` (Primary Background/Depth)
  - `dim-grey`: `#666666` (Subtle UI elements)
  - `silver`: `#C0C0C0` (Accents/Icons)
  - `alabaster`: `#E0E0E0` (Secondary Text)
  - `white`: `#FFFFFF` (Primary Text/Highlights)
- **Typography:**
  - **Headings:** `Fraunces` (Bold/Black) — Signals "Editorial Authority" and "Sovereign/Ruler" archetype.
  - **Body/Technical:** `Geist Sans` — Signals "Technical Precision" and "Magician" archetype, mirroring the logo's DNA.
- **Logotype:** The `Fredy Polania` logo is the central brand element.
- **Design Philosophy:** Integrated Visual Communication and Web Programming. Use of monochromatic high-contrast patterns and structured typography. Ensure "Tailwind-native" execution (no arbitrary values; use config-driven theme).

## 3. Communication Style & Marketing Tone
- **Tone:** Authoritative, direct, and outcome-oriented.
- **Narrative Focus (Outcome Stories > Resume Metrics):** Avoid redundant experience metrics (e.g., "15+ years CEO experience"). Instead, frame experience through actionable stories and insights (e.g., "Building and scaling Novanet Studio taught me...").
- **The Core Conflict (The Translation Gap):** Consistently highlight the disconnect between business (ROI), design (empathy), and development (scalability). Position yourself as the bridge who speaks all three languages.
- **Content Framework:** Always use PFS (Problem-Friction-Solution).
- **Perspective:** Focus on the "Messy Middle"—show the decision-making process, not just the final result. Every piece of content should ideally touch on at least two of your three pillars: Business Strategy, Design Vision, or Technologic craft.

## 4. Workflows
- **LinkedIn:** Treat as a GTM (Go-To-Market) engine. Focus on dwell time and meaningful engagement.
- **Website:** Modular Bento Grid portfolio highlighting multidisciplinary impact (Design + Dev + PO).
- **Behance:** The "Proof of Craft" repository. Use for deep-dive case studies and visual authority.
- **AI Usage:** Follow the "Created by People, Refined with AI" mandate. AI is a power tool for planning and execution orchestration, but never a replacement for human intent, strategy, or creative 'taste.'

## 5. Reusable Framework
- **Templating:** Use the `templates/` directory to replicate this branding process for new specializations.
- **Workflow:** Discovery Workbook -> Strategic Synthesis -> Execution Assets.

## 6. Brand Execution & Completed Activities (May 2026)

This section maps out the completed activities aligning with the branding directives above:

### Visual System Implementation
- **Design Tokens Codification:** Implemented the exact custom monochromatic color palette (`carbon`, `dim-grey`, `silver`, `alabaster`, `white`) and typographic fonts (`Fraunces` and `Geist Sans`) within [global.css](file:///Users/fpolania/projects/fpolania-app/src/styles/global.css).
- **Executive Monolith Home Hub:** Developed [index.astro](file:///Users/fpolania/projects/fpolania-app/src/pages/index.astro) as a responsive 12-column Bento Grid structure using native Tailwind CSS utility classes matching the theme configuration.
- **Navigation & Footer Layout:** Integrated persistent branding headers with the logo and the signature `Fredy Polania` command center aesthetics in [Navigation.astro](file:///Users/fpolania/projects/fpolania-app/src/components/Navigation.astro) and [Footer.astro](file:///Users/fpolania/projects/fpolania-app/src/components/Footer.astro).
- **Works Grid Local Image System:** Migrated the portfolio cover images database into the local `/public/images/works/` directory, updated the Works Collection schema in `src/content.config.ts` to support root-relative paths, and implemented responsive high-contrast, hover-animated background cover images on all cards across the Works Hub.
- **PWA & Offline Capability (Magician Archetype Integration):** Configured the web app manifest (`manifest.webmanifest`), registered a custom service worker (`sw.js`) implementing the Stale-While-Revalidate caching pattern for offline reliability, and built a script (`scripts/generate-pwa-assets.js`) utilizing `sharp` to automatically scale high-resolution PNG icons (`192x192`, `512x512`, `180x180` for Apple devices) from the brand vector `favicon.svg`.


### Communication & Content Strategy
- **Thought Leadership Database:** Completed migration of 26 thought leadership articles (13 English, 13 Spanish) inside [src/content/blog/](file:///Users/fpolania/projects/fpolania-app/src/content/blog/).
- **Category Clustering (Lenses):** Grouped the articles into the three brand pillars (CEO Lens/Business, Visual Lens/Design, Builder Lens/Technologic craft) to address the *Translation Gap* and build professional authority.
- **PFS Strategy Execution:** Every article incorporates the Problem-Friction-Solution copywriting framework to enhance engagement and highlight Felipe's real-world outcome stories (e.g., Novanet Studio, Banco del Libro, Maximiza) rather than basic resume metrics.

### AI Orchestration Mandate
- Followed the **"Created by People, Refined with AI"** mandate by using developer-led agentic tools for structuring layout templates and content organization while keeping final design authority and editorial voice fully human-crafted.
- **Git Commit Mandate:** Every time a request is made to generate a git commit message, it must strictly follow the Conventional Commits specification (https://www.conventionalcommits.org/en/v1.0.0/).

