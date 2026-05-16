# Design System: Midnight Whispers
## Project: "Cloudy Midnight" - Digital Birthday Heirloom

### 1. Visual Identity
- **Vibe:** Intimate, digital liminality, 2:00 AM private internet corner.
- **Color Palette:**
  - `background`: `#0A0A0C` (Deep Charcoal)
  - `surface-indigo`: `#12121A` (Dark Indigo)
  - `accent-ivory`: `#FFFAF0` (Searchlight Ivory, low opacity)
  - `bloom-violet`: `#4A3B63` (Muted Violet)
  - `text-silver`: `#F5F5F7` (Off-White/Silver)
- **Typography:**
  - **Primary (Journal/Logs):** `Courier Prime` (Monospace). All-lowercase, generous letter-spacing.
  - **Secondary (UI/Metadata):** `Inter` (Sans-serif). Small caps or lowercase for a technical "data point" feel.

### 2. Core Components (Tailwind + Framer Motion)

#### 2.1 The Fragment Card (`LogFragment.jsx`)
- **Visuals:** Dark, semi-transparent background (`bg-surface-indigo/40`), subtle border, monospaced text.
- **Metadata:** Top left "fragment_id" or "timestamp" in 10px Inter.
- **Reveal Logic:** Use Framer Motion to stagger character reveal or fade-in based on scroll or searchlight proximity.

#### 2.2 Hidden Confessions (`Confession.jsx`)
- **Visuals:** Gaussian blur filter (`backdrop-blur-xl`) applied to a container.
- **Discovery:** Blur reduces from 20px to 0px when the "Searchlight" is active over the element.

#### 2.3 Navigation (`GlobalNav.jsx`)
- **Top:** "midnight whispers" title, center-aligned, wide letter-spacing.
- **Bottom:** Floating dock with blur background. Icons for `Nebula`, `Journal`, `Archive`.

### 3. Interactive Environment (Three.js / R3F)

#### 3.1 `MidnightCloudscape.jsx`
- **Setup:** A full-screen `<Canvas />` behind all UI.
- **Clouds:** Use `@react-three/drei`'s `<Cloud />` component.
  - `seed`: Randomly generated.
  - `color`: Transition between indigo and violet.
  - `opacity`: Low (0.2 - 0.4) for a wispy, painterly feel.
- **Stardust:** `<Sparkles />` component with a slow drift on the Y-axis.

#### 3.2 The Searchlight (`Searchlight.jsx`)
- **Logic:** Follow pointer coordinates using GSAP with a slight "lag" (inertia) to feel tactile.
- **Visuals:** A CSS `mask-image` with a `radial-gradient` that reveals the content underneath.

### 4. Implementation Directives for Copilot
- Use **Vite** with **React**.
- Styling should be strictly **Tailwind CSS**.
- Animation should prioritize **Framer Motion** for UI and **GSAP** for physics-based cursor tracking.
- Keep all copy lowercase for intimacy.
- Ensure the site is responsive for mobile, focusing on touch-based exploration.
