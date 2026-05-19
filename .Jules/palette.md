## 2025-02-14 - Improve Keyboard Navigation for Global Nav

**Learning:** The global navigation links (`GlobalNav` in `src/App.jsx`) are visually well-designed but lack proper keyboard focus indicators, making it difficult for keyboard users to know which link is active.
**Action:** Added `focus-visible:ring-2 focus-visible:ring-[#f2d8c8]` and removed inline styles to allow hover/focus states to apply correctly. Also added `aria-current="page"` to the active link.
