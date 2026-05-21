# Google Stitch: Design-to-Code Workflow (V1)
**Project:** Founder-Visionary Digital HQ (2026)
**Interface:** Google Stitch Web App
**Current Status:** Initialization complete. "Home Hub" and "Works Hub" prototypes generated in Stitch. "Insight Hub" defined in blueprints and ready for prototyping. No code exported yet.

This document defines the process for continuing the Google Stitch web application workflow to generate high-fidelity prototypes and export them, strictly adhering to the project's mandates.

---

## Step 1: Context Synchronization (Session Resumption)
Because Stitch chat sessions may clear context, anchor the design engine to the high-level brand identity and architectural blueprints before generating new pages.

**Action:** Re-establish the design context in the Stitch Web App.
**Instructions:**
1. Open the existing **"Founder-Visionary Branding"** project in the Stitch Web App.
2. If starting a new chat thread, upload or paste the following reference files:
   - Root `GEMINI.md` (Global Brand Alignment).
   - `web_app_blueprint/GEMINI.md` (Tech Stack & Directives).
   - `web_app_blueprint/bento_grid_structure.md` (Layout Rules - **Now includes Insight Hub**).
3. **Prompt Stitch:**
   > "I am continuing the 'Founder-Visionary' prototype. I have already drafted the **Home Hub** and the **Works Hub** layouts. I am now ready to design the **Insight Hub** (Article Index) based on the updated structural blueprint. Please keep the established 'Executive Monolith' aesthetic and modular structure (1x1, 2x1, 2x2, 4x2) consistent across all hubs."

---

## Step 2: Iterative Structural Prototyping (Current Phase)
Continue generating the remaining pages (Insight Hub and individual Insight Articles) to complete the visual prototype.

**Action:** Generate the Insight Hub and dynamic article layouts via the Stitch prompt interface.
**Instructions:**
1. Prompt Stitch to build the **Insight Hub**:
   > "Generate a 12-column Bento Grid for the **Insight Hub** index. Organize the modules into the three categorical 'Lenses' (CEO, Visual, Builder) as defined in the blueprint. Use 2x1 header cards for category titles and a mix of 2x1 and 2x2 cards for individual articles."
2. Iterate on the visual preview until the three-cluster layout feels cohesive.
3. Once the Hub is ready, prompt for a single **Insight Article** template:
   > "Design a responsive template for a deep-dive **Insight Article**. The layout should balance long-form technical/strategic content with minimalist monochromatic visuals and high-contrast typography."
4. If the AI-generated layout introduces better structural ideas, manually update the local `web_app_blueprint/bento_grid_structure.md`.

---

## Step 3: Component Sync & Code Export (Technical Implementation)
Once the prototyping phase is fully complete and visually approved, export the verified design into the actual codebase.

**Action:** Export verified Tailwind/Astro components from the Stitch Web App.
**Instructions:**
1. Select the verified components or pages in the Stitch UI.
2. Click the **Export** button.
3. Select **Astro** as the framework and **Tailwind CSS** as the styling engine.
4. Download the generated files and place them in the corresponding directory (e.g., `./src/components/grid/`, `./src/pages/`).

**Verification Checklist:**
- [ ] Uses only theme-defined colors (no arbitrary hex codes).
- [ ] Responsive grid behavior matches the Bento blueprint.
- [ ] Hover states and interactions align with the "Surgical/Architectural" feel.

---

## Summary of Truth
- **Design Tokens & Tone:** Derived from `./GEMINI.md`
- **Architecture & Modules:** Derived from `./web_app_blueprint/bento_grid_structure.md`
- **Tech Stack & Logic:** Derived from `./web_app_blueprint/GEMINI.md`
