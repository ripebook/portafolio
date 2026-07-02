# Interactive Cyberpunk Developer Portfolio

A high-performance personal portfolio website built with a cyberpunk aesthetic, featuring immersive 3D graphics and smooth motion details. The application is designed with modular React components, custom layouts, and a responsive structure.

## Overview

This project serves as an interactive hub showcasing development projects, core technical skills, and secure contact gateways. To deliver an engaging visual experience while maintaining high-performance budgets across diverse devices, the application implements dynamic system performance profiling to selectively load heavy graphics.

## Key Technologies and Tools

The project leverages a modern web stack:

*   **Core Logic:** React 19 provides the reactive UI components and state management.
*   **Module Bundler and Dev Server:** Vite offers fast HMR (Hot Module Replacement) and optimized production compilation.
*   **3D Elements:** Three.js and React Three Fiber (R3F) render a real-time responsive neon grid and floating particle background.
*   **Post-processing Effects:** React Three Postprocessing handles high-end rendering passes (bloom, noise, and vignette overlays) for supported devices.
*   **Animations:** Framer Motion powers micro-interactions, fade-ins, and layout transitions.
*   **Styling:** Vanilla CSS defines the custom grid, layouts, responsive parameters, scanline terminal effects, and color themes.
*   **Quality Assurance & Code Quality:** Oxlint checks the codebase against modern practices to keep lint configurations lightweight and clean.
*   **Package Manager:** pnpm handles dependencies efficiently, reducing disk footprint and optimizing dependency installation.
*   **Deployment:** Vercel hosts the live production website.

## Project Architecture

The directory layout is organized into clean, focused layers:

```
portfolio/
├── dist/                  # Built assets for deployment
├── public/                # Static assets, site icons, and illustrations
├── src/
│   ├── assets/            # Internal assets (images, screenshots)
│   ├── components/
│   │   ├── 3d/            # Canvas setups, grid lines, and particle generators
│   │   ├── sections/      # Hero, Projects, Skills, and Contact layout components
│   │   └── ui/            # Shared interfaces, Navbar, Icons, and simulated terminal
│   ├── data/              # Static data stores (project details)
│   ├── hooks/             # Custom utility hooks (performance/device diagnostics)
│   ├── App.css            # Root-level layout styles
│   ├── App.jsx            # Application layout coordinator
│   ├── index.css          # Design system, style variables, animations, and typography
│   └── main.jsx           # React app entry point
├── index.html             # HTML Shell
├── package.json           # Manifest and script registry
└── vite.config.js         # Build and plugin pipeline configuration
```

## Performance Diagnostics

To ensure a smooth frame rate across low-spec and mobile platforms, a dedicated hook checks:
1. Screen parameters (mobile sizing via matchMedia queries).
2. Motion preferences (prefers-reduced-motion triggers).
3. System capabilities (checking hardware concurrency and device memory thresholds).

If the system indicates a low-end configuration or a mobile layout, heavy 3D canvases and postprocessing effects are disabled. A high-efficiency CSS fallback background is used instead.

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Ensure you have Node.js (version 18 or above recommended) and pnpm installed:

```bash
npm install -g pnpm
```

### Installation

1. Clone the repository and navigate to the project root:
   ```bash
   git clone https://github.com/ripebook/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development Server

Launch the local development server:

```bash
pnpm run dev
```

The application will be accessible at http://localhost:5173.

### Production Build

To compile and optimize the website for hosting:

```bash
pnpm run build
```

This generates static distribution files inside the dist/ directory. You can preview the production build locally:

```bash
pnpm run preview
```

## Contact and Links

Secure communication channels are established at the following endpoints:

*   **Email:** frangarkl@gmail.com
*   **GitHub:** https://github.com/ripebook
*   **Instagram:** https://instagram.com/frangarkl
