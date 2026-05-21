## 2024-05-21 - [Framer Motion LayoutId Pill Accessibility]
**Learning:** Animated navigation pills using Framer Motion's `layoutId` (like in our GlobalNav) often rely solely on color/visual cues to indicate the active state, which fails accessibility standards for screen readers and keyboard users in dark themes.
**Action:** Always pair animated interactive elements with standard HTML accessibility attributes (like `aria-current="page"`) and ensure visible focus states (`focus-visible:ring-2`) so keyboard users can navigate effectively without getting lost in the void.
