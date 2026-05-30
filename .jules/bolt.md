## 2026-05-30 - Framer Motion Continuous Animation Performance

**Learning:** When animating element positions continuously with Framer Motion (e.g., custom cursors), using CPU-bound layout properties like `left` and `top` triggers layout thrashing and repaints. Using `x` and `y` leverages GPU transforms and avoids repaints. Because Framer Motion overrides the inline CSS `transform` property, we must use negative margins (e.g., `margin-left` and `margin-top`) for centering offsets instead of `transform: translate(-50%, -50%)`.

**Action:** Always use `x` and `y` (translates) rather than `left` and `top` for continuous animations in Framer Motion. Apply centering offsets using negative margins in CSS.
