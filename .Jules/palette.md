## 2024-05-28 - [Accessible Navigation Indicators]
**Learning:** Animated visual indicators for active states (like Framer Motion layout pills) must be paired with standard HTML accessibility attributes (`aria-current="page"`) and visible focus states (`focus-visible:ring-2`) to ensure screen reader compatibility and keyboard navigation.
**Action:** Always verify that interactive elements relying on visual animation for state or focus have explicit semantic attributes and `focus-visible` classes.
