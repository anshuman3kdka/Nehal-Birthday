## 2024-05-20 - [Performance] Custom Cursor Tracking
**Learning:** Animating `left` and `top` continuously for a custom cursor causes layout thrashing and high CPU usage.
**Action:** Use Framer Motion's `x` and `y` motion values instead to map directly to GPU-accelerated transforms. Use negative margins for centering since Framer Motion overrides inline `transform`.
