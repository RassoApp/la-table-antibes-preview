# Design System Document: La Table d’Antibes

## 1. Overview & Creative North Star

### The Creative North Star: "The Sun-Drenched Monolith"
This design system moves away from the "organic softness" of typical modern web design. Instead, it draws inspiration from the architectural precision of Vieil Antibes—where sharp stone edges meet the soft, golden light of the Mediterranean. 

We are building a **High-End Editorial** experience. The goal is to make the user feel as though they are flipping through a luxury French travel journal. We break the "template" look through **intentional asymmetry**, where large serif typography overlaps sharp content blocks, and depth is created not through shadows, but through the sophisticated layering of warm, earthen tones. Every element must feel architectural, deliberate, and premium.

---

## 2. Colors

The palette is rooted in the "Terra Cotta" of Provençal rooftops and the "Warm Beige" of sun-bleached stone.

- **Primary (`#994127`)**: Used for brand-defining moments and primary actions. To provide "visual soul," use subtle linear gradients transitioning from `primary` to `primary_container` (`#b8583d`) at a 135-degree angle for hero buttons.
- **Surface & Background**: Use `background` (`#faf9f6`) as the canvas. 
- **The "No-Line" Rule**: Prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. For example, a "Menu of the Day" section should be wrapped in `surface_container_low` (`#f4f3f1`) to sit naturally against the `background`.
- **Surface Hierarchy & Nesting**: Treat the UI as physical layers of stone and glass. 
    - Level 0: `background` (The base)
    - Level 1: `surface_container` (Content blocks)
    - Level 2: `surface_container_highest` (Interactive cards or floating elements)
- **The Glass Rule**: To evoke the mirrors and brass of a modernized bistro, use Glassmorphism for mobile navigation bars and overlays. Use the `surface` color at 80% opacity with a `20px` backdrop blur.

---

## 3. Typography

The typography strategy relies on a "High-Contrast Scale" to establish an editorial rhythm.

- **The Voice (Headings)**: **Noto Serif**. This is our "French Heritage" font. Use `display-lg` (3.5rem) for hero statements and `headline-lg` for menu categories. These should feel authoritative and elegant.
- **The Engine (Body)**: **Plus Jakarta Sans**. A modern, clean sans-serif that ensures high readability for menu descriptions and reservation flows.
- **Stylistic Intent**: Use `label-sm` in all-caps with `0.1rem` letter spacing for "Premium Moments" (e.g., "EST. 1984" or "ANTIBES, FRANCE") to create a refined, stamped-metal aesthetic.

---

## 4. Elevation & Depth

In this system, **sharpness is a luxury**. We reject the "soft bubble" aesthetic of common apps.

- **The Layering Principle**: Depth is achieved by "stacking" the surface-container tiers. Place a `surface_container_lowest` card on a `surface_container_low` section to create a soft, natural lift without a shadow.
- **Ambient Shadows**: Shadows are rarely used. When a "floating" effect is required (e.g., a reservation modal), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(153, 65, 39, 0.06)`. Note the tint: the shadow is a low-opacity version of the `primary` color, not grey.
- **The "Ghost Border"**: If accessibility requires a container boundary, use the `outline_variant` (`#dcc1ba`) at **15% opacity**. 100% opaque borders are strictly forbidden.
- **Strict Geometry**: The `Roundedness Scale` is set to **0px** across all components. Every button, input, and card must maintain a sharp, architectural edge.

---

## 5. Components

### Buttons
- **Primary**: Sharp edges (0px). `on_primary` text on `primary` background. For hover states, shift to `primary_container`.
- **Secondary**: `outline` token at 20% opacity with `primary` text. No fill.
- **Tertiary**: Text-only using `primary` color, accompanied by a 1px underline that extends on hover.

### The Editorial Card
- No borders. No dividers.
- Use `spacing-6` (2rem) as the internal padding.
- Imagery within cards must be full-bleed to the sharp edges.
- Typography within cards should use `title-md` for names and `body-sm` for descriptions.

### Input Fields (Reservation Flow)
- Abandon the "box" look. Use a `surface_container_high` background with a 2px `primary` bottom-border that activates only on focus.
- Labels use `label-md` and should never be hidden; they represent the "order" of the restaurant.

### Signature Component: The "Terrace" List
- Specifically for menus. Forbid the use of divider lines. 
- Use **Vertical White Space** (`spacing-8`) to separate items. 
- Price points should use `title-sm` with a `secondary` color, positioned asymmetrically to the right of the item name.

---

## 6. Do's and Don'ts

### Do
- **Do** use intentional white space. Let the "sun" into the layout.
- **Do** overlap elements. Place a high-quality photo of a dish so it slightly overlaps a `surface_container` edge to create an editorial feel.
- **Do** use `primary` for CTAs. It is our "Terra Cotta" signature.
- **Do** prioritize a mobile-first "Booking Monolith"—a persistent, sharp-edged CTA at the bottom of the mobile viewport.

### Don't
- **Don't** ever use rounded corners. Even a 2px radius breaks the architectural integrity of the brand.
- **Don't** use standard "Grey" for text. Use `on_surface_variant` (`#56423d`) to maintain the warm, Mediterranean tonal depth.
- **Don't** use icons unless absolutely necessary. Rely on high-end typography and photography to lead the user.
- **Don't** use horizontal rules (`<hr>`). Use background color shifts (`surface` vs `surface_container_low`) to define new sections.