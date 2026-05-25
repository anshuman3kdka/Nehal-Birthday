## 2024-05-25 - Framer Motion Active State Accessibility
**Learning:** When using Framer Motion `layoutId` pills for active navigation states, screen readers do not recognize the visual change. Furthermore, keyboard navigation can become confusing without explicit focus indicators.
**Action:** Always pair animated interactive elements (like `layoutId` active-state pills or animated links) with standard HTML accessibility attributes (e.g., `aria-current="page"`) and ensure they have visible focus states (e.g., `focus-visible:ring-2`) for keyboard users.
