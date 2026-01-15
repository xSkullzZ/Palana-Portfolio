# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based portfolio website built with Vite, featuring interactive visual components and animations. The site uses a full-screen snap-scroll architecture where each section occupies the entire viewport.

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Architecture

### Tech Stack
- **Build Tool**: Vite with SWC for Fast Refresh
- **Framework**: React 19
- **Styling**: Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **Animations**: Framer Motion
- **Icons**: react-icons (multiple icon sets: Simple Icons, Font Awesome, Game Icons, Tabler Icons)

### Application Structure

The app (`src/App.jsx`) uses a **vertical snap-scroll layout** where each major section is a full-screen `<section>` with `snap-start snap-always h-screen` classes. The main container has `overflow-y: scroll` with hidden scrollbars and `snap-y snap-mandatory` for smooth section-to-section scrolling.

**Section Order:**
1. ParticleHero - Animated particle text hero
2. HeroSection - Secondary hero
3. ImageReveal - Projects showcase
4. About Me - Placeholder section
5. Timeline - Horizontal scrolling timeline
6. Skills - Skills visualization with diagonal bars
7. Contact - Footer/contact placeholder

### Key Components

#### ParticleHero (`src/components/ParticleHero.jsx`)
- Canvas-based particle animation that forms text
- Text rotates through array defined in `TEXTS` constant
- Configuration object `CONFIG` at top of file controls particle appearance and behavior
- Uses `willReadFrequently: true` on canvas context for performance
- Mouse interaction causes particles to disperse

#### Timeline (`src/components/Timeline.jsx`)
- Horizontal scrolling timeline that hijacks vertical scroll when in viewport
- Configuration object `SCROLL_CONFIG` at top controls scroll behavior
- Timeline data defined in `timelineData` array with year, title, description, icon, color, category
- Cards alternate between top and bottom positions (even/odd indices)
- **Important**: Uses `index` as key in map (not `year`) to allow multiple events per year without React key conflicts

#### Skills (`src/components/Skills.jsx`)
- Two-section layout: Software/Tools (3-column grid of cards) and Programming Languages (5-column grid)
- Skills data defined in `skillsData` object at top of file
- Uses diagonal animated bars (`DiagonalBar` component) to show proficiency levels (1-6 scale, `BAR_SEGMENTS = 6`)
- **Icon Import Pattern**: Component imports icons from multiple react-icons packages:
  - `react-icons/si` - Simple Icons (most brand logos)
  - `react-icons/fa` - Font Awesome (e.g., FaMicrosoft)
  - `react-icons/gi` - Game Icons (e.g., GiMusicSpell for audio software)
  - `react-icons/tb` - Tabler Icons (e.g., TbBrandCSharp)
  - Not all brand icons exist in Simple Icons - check availability or use alternatives from other packages

### Configuration Pattern

Many components expose configuration objects at the top of the file for easy customization:
- `ParticleHero`: `TEXTS` array and `CONFIG` object
- `Timeline`: `SCROLL_CONFIG` object and `timelineData` array
- `Skills`: `skillsData` object and `BAR_SEGMENTS` constant

When modifying content, look for these configuration objects first rather than editing deep in component logic.

### Vite Cache Management

If encountering module import errors (especially with react-icons), clear Vite's cache:
```bash
rm -rf node_modules/.vite
```
This is particularly important after changing icon imports or installing new dependencies.

## React Icons Gotchas

- Not all icons that "should" exist are actually exported from react-icons
- When encountering missing icon errors:
  1. Check if icon exists in different icon set (e.g., `SiCsharp` doesn't exist, but `TbBrandCSharp` does)
  2. Use alternatives from Font Awesome or Game Icons if Simple Icons doesn't have it
  3. Always clear Vite cache after changing icon imports
- Icons are React components, pass them as `icon` prop, then render as `<Icon />` or `<Icon className="..." />`

## Common Patterns

### React Keys in Lists
When mapping over data that may have duplicate values (like years in Timeline), always use `index` as key rather than a data property that might not be unique:
```jsx
{timelineData.map((item, index) => (
  <div key={index}>  // Not key={item.year}
))}
```

### Canvas Performance
When using `getImageData()` or other frequent canvas read operations, specify `willReadFrequently: true`:
```javascript
const ctx = canvas.getContext('2d', { willReadFrequently: true });
```

### Framer Motion Animations
- Use `motion` components from framer-motion
- Common pattern: `whileHover={{ scale: 1.05 }}` for interactive elements
- Use `initial`, `animate`, `viewport={{ once: true }}` for scroll-triggered animations

## Styling Notes

- Tailwind v4 is integrated via Vite plugin (not PostCSS)
- Custom scrollbar hiding is done via inline styles and `<style>` tags in components
- Dark theme palette: blacks, grays, cyan (`#06b6d4`), and gradients
- Many components use `backdrop-blur` and transparency for glassmorphism effects
