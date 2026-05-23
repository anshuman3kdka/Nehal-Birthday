## 2026-05-23 - Animated Link Accessibility
**Learning:** Interactive animated elements (like Framer Motion layoutId pills used for navigation) can look great but completely lack semantic state or keyboard focus visibility for screen readers and keyboard users if not careful. The global navigation here was lacking both an aria-current state and focus-visible styling.
**Action:** Always pair animated layout states with standard HTML accessibility attributes (`aria-current="page"` or `aria-label`) and explicit keyboard focus states (`focus-visible:ring-2`).
