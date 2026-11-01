# COSMOS – Interactive Solar System Explorer

> **Explore Beyond. Discover Everything.**

A visually stunning, fully interactive educational website built with **HTML5, CSS3, and Vanilla JavaScript** — no frameworks required.

---

## Features

| Section | Description |
|---|---|
| **Hero** | Cinematic Earthrise background, animated stars, counter stats |
| **Solar System** | Animated orbital diagram — click any planet to select |
| **Planet Explorer** | Full scientific profile, prev/next navigation, compare mode |
| **Mission Control** | Configure and simulate a space mission with real-time status log |
| **Space Facts** | 18 scientifically accurate facts with smooth transitions |

---

## Project Structure

```
COSMOS/
├── index.html          # Main HTML
├── css/
│   ├── style.css       # Global styles, components
│   ├── animations.css  # Keyframe animations, glow effects
│   └── responsive.css  # Mobile/tablet breakpoints
├── js/
│   ├── main.js         # App init, nav, stars, particles
│   ├── planets.js      # Planet data, orbital system, explorer
│   ├── mission.js      # Mission form, launch sequence
│   └── facts.js        # Space facts, random selection
└── assets/
    └── images/         # Planet images (NASA), hero background
```

---

## Running Locally

Simply open **index.html** in any modern browser. No server required.

```bash
# On Windows:
start COSMOS/index.html

# On Mac:
open COSMOS/index.html
```

---

## Tech Stack

- **HTML5** — Semantic markup, ARIA accessibility
- **CSS3** — Custom properties, animations, glassmorphism, grid/flexbox
- **Vanilla JavaScript** — Modular architecture, IntersectionObserver, Canvas API

---

## Planetary Data Sources

All data sourced from NASA and IAU standards:
- NASA Solar System Exploration
- IAU (International Astronomical Union)
- NASA Planetary Fact Sheets

---

## Credits

- **Planet & Background Images**: NASA / JPL / ESA (Public Domain)
- **Fonts**: Google Fonts (Orbitron, Exo 2, Space Mono)

---

*Educational simulation only. No real spacecraft are launched.*
