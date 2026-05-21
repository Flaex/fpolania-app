[🏠 Master Index](../../README.md) | [📈 Marketing Plan](../marketing_content_plan.md)
---

# Phase 3: Bento Grid Website Structure (V3)
**Persona:** The Founder-Visionary

**Note:** The copy for each card is defined in the [Website Content](./web_content.md) file.

## 1. Architectural Philosophy: "The Dual-Hub Command Center"
The V3 structure utilizes a **Split Architecture** tailored for Astro to maximize focus and minimize clutter:
1. **The Homepage (`/`):** A curated "Executive Summary" Bento Grid designed for immediate conversion and authority signaling.
2. **The Works Page (`/works` | `/trabajos`):** A dedicated, high-density Bento Grid showcasing the full technical and creative depth of the portfolio.
3. **Dynamic Routing (`/insight/*` | `/perspectivas/*`):** SEO-optimized sub-pages for deep-dive thought leadership.
4. **No Contact Page:** Communication and CTA are handled natively within the "Action Cluster" on the Homepage.

---

## 2. Cluster Layout (Monochromatic Aesthetic)

### **HOMEPAGE STRUCTURE: The Executive Summary**

#### **ZONE 1: The Strategic Core**
*   **Hero (4x2):** "Business Strategy. Design Vision. Technical Craft." High-contrast center-piece.
*   **Latest Insight (2x2):** Dynamic card showing the most recent thought leadership piece.
*   **Stats (1x1):** "15+ Years." Minimalist authority counter.
*   **Strategic Cards (2x1):** The "Why" (De-risking the Messy Middle) and the "Edge" (AI Orchestration).

#### **ZONE 2: Featured Works (High-Impact Proof)**
*   **Project 1 (3x2):** **Banco del Libro** (The prestige piece - BID Selected).
*   **Project 2 (2x1):** **Maximiza** (The business piece - Financial branding).
*   **Project 3 (2x1):** **Novanet Studio** (The technical piece - Digital HQ).

#### **ZONE 3: Featured Insights (Strategic Depth)**
*   **Insight 1 (2x2):** **The Value of Graphic Design** (Strategic ROI lens).
*   **Insight 2 (2x2):** **Design & Programming** (Technical translation lens).

#### **ZONE 4: Action Cluster**
*   **Audit CTA (3x1):** "Let's Build Together." Primary action button.
*   **Social Cluster (1x1 each):** Minimalist monochromatic icons (LinkedIn, Behance, GitHub, X, Instagram).

---

### **WORKS PAGE STRUCTURE: The Full Depth**

#### **CLUSTER A: Branding & Identity (10 Projects)**
*   **Header Card (2x1):** "Forging Corporate Authority."
*   **Grid (1x1 each):** Maximiza, Zuglabs, Agua Fría, Altea, Zaituna, Take on Bar, Athlos, Gamma Medical, EJ Supply, Bakery Consortium.

#### **CLUSTER B: Web & Digital (6-7 Projects)**
*   **Header Card (2x1):** "Architecting Digital Ecosystems."
*   **Grid (2x1 each):** Novanet Studio, Come 2025, Banco del Libro, CCS Multisport, Ávila Multisport, KevinRoot Medical, Novanet Evolution.

#### **CLUSTER C: Atomic Design (3 Projects)**
*   **Header Card (2x1):** "The Geometry of Meaning."
*   **Grid (1x1 each):** Novatipo, Novaicons, Barahunda.

---

## 3. Navigation Map & Sitemap

### High-Level Navigation Flow
```text
[ USER ENTRY ]
      │
      ▼
┌──────────────────────────┐      ┌──────────────────────────┐
│        HOMEPAGE          │      │        WORKS PAGE        │
│   (Executive Summary)    │─────▶│     (Full Portfolio)     │
│  - Strategic Core        │      │  - Branding Cluster (10) │
│  - Featured Works (3)    │      │  - Web Cluster (7)      │
│  - Featured Insight (2)  │      │  - Atomic Cluster (3)    │
│  - Action Cluster        │      └──────────────────────────┘
└──────────┬───────────────┘                   │
           │                                   │
           ▼                                   ▼
┌──────────────────────────┐      ┌──────────────────────────┐
│         INSIGHT          │      │         BEHANCE          │
│    (Article Sub-pages)   │      │   (Visual Deep Dives)    │
└──────────────────────────┘      └──────────────────────────┘
```

### Full Page List (URLs)
- **Home:** `/` (English) | `/es/` (Spanish)
- **Works Hub:** `/works` (English) | `/trabajos` (Spanish)
- **Insight Articles:** `/insight/[slug]` (English | 12 Pages)
- **Perspectivas:** `/perspectivas/[slug]` (Spanish | 12 Pages)

---

## 4. Visual Standards (Mandatory)
*   **Background:** Carbon Black (`#1A1B1A`).
*   **Accents:** Silver (`#C0C0C0`) for lines and Alabaster Grey (`#E0E0E0`) for secondary text.
*   **Motifs:** Subtle white question-mark patterns in card backgrounds to maintain the established branding DNA.
*   **Interactivity:** Smooth transitions between clusters. Hovering over a project card should feel like "inspecting" a high-precision component.
