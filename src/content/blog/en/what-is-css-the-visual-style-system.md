---

title: "WHAT IS CSS? THE VISUAL STYLE SYSTEM"
lens: "builder_lens"
language: "en"
pillar: "Technical Alchemy (The Builder Lens)"
originalLanguage: "Spanish"
---

## Definition and Function
CSS (Cascading Style Sheets) is the standard language that allows visual attributes to be given to HTML elements. The **W3C** defines it as a simple mechanism for adding style (fonts, colors, spacing) to documents. **MDN Web Docs** adds that it is the language that describes how elements should be represented on screen, paper, or voice assistants.

## 1. Anatomy of a CSS Declaration
A CSS rule consists of a **selector** and a series of **declarations** (property and value):
*Example:** `h1 { color: red; font-size: 18px; }`
*   **Selector (`h1`):** Indicates which tag it applies to.
*   **Declarations:** Go between curly braces `{}` and are separated by a semicolon `;`.

### Critical Selector Types
1.  **Element Selector:** Selects all tags of a type (e.g., `p`).
2.  **Class Selector (`.my-class`):** For elements marked with that identifier.
3.  **ID Selector (`#my-id`):** For unique elements. It is good practice to use it sparingly for specific cases.

## 2. Dependency Relationship: CSS and HTML
CSS depends directly on HTML. For the style to take effect, a previous element must exist. There are three ways to link them:
1.  **`<style>` tag:** Inside the `<head>`.
2.  **External file (`.css`):** Linked with `<link>`. It is the most scalable and professional way.
3.  **Inline styles:** Using the `style` attribute directly in the HTML tag.

Mastering CSS is mastering the **presentation of authority**. A well-structured style system ensures that the brand is consistent, fast, and visually flawless on any medium.
