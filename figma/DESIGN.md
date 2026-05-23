---
name: Aprende Kinetic
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#4fdbc8'
  on-secondary: '#003731'
  secondary-container: '#04b4a2'
  on-secondary-container: '#003f38'
  tertiary: '#c4c7c9'
  on-tertiary: '#2d3133'
  tertiary-container: '#6b6e70'
  on-tertiary-container: '#eff1f3'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 96px
    fontWeight: '800'
    lineHeight: 100px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for a high-energy, gamified educational experience. It targets adult learners who seek an immersive, "flow-state" environment for language acquisition. The brand personality is focused, sophisticated, and technologically advanced, moving away from traditional "playful" education apps toward a sleek, cinematic aesthetic.

The visual style is **Corporate Modern with high-performance Kinetic influences**. It utilizes deep atmospheric layers, high-contrast typography, and a "focus-first" philosophy. The interface is designed to support vertical scroll-snapping, treating every screen as a distinct, impactful scene rather than a continuous document. Visual interest is driven by sharp state transitions and luminous accents that guide the user's eye toward progress and action.

## Colors

The palette is anchored in a "Deep Space" navy to minimize eye strain and maximize the vibrance of functional colors. 

- **Primary (Vibrant Blue):** Used for primary actions and critical path progress. It signifies movement and advancement.
- **Secondary (Teal/Cyan):** Used for "Success" states, secondary progress metrics, and gamification rewards (XP, streaks).
- **Surface Tones:** A range of deep indigos and navies are used to create structural depth without losing the dark-mode immersion.
- **Accents:** High-contrast whites and cool grays ensure that text remains legible against the dark background, while infrequent red or orange accents are reserved for "Hearts" or "Errors."

## Typography

This design system uses a bold, geometric typeface to convey modern authority. **Plus Jakarta Sans** provides the necessary weight for impactful headlines and clear readability for language learning content. 

For technical data—such as XP counts, timers, and code-like references—**Geist** is used to provide a clean, monospaced feel that balances the softness of the headlines. Headlines should use tight letter-spacing to appear more "designed" and editorial. Large display styles are reserved for key conversational moments (e.g., "¡Hola!") and should be treated as hero graphic elements.

## Layout & Spacing

The layout operates on a **Fixed Grid** within a fluid viewport. Content is centered within a 1280px container on desktop to maintain focus. 

The system utilizes a **Vertical Scroll-Snapping** model. Each major section (Lesson Start, Dashboard, Journey Map) occupies exactly 100vh. This reinforces the "Scene" based architecture of the application. 

**Spacing Rhythm:**
- Use an 8px base unit. 
- Component internal padding uses 16px or 24px.
- Section-to-section gap is irrelevant due to scroll-snapping, but internal section elements should be grouped with 32px to 64px of vertical breathing room to prevent clutter.

## Elevation & Depth

Hierarchy is established through **Tonal Layering and Low-Contrast Outlines** rather than heavy drop shadows. 

1. **Floor (Level 0):** The deep navy background (#0F172A).
2. **Plates (Level 1):** Slightly lighter containers (#1E293B) with a subtle 1px border (#334155). These are used for card backgrounds and navigation bars.
3. **Active Elements (Level 2):** Primary buttons and active progress cards. These use vibrant fills or high-contrast borders.

**Glassmorphism** is applied to navigation bars and floating overlays (like tooltips or settings menus) using a 12px backdrop-blur and 40% opacity on the surface color to maintain the sense of depth within the "space" of the app.

## Shapes

The shape language is **Rounded (0.5rem base)**. This softens the high-contrast typography and dark theme, making the platform feel approachable despite its professional aesthetic. 

- **Cards & Primary Containers:** Use 1rem (16px) for a substantial, modern feel.
- **Buttons & Inputs:** Use 0.5rem (8px) for a crisp, functional appearance.
- **Progress Bars:** Use fully rounded (Pill) caps to emphasize the fluid nature of learning progress.

## Components

**Buttons:**
- **Primary:** Solid Vibrant Blue fill, white text, 8px radius. On hover, a subtle cyan outer glow (5px blur).
- **Secondary (Ghost):** 1px border (#334155), white text. On hover, the border becomes Primary Blue.

**Progress Indicators:**
- Thin, horizontal bars. The "Background" of the bar is a dark navy (#1E293B), and the "Fill" is Secondary Teal. Use a CSS transition of `0.6s cubic-bezier(0.34, 1.56, 0.64, 1)` for a "bouncy" fill animation when gaining XP.

**Cards:**
- Interactive lesson cards should utilize a "Tilt" effect on hover. They feature a 1px top-stroke to simulate a light source coming from above.

**Navigation:**
- A top-fixed persistent bar with glassmorphism effects. Icons should be "Duotone" style, using Primary Blue and a faded version of the Neutral color.

**Input Fields:**
- Dark backgrounds with high-contrast white text. The focus state must replace the border with a 2px Primary Blue stroke.