# Bento Grid Layout Engine & Token Architecture

This guide explains the 12-column grid layout control system used across the portfolio. The system is driven entirely by data tokens defined in `src/config/bento.json` and validated by `src/config/bento.schema.json`.

---

## 1. Grid Specifications & Responsive Scaling

The web application utilizes a responsive 12-column CSS Grid system. The screen dimensions scale automatically based on the target viewport:

*   **Mobile / Small viewports:** 4-column layout track (`grid-cols-4`).
*   **Tablet / Desktop viewports:** 12-column layout track (`grid-cols-12`).

To maintain consistent proportions and eliminate inline style drift, we map **Bento Grid Dimensions** directly to responsive Tailwind classes inside the central configuration.

---

## 2. Standard Bento Grid Card Proportions

A standard bento unit corresponds to column spanning segments of the 12-column layout:

| Token Name | Column Span | Target Aspect / Height | Description |
| :--- | :--- | :--- | :--- |
| **`1x1`** | `col-span-2 md:col-span-3` | `aspect-square` | Standard square card (4 fit in a row on desktop) |
| **`2x1`** | `col-span-4 md:col-span-6` | `min-h-[150px]` | Double-wide, single-height compact card |
| **`2x2`** | `col-span-4 md:col-span-6` | `min-h-[300px]` | Double-wide, double-height large card |
| **`4x2`** | `col-span-4 md:col-span-12` | `min-h-[200px]` | Full-row width, double-height container |

### Proportions Schema

```
  +-------+   +---------------+   +---------------+
  |  1x1  |   |      2x1      |   |               |
  |       |   +---------------+   |      2x2      |
  +-------+                       |               |
                                  +---------------+
```

### Standard 12-Column Track Segmentation Layout

```
  +---+---+---+---+---+---+---+---+---+---+---+---+  (12 Columns total)
  |      1x1      |      1x1      |      2x1      |
  |  (3 columns)  |  (3 columns)  |  (6 columns)  |
  +---------------+---------------+---------------+
  |              2x2              |      2x1      |
  |          (6 columns)          |  (6 columns)  |
  +-------------------------------+---------------+
```

---

## 3. Homepage-Specific Bento Grid Cards

Homepage tokens are prefixed with `home-` and scale dynamically across different viewport breakpoints to maintain professional branding and visual flow:

*   **`home-2x1`**: Spans 4 columns out of 12 (desktop).
*   **`home-2x2`**: Spans 4 columns out of 12, across 2 explicit rows.
*   **`home-4x2`**: Spans 8 columns out of 12, across 2 rows (Main Strategic Brand Hero card).

### Homepage Layout Composition Diagram

```
  +-----------------------------------+-----------+  (12 Columns total)
  |             home-4x2              | home-2x2  |
  |            (8 columns)            | (4 cols)  |
  |                                   |           |
  +-----------+-----------+-----------+-----------+
  | home-2x1  | home-2x1  | home-2x1  | home-2x1  |
  | (4 cols)  | (4 cols)  | (4 cols)  | (4 cols)  |
  +-----------+-----------+-----------+-----------+
```

---

## 4. How to Update or Apply Grid Configurations

### Step 1: Assign Dimension Tokens to Items
Modify `src/config/bento.json` and declare the desired layout token on any item:
```json
{
  "slug": "novanet-studio",
  "token": "2x2"
}
```

### Step 2: Dynamic Template Resolution
In Astro templates, resolve the tokens to CSS classes using the `getGridClass` helper:
```typescript
import bentoConfig from '../../config/bento.json';
const getGridClass = (tokenName: string) => bentoConfig.gridTokens[tokenName] || "";
```
```astro
<div class={getGridClass(work.token)}>
  <!-- ... card content ... -->
</div>
```
