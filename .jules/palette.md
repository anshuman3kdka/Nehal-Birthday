## 2023-10-27 - Navigational Pill A11y
**Learning:** The animated `layoutId` pill in the GlobalNav provides visual cues for the active link but lacks semantic meaning for screen readers. Framer Motion layout animations don't provide native a11y support.
**Action:** Always pair `layoutId` pill animations with standard `aria-current="page"` attributes, and include explicit `focus-visible` styles (`focus-visible:ring-2 focus-visible:ring-[var(--accent)]`) to maintain keyboard accessibility, especially since global `outline: none` or custom resets might obscure focus states on animated elements.
