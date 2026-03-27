# DESIGN SYSTEM: a7 Arquitectura

## 1. Visual Language
The design is inspired by Swiss minimalism and modern architectural journals. It emphasizes whitespace, large typography, and high-quality photography.

## 2. Colors (CSS Variables)
- `--bg-color`: #ffffff
- `--text-main`: #000000
- `--text-secondary`: #4a4a4a
- `--bg-dark`: #000000
- `--text-on-dark`: #cccccc
- `--text-on-dark-active`: #ffffff
- `--gray-light`: #f5f5f5
- `--gray-medium`: #e0e0e0

## 3. Layout Patterns
- **Standard Padding:** `.section { padding: 4rem 0; }`
- **Container:** Max-width 1200px, centered.
- **Grids:**
    - Projects: Masonry (3 cols desktop, 2 tablet, 1 mobile)
    - Details: 2-column square grid (1:1 aspect ratio)
    - Forms/Text: Balanced columns with 4rem gap

## 4. Components
- **Header:** Sticky, black background, auto-hide on scroll-down.
- **Footer:** Minimal, black background, social links on the left.
- **ProjectCard:** Hover lift effect, 4:3 aspect ratio cover image.
- **Lightbox:** Full-screen modal, high-contrast navigation.

## 5. Motion Guidelines (Framer Motion)
- **Transitions:** Sutil 0.4s duration.
- **Ease:** `[0.165, 0.84, 0.44, 1]` (Cubic Bezier for high-end feel).
- **Page Transitions:** Fade and slight slide-up.
- **Reveals:** Staggered opacity and Y-offset for grid items.
