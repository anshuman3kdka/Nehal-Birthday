## 2024-05-18 - Adding Accessible Hover States to Framer Motion Navigation
**Learning:** Applying Tailwind interactive states (`hover:`, `focus-visible:`) alongside inline styles for framer motion components requires careful transition handling to prevent overrides, particularly with complex nested animations.
**Action:** Use CSS classes over inline styles for inactive states so framer motion can cleanly transition inline styles for the active states, allowing seamless accessibility enhancements (hover and focus indicators).
