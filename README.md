# Project: "Cloudy Midnight" - Digital Birthday Heirloom (v2)
## Product Requirements Document (PRD)

### 1. Vision & Core Concept
**Goal:** A "private corner of the internet" combining intimate journal logs with a vast celestial archive.
**Theme:** *Midnight Whispers* — The tactile intimacy of a secret diary set against the infinite scale of a nebula.
**Key Interaction:** Discovery through a "Searchlight" (pointer-tracked light) that reveals hidden content.

### 2. Design System (Refined)
- **Primary Palette:** `#0A0A0C` (Deep Charcoal), `#12121A` (Dark Indigo).
- **Accents:** `#FFFAF0` (Searchlight Ivory), `#4A3B63` (Muted Violet Bloom).
- **Typography:** `Courier Prime` (Monospace/Journal) for entries; `Inter` (Sans/Metadata) for structural info.
- **Tone:** All-lowercase, quiet, and earned (not presented).

### 3. Tech Stack (Confirmed)
- **Framework:** Vite + React.
- **3D Engine:** Three.js, R3F, Drei (for `Cloud`, `Sparkles`, `Float`).
- **Visuals:** `@react-three/postprocessing` (Bloom, Vignette).
- **Animation:** Framer Motion (reveal logic), GSAP (Searchlight physics), Lenis (smooth scroll).
- **Styling:** Tailwind CSS.

### 4. Core Features
#### 4.1 The Memory Nebula (Three.js)
- A persistent 3D cloudscape background.
- Clouds pulse with indigo and violet blooms.
- Shimmering "stardust" particles float across the Z-axis.

#### 4.2 The Searchlight (GSAP + CSS Masks)
- A radial gradient mask that follows the cursor/touch.
- Content inside the radius is 100% opaque and sharp; content outside is blurred and low-opacity (20%).

#### 4.3 Log Fragments (The Journal)
- Tactile cards containing timed-reveal text logs.
- Metadata (time, location) presented in small, monospace data points.

#### 4.4 Hidden Confessions (The Discovery)
- Gaussian-blurred images or text blocks that require the Searchlight to resolve.

### 5. Interaction Map
1. **Entry:** User enters a dark, nebulous void.
2. **Exploration:** Moving the pointer activates the Searchlight.
3. **Discovery:** Fragments of a "Secret Journal" fade in as they are illuminated.
4. **Intimacy:** Clicking a fragment expands it into a full "Nebula Archive" entry.
4.2 The Searchlight (GSAP + CSS Masks)





A radial gradient mask that follows the cursor/touch.



Content inside the radius is 100% opaque and sharp; content outside is blurred and low-opacity (20%).

4.3 Log Fragments (The Journal)





Tactile cards containing timed-reveal text logs.



Metadata (time, location) presented in small, monospace data points.

4.4 Hidden Confessions (The Discovery)





Gaussian-blurred images or text blocks that require the Searchlight to resolve.

5. Interaction Map





Entry: User enters a dark, nebulous void.



Exploration: Moving the pointer activates the Searchlight.



Discovery: Fragments of a "Secret Journal" fade in as they are illuminated.



Intimacy: Clicking a fragment expands it into a full "Nebula Archive" entry.

