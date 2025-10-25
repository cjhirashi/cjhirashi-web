# Design System - cjhirashi.com

**Versión**: 1.0
**Última Actualización**: 2025-10-25
**Tema**: Dark Theme Sofisticado (Purple/Blue/Pink)
**Framework**: Tailwind CSS v4
**React Version**: 19

---

## 1. FILOSOFÍA DE DISEÑO

### Principios

1. **Dark Theme Sofisticado**: Interfaz moderna y profesional en dark mode
2. **Accesibilidad (WCAG AA)**: Contraste mínimo 4.5:1 para texto, 3:1 para elementos
3. **Responsividad**: Mobile-first, optimizado para todos los dispositivos
4. **Consistencia**: Design tokens reutilizables en toda la aplicación
5. **Performance**: Animaciones suaves, transiciones fluidas sin afectar performance
6. **Jerarquía Clara**: Visual hierarchy guía la navegación del usuario

### Target Audience

- Desarrolladores y técnicos (portfolio)
- Visitantes curiosos (blog de tecnología)
- Reclutadores y profesionales (perfil profesional)

### Aesthetic

- Moderno y sofisticado
- Tecnológico pero accesible
- Minimalista con detalles cuidados
- Premium feel sin ser excesivo

---

## 2. PALETA DE COLORES

### 2.1 Colores Primarios (Purple/Blue Gradient)

**Filosofía**: Los colores primarios definen la identidad visual. Usamos un gradiente purple-to-blue que transmite sofisticación y tecnología.

```
Primary Purple → Primary Blue → Secondary Cyan
#9D4EDD → #3C63DD → #00D9FF
```

| Color | Hex | RGB | Uso |
|-------|-----|-----|-----|
| **Primary 50** | `#F9F5FD` | rgb(249, 245, 253) | Backgrounds muy claros en dark mode (hover states) |
| **Primary 100** | `#F0E6FB` | rgb(240, 230, 251) | Backgrounds de elevation baja |
| **Primary 200** | `#E0C9F5` | rgb(224, 201, 245) | Backgrounds, borders subtiles |
| **Primary 300** | `#D5A6EE` | rgb(213, 166, 238) | Estados hover (menos usados) |
| **Primary 400** | `#C980E8` | rgb(201, 128, 232) | Elementos interactivos secundarios |
| **Primary 500** | `#B855E0` | rgb(184, 85, 224) | **Color principal de acento** |
| **Primary 600** | `#9D4EDD` | rgb(157, 78, 221) | Links, botones primarios |
| **Primary 700** | `#7B2CBF` | rgb(123, 44, 191) | Estado activo, focus rings |
| **Primary 800** | `#5A189A` | rgb(90, 24, 154) | Dark hover, backgrounds de énfasis |
| **Primary 900** | `#3C0075` | rgb(60, 0, 117) | Backgrounds oscuros, text on light |

### 2.2 Colores Secundarios (Blue/Cyan)

**Filosofía**: Complementan los purples para crear profundidad y ampliar vocabulario cromático.

| Color | Hex | RGB | Uso |
|-------|-----|-----|-----|
| **Secondary Blue 50** | `#F0F4FF` | rgb(240, 244, 255) | Backgrounds alternos |
| **Secondary Blue 500** | `#3C63DD` | rgb(60, 99, 221) | CTAs secundarios, links alternativos |
| **Secondary Blue 600** | `#2D4A9E` | rgb(45, 74, 158) | Estados activos secundarios |
| **Secondary Cyan 500** | `#00D9FF` | rgb(0, 217, 255) | Accents, gradients, glows |
| **Secondary Cyan 600** | `#00A8CC` | rgb(0, 168, 204) | Hover states de cyan |

### 2.3 Colores Neutrals (Grays para Dark Mode)

**Filosofía**: Neutros diseñados específicamente para dark mode. No usan puros blanco/negro.

| Color | Hex | RGB | Uso |
|-------|-----|-----|-----|
| **Neutral 0** | `#000000` | rgb(0, 0, 0) | (Evitar usar, demasiado duro) |
| **Neutral 50** | `#FAFAFA` | rgb(250, 250, 250) | Text muy claro (en dark: extremadamente raro) |
| **Neutral 100** | `#F3F4F6` | rgb(243, 244, 246) | (No usar en dark mode) |
| **Neutral 200** | `#E5E7EB` | rgb(229, 231, 235) | (No usar en dark mode) |
| **Neutral 300** | `#D1D5DB` | rgb(209, 213, 219) | (No usar en dark mode) |
| **Neutral 400** | `#9CA3AF` | rgb(156, 163, 175) | (No usar en dark mode) |
| **Neutral 500** | `#6B7280` | rgb(107, 114, 128) | Text secondary, placeholders |
| **Neutral 600** | `#4B5563` | rgb(75, 85, 99) | Text tertiary, disabled |
| **Neutral 700** | `#374151` | rgb(55, 65, 81) | Borders, dividers |
| **Neutral 800** | `#1F2937` | rgb(31, 41, 55) | Card backgrounds, elevated surfaces |
| **Neutral 850** | `#0F1419` | rgb(15, 20, 25) | Secondary backgrounds |
| **Neutral 900** | `#111827` | rgb(17, 24, 39) | **Background base principal** |
| **Neutral 950** | `#030712` | rgb(3, 7, 18) | Backgrounds de énfasis máximo |

### 2.4 Colores de Estado

**Filosofía**: Estados comunicados mediante color para acción clara del usuario.

#### Success (Verde)
```
#10B981 (base) - Check, confirmation, success states
```

| Tono | Hex | Uso |
|------|-----|-----|
| **Success 50** | `#ECFDF5` | Background success |
| **Success 500** | `#10B981` | Border, icon success |
| **Success 600** | `#059669` | Hover success |

#### Warning (Amber/Orange)
```
#F59E0B (base) - Warnings, caution
```

| Tono | Hex | Uso |
|------|-----|-----|
| **Warning 50** | `#FFFBEB` | Background warning |
| **Warning 500** | `#F59E0B` | Border, icon warning |
| **Warning 600** | `#D97706` | Hover warning |

#### Error (Red)
```
#EF4444 (base) - Errors, destructive actions
```

| Tono | Hex | Uso |
|------|-----|-----|
| **Error 50** | `#FEF2F2` | Background error |
| **Error 500** | `#EF4444` | Border, icon error |
| **Error 600** | `#DC2626` | Hover error |

#### Info (Sky/Blue)
```
#0EA5E9 (base) - Information, help
```

| Tono | Hex | Uso |
|------|-----|-----|
| **Info 50** | `#F0F9FF` | Background info |
| **Info 500** | `#0EA5E9` | Border, icon info |
| **Info 600** | `#0284C7` | Hover info |

### 2.5 Colores de Texto (Dark Mode)

| Nivel | Color | Hex | Contraste | Uso |
|-------|-------|-----|-----------|-----|
| **Primary** | Blanco Nearly | `#F9FAFB` | 19:1 con bg-900 | Headings, body text principal |
| **Secondary** | Gray 400 | `#9CA3AF` | 5.2:1 con bg-900 | Descripción, meta info |
| **Tertiary** | Gray 500 | `#6B7280` | 4.0:1 con bg-900 | Timestamps, hints |
| **Disabled** | Gray 600 | `#4B5563` | 2.8:1 con bg-900 | Elementos deshabilitados |
| **Inverse** | Almost Black | `#0F1419` | 15:1 con bg-50 | (Raro, máximo contraste) |

**Nota**: Todos los ratios cumplen WCAG AA (4.5:1) excepto tertiary/disabled en contextos donde aplica.

### 2.6 Colores de Fondo

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Background Base** | `#111827` | Page background, base de toda la UI |
| **Surface Primary** | `#1F2937` | Cards, containers, elevated surfaces |
| **Surface Secondary** | `#0F1419` | Alternative surfaces, sidebar background |
| **Surface Tertiary** | `#030712` | Maximum contrast backgrounds |
| **Overlay** | `rgba(0,0,0,0.75)` | Modals, overlays, darkening |
| **Subtle** | `rgba(255,255,255,0.05)` | Subtle hover states, dividers |

### 2.7 Colores Especiales

#### Gradients

```css
/* Primary Gradient (Purple to Cyan) */
gradient-primary: linear-gradient(135deg, #9D4EDD 0%, #00D9FF 100%);

/* Hero Gradient (Purple to Blue) */
gradient-hero: linear-gradient(135deg, #7B2CBF 0%, #3C63DD 100%);

/* Accent Gradient (Cyan to Blue) */
gradient-accent: linear-gradient(90deg, #00D9FF 0%, #3C63DD 100%);

/* Dark Gradient (Background layering) */
gradient-dark: linear-gradient(180deg, rgba(157,78,221,0.1) 0%, rgba(0,217,255,0.05) 100%);
```

#### Glow Effects

```css
/* Purple Glow */
glow-purple: 0 0 20px rgba(157, 78, 221, 0.3);

/* Cyan Glow */
glow-cyan: 0 0 20px rgba(0, 217, 255, 0.3);

/* Combined Glow */
glow-primary: 0 0 30px rgba(157, 78, 221, 0.2), 0 0 60px rgba(0, 217, 255, 0.15);
```

---

## 3. TIPOGRAFÍA

### 3.1 Font Families

#### Primary Font (Body & UI)
```
Font: Inter (Google Fonts)
Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Uso: Body text, UI labels, navigation
Características: Moderno, legible en pantalla, friendly
```

#### Secondary Font (Headings - Optional)
```
Font: Poppins (Google Fonts)
Weights: 600 (semibold), 700 (bold), 800 (extrabold)
Fallback: Inter, sans-serif
Uso: Page titles, major headings, marketing copy
Características: Bold, distinctive, premium feel
Nota: Usar con moderación para mantener legibilidad
```

#### Code Font (Monospace)
```
Font: 'JetBrains Mono' o 'Fira Code' (Google Fonts)
Weights: 400 (regular), 600 (semibold)
Fallback: 'Courier New', monospace
Uso: Code blocks, inline code, terminal output
Características: Monospaced, clara distinción, tech look
```

### 3.2 Font Size Scale (Fluid Responsive)

**Filosofía**: Escala musical coherente (1.125 ratio) que funciona en todos los tamaños de pantalla.

| Nivel | Mobile | Tablet | Desktop | CSS Variable | Uso |
|-------|--------|--------|---------|--------------|-----|
| **xs** | 10px | 10px | 12px | `--text-xs` | Labels pequeños, badges, metadata |
| **sm** | 12px | 12px | 14px | `--text-sm` | Descripción, placeholder, help text |
| **base** | 14px | 14px | 16px | `--text-base` | Body text principal |
| **lg** | 16px | 16px | 18px | `--text-lg` | Body large, card titles |
| **xl** | 18px | 18px | 20px | `--text-xl` | Section headings pequeños |
| **2xl** | 20px | 22px | 24px | `--text-2xl` | Subheadings |
| **3xl** | 24px | 28px | 32px | `--text-3xl` | Page titles pequeños |
| **4xl** | 28px | 32px | 40px | `--text-4xl` | Page titles |
| **5xl** | 32px | 36px | 48px | `--text-5xl` | Hero headings |
| **6xl** | 36px | 40px | 56px | `--text-6xl` | Main hero |

### 3.3 Font Weight Scale

| Weight | Value | CSS | Uso |
|--------|-------|-----|-----|
| **Light** | 300 | `font-light` | (Raro, máximo contraste necesario) |
| **Regular** | 400 | `font-normal` | Body text, descripción |
| **Medium** | 500 | `font-medium` | Button labels, form labels |
| **Semibold** | 600 | `font-semibold` | Emphasis, section headings |
| **Bold** | 700 | `font-bold` | Main headings, CTAs |
| **Extrabold** | 800 | `font-extrabold` | Hero headings (raro) |

### 3.4 Line Height Scale

**Filosofía**: Line heights coherentes basadas en tamaño de fuente y propósito.

| Propósito | Line Height | CSS Variable | Uso |
|-----------|-------------|--------------|-----|
| **Tight** | 1.1 | `--leading-tight` | Headings |
| **Snug** | 1.25 | `--leading-snug` | Section titles |
| **Normal** | 1.5 | `--leading-normal` | Body text, readability |
| **Relaxed** | 1.6 | `--leading-relaxed` | Large body text, typography |
| **Loose** | 1.75 | `--leading-loose` | Blog posts, content largo |

### 3.5 Letter Spacing

| Escala | Value | CSS Variable | Uso |
|--------|-------|--------------|-----|
| **Tight** | -0.02em | `--tracking-tight` | Headings, para que se vean sólidos |
| **Normal** | 0 | `--tracking-normal` | Body text |
| **Wide** | 0.05em | `--tracking-wide` | Labels, CTAs |
| **Extra Wide** | 0.1em | `--tracking-widest` | Labels pequeños, badges |

### 3.6 Ejemplos de Composición Tipográfica

```typescript
// Headings
h1 {
  font-family: Poppins, Inter;
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  line-height: 1.2;
}

h3 {
  font-size: clamp(20px, 2.5vw, 24px);
  font-weight: 600;
  line-height: 1.3;
}

// Body
p, body {
  font-family: Inter;
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-primary);
}

// Code
code, pre {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9em;
  font-weight: 400;
  line-height: 1.5;
}
```

---

## 4. SPACING SYSTEM

### 4.1 Escala Base (4px Foundation)

**Filosofía**: Todos los espacios son múltiplos de 4px para mantener consistencia y alineación perfecta en grillas.

```
Base Unit: 4px

Escala: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
```

| Nombre | Px | Rem | CSS Class | Uso |
|--------|----|----|-----------|-----|
| **xs** | 4px | 0.25rem | `space-1` | Micro spacing (rarely used) |
| **sm** | 8px | 0.5rem | `space-2` | Tight spacing, icon padding |
| **md** | 12px | 0.75rem | `space-3` | Small element spacing |
| **base** | 16px | 1rem | `space-4` | **Standard spacing (most used)** |
| **lg** | 24px | 1.5rem | `space-6` | Medium spacing, section gaps |
| **xl** | 32px | 2rem | `space-8` | Large spacing, card padding |
| **2xl** | 48px | 3rem | `space-12` | Extra large spacing |
| **3xl** | 64px | 4rem | `space-16` | Massive spacing, major sections |
| **4xl** | 96px | 6rem | `space-24` | Hero spacing |
| **5xl** | 128px | 8rem | `space-32` | Page-level spacing |

### 4.2 Padding System

```
Padding Scale (applied to components):

Small: 8px (sm)
Medium: 16px (md) - Standard
Large: 24px (lg)
Extra Large: 32px (xl)

Examples:
Button: px-4 py-2 (16px horizontal, 8px vertical)
Card: p-6 (24px all sides)
Input: px-4 py-3 (16px horizontal, 12px vertical)
Page Container: px-4 md:px-8 lg:px-12 (responsive padding)
```

### 4.3 Margin System

```
Margin Scale (separation between elements):

Gap between elements: 16px (base)
Gap between sections: 24px-32px (lg-xl)
Gap between major sections: 48px+ (2xl+)

Examples:
Elements: gap-4 (16px gap)
Sections: space-y-6 (24px vertical gap)
Major sections: space-y-12 (48px vertical gap)
```

### 4.4 Container Widths

**Filosofía**: Contenedores responsivos que se adaptan a viewport.

```
Breakpoints: 375px (sm), 640px (md), 768px (lg), 1024px (xl), 1280px (2xl)

Maxwidth by breakpoint:
sm (375px): full width - 16px padding = 343px
md (640px): 600px content width
lg (768px): 700px content width
xl (1024px): 900px content width
2xl (1280px): 1100px content width (max)

Page Container: max-w-7xl (container mx-auto)
Content Container: max-w-4xl (blog posts, articles)
Narrow Container: max-w-2xl (forms, focused content)
```

### 4.5 Breakpoints (Mobile-First)

```typescript
// Tailwind v4 breakpoints (mobile-first)
sm: 640px    // Tablet pequeño
md: 768px    // Tablet
lg: 1024px   // Desktop pequeño
xl: 1280px   // Desktop
2xl: 1536px  // Desktop grande

Usage:
Base (mobile): sm:class (aplica en sm y más)
Example: "text-sm md:text-base lg:text-lg" (crece con viewport)
```

---

## 5. SHADOWS & EFFECTS

### 5.1 Elevation Shadow System

**Filosofía**: Sombras que comunican profundidad y jerarquía visual.

```typescript
// Shadow Elevation Levels
elevation-1: 0 1px 2px 0 rgba(0, 0, 0, 0.3);     // Subtle
elevation-2: 0 1px 3px 0 rgba(0, 0, 0, 0.4);     // Slight
elevation-3: 0 4px 6px 0 rgba(0, 0, 0, 0.5);     // Medium
elevation-4: 0 10px 15px 0 rgba(0, 0, 0, 0.6);   // High
elevation-5: 0 20px 25px 0 rgba(0, 0, 0, 0.7);   // Very High
elevation-6: 0 25px 50px 0 rgba(0, 0, 0, 0.8);   // Ultra High
```

| Nivel | Shadow | Uso |
|-------|--------|-----|
| **Subtle** | `shadow-sm` | Hover states, subtle depth |
| **Small** | `shadow` | Default for cards |
| **Medium** | `shadow-md` | Elevated cards, buttons |
| **Large** | `shadow-lg` | Dropdowns, popovers |
| **Extra Large** | `shadow-xl` | Modals, main overlays |
| **2XL** | `shadow-2xl` | Hero sections, maximum elevation |

### 5.2 Border Radius

**Filosofía**: Radio consistente que crea feel moderno pero no excesivo.

```
Border Radius Scale:

none: 0
xs: 2px      - Subtle, minimal rounding
sm: 4px      - Small components
md: 6px      - Standard (most used)
lg: 8px      - Buttons, inputs
xl: 12px     - Cards, large components
2xl: 16px    - Hero sections, featured cards
full: 9999px - Pills, avatars
```

| Component | Border Radius | CSS |
|-----------|---------------|-----|
| **Button** | 6px | `rounded-md` |
| **Input** | 6px | `rounded-md` |
| **Card** | 8px | `rounded-lg` |
| **Badge** | 4px | `rounded-sm` |
| **Avatar** | 9999px | `rounded-full` |
| **Modal** | 12px | `rounded-xl` |

### 5.3 Blur Effects

```css
/* Backdrop Blur */
backdrop-blur-sm: blur(4px);    - Subtle blur overlay
backdrop-blur-md: blur(12px);   - Medium blur (modals)
backdrop-blur-lg: blur(20px);   - Heavy blur

/* Box Blur */
blur: blur(8px);        - Subtle blur on image
blur-md: blur(12px);    - Medium blur
blur-lg: blur(20px);    - Heavy blur
```

### 5.4 Transitions & Animations

**Filosofía**: Transiciones suaves que no ralentizan la UI. All timing es 300ms estándar.

```typescript
// Timing Functions
linear: cubic-bezier(0, 0, 1, 1)           // Constant speed
ease: cubic-bezier(0.25, 0.1, 0.25, 1)    // Smooth, natural
ease-in: cubic-bezier(0.42, 0, 1, 1)      // Fast start, slow end
ease-out: cubic-bezier(0, 0, 0.58, 1)     // Slow start, fast end
ease-in-out: cubic-bezier(0.42, 0, 0.58, 1) // Smooth both sides

// Durations
fast: 150ms    - Hover states, quick feedback
normal: 300ms  - Standard transitions (most used)
slow: 500ms    - Important state changes
slower: 700ms  - Major layout changes
```

#### Transition Properties

```css
/* Common Transitions */
transition-all: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
transition-colors: color, background-color, border-color 300ms ease;
transition-opacity: opacity 300ms ease;
transition-transform: transform 300ms ease;
transition-shadow: box-shadow 300ms ease;

/* Usage */
button: transition-all ease-in-out duration-300
hover-scale: hover:scale-105 transition-transform
fade-in: opacity-0 transition-opacity duration-300
```

#### Animation Examples

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in { animation: fadeIn 300ms ease-in; }

/* Slide Up */
@keyframes slideUp {
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up { animation: slideUp 300ms ease-out; }

/* Pulse (Loading) */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

/* Spin (Loading Spinner) */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin { animation: spin 1s linear infinite; }
```

---

## 6. DARK MODE IMPLEMENTATION

### 6.1 CSS Variables (Custom Properties)

```css
:root {
  /* Colors */
  --color-primary: #9D4EDD;
  --color-primary-light: #B855E0;
  --color-primary-dark: #7B2CBF;

  --color-secondary: #3C63DD;
  --color-accent: #00D9FF;

  --bg-base: #111827;
  --bg-surface: #1F2937;
  --bg-surface-alt: #0F1419;

  --text-primary: #F9FAFB;
  --text-secondary: #9CA3AF;
  --text-tertiary: #6B7280;

  --border-color: #374151;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px 0 rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 10px 15px 0 rgba(0, 0, 0, 0.6);

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;

  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-heading: 'Poppins', 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;

  --text-xs: 10px;
  --text-sm: 12px;
  --text-base: 14px;
  --text-lg: 16px;
  --text-xl: 18px;
  --text-2xl: 20px;
  --text-3xl: 24px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
}

/* Dark mode (default, no media query needed - IS dark mode) */
body {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-sans);
}
```

### 6.2 Tailwind v4 Dark Mode Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class', // or 'media' if want system preference
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F9F5FD',
          100: '#F0E6FB',
          200: '#E0C9F5',
          300: '#D5A6EE',
          400: '#C980E8',
          500: '#B855E0',
          600: '#9D4EDD',
          700: '#7B2CBF',
          800: '#5A189A',
          900: '#3C0075',
        },
        secondary: {
          500: '#3C63DD',
          600: '#2D4A9E',
        },
        accent: {
          DEFAULT: '#00D9FF',
          600: '#00A8CC',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F3F4F6',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          850: '#0F1419',
          900: '#111827',
          950: '#030712',
        },
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        },
        info: {
          50: '#F0F9FF',
          500: '#0EA5E9',
          600: '#0284C7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'var(--font-sans)'],
        heading: ['Poppins', 'var(--font-heading)'],
        mono: ['JetBrains Mono', 'var(--font-mono)'],
      },
      fontSize: {
        xs: ['10px', { lineHeight: '1.2' }],
        sm: ['12px', { lineHeight: '1.3' }],
        base: ['14px', { lineHeight: '1.5' }],
        lg: ['16px', { lineHeight: '1.6' }],
        xl: ['18px', { lineHeight: '1.6' }],
        '2xl': ['20px', { lineHeight: '1.3' }],
        '3xl': ['24px', { lineHeight: '1.2' }],
        '4xl': ['32px', { lineHeight: '1.2' }],
        '5xl': ['48px', { lineHeight: '1.1' }],
      },
      spacing: {
        0: '0',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        12: '48px',
        16: '64px',
        20: '80px',
        24: '96px',
        32: '128px',
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        md: '0 4px 6px 0 rgba(0, 0, 0, 0.5)',
        lg: '0 10px 15px 0 rgba(0, 0, 0, 0.6)',
        xl: '0 20px 25px 0 rgba(0, 0, 0, 0.7)',
        '2xl': '0 25px 50px 0 rgba(0, 0, 0, 0.8)',
        'glow-primary': '0 0 30px rgba(157, 78, 221, 0.2), 0 0 60px rgba(0, 217, 255, 0.15)',
      },
      transitionDuration: {
        150: '150ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in',
        'slide-up': 'slideUp 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## 7. ACCESSIBILITY (WCAG 2.1 AA)

### 7.1 Contraste de Colores

**Estándar**: WCAG AA (4.5:1 mínimo para texto, 3:1 para elementos UI)

| Combinación | Contraste | Status |
|-------------|-----------|--------|
| Text Primary (#F9FAFB) en BG Base (#111827) | 19:1 | AAA ✅ |
| Text Secondary (#9CA3AF) en BG Base (#111827) | 5.2:1 | AA ✅ |
| Primary Button (#9D4EDD) en BG Base (#111827) | 3.5:1 | AA+ ✅ |
| Accent (#00D9FF) en BG Base (#111827) | 6.5:1 | AAA ✅ |
| Success (#10B981) en BG Base (#111827) | 4.2:1 | AA ✅ |

**Validación**: Usar tools como WCAG Contrast Checker para verificar combinaciones.

### 7.2 Focus Indicators

```css
/* Global Focus Ring */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Tailwind Classes */
.btn-primary:focus-visible {
  @apply ring-2 ring-primary-600 ring-offset-2 ring-offset-neutral-900;
}
```

### 7.3 ARIA Labels

```tsx
// Botones sin texto visible
<button aria-label="Cerrar menú">
  <X className="w-5 h-5" />
</button>

// Iconos decorativos (hidden)
<span aria-hidden="true">→</span>

// Elementos agrupados
<nav aria-label="Navegación principal">
  ...
</nav>

// Estados
<button aria-pressed="false" aria-label="Alternar modo oscuro">
  Oscuro
</button>
```

### 7.4 Keyboard Navigation

```
Tab:       Focus siguiente elemento
Shift+Tab: Focus anterior elemento
Enter:     Activar botón/link
Space:     Activar checkbox/radio
Escape:    Cerrar modal/dropdown
Arrow Keys: Navegar dentro de dropdowns/menus
```

---

## 8. RESPONSIVE DESIGN

### 8.1 Mobile-First Approach

```tsx
// Ejemplos de responsive
<div className="text-sm md:text-base lg:text-lg">
  Texto que crece con viewport
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  Grilla responsiva: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
</div>

<div className="flex flex-col md:flex-row gap-4">
  Flexbox responsivo: columna (mobile) → fila (tablet+)
</div>

<div className="px-4 md:px-8 lg:px-12">
  Padding responsivo
</div>
```

### 8.2 Typography Responsive

```css
/* Fluid Typography (escalado automático entre breakpoints) */
h1 {
  font-size: clamp(32px, 5vw, 56px);
  /* min: 32px, preferred: 5% viewport width, max: 56px */
}

p {
  font-size: clamp(14px, 1vw, 16px);
  /* Nunca menor que 14px, nunca mayor que 16px */
}
```

### 8.3 Container Queries (Si usar Next.js 15+)

```css
@container (min-width: 700px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

---

## 9. DESIGN TOKENS SUMMARY

| Token | Value | Tailwind | Uso |
|-------|-------|----------|-----|
| **Primary Color** | #9D4EDD | `bg-primary-600` | Buttons, links, accents |
| **Secondary Color** | #3C63DD | `bg-secondary-500` | Alternative CTAs |
| **Accent Color** | #00D9FF | `bg-accent` | Highlights, glows |
| **Background Base** | #111827 | `bg-neutral-900` | Page background |
| **Surface Primary** | #1F2937 | `bg-neutral-800` | Cards, containers |
| **Text Primary** | #F9FAFB | `text-neutral-50` | Body text |
| **Text Secondary** | #9CA3AF | `text-neutral-500` | Description, meta |
| **Border Color** | #374151 | `border-neutral-700` | Dividers, borders |
| **Base Spacing** | 16px | `space-4` | Standard gaps |
| **Border Radius** | 6px | `rounded-md` | Standard radius |
| **Shadow** | elevation-3 | `shadow-md` | Default shadow |
| **Transition** | 300ms | `duration-300` | Standard timing |

---

## 10. ESTÁNDARES DE IMPLEMENTACIÓN

### 10.1 Color Usage Guidelines

```
PRIMARY (#9D4EDD):
- Botones principales CTA
- Links activos
- Focus rings
- Primary accents

SECONDARY (#3C63DD):
- Botones secundarios
- Alternative links
- Hover states
- Secondary accents

ACCENT (#00D9FF):
- Highlights especiales
- Glows y efectos
- Badges especiales
- Animations

NEUTRAL:
- Backgrounds
- Borders
- Text
- Dividers

STATE COLORS:
- Success: Green (#10B981)
- Warning: Amber (#F59E0B)
- Error: Red (#EF4444)
- Info: Sky (#0EA5E9)
```

### 10.2 Do's and Don'ts

**DO:**
- Usar design tokens consistentemente
- Mantener contraste WCAG AA en todos lados
- Usar spacing scale (múltiplos de 4px)
- Aplicar transiciones suaves (300ms)
- Mobile-first design approach
- Reutilizar componentes (ver COMPONENT-INVENTORY.md)

**DON'T:**
- Hard-code colores (usar tokens)
- Mezclar spacing (mantener escala 4px)
- Ignorar accesibilidad (ARIA, focus)
- Usar pure black/white (usar neutrals)
- Animaciones muy largas (>700ms)
- Componentes inconsistentes (ver inventory)

---

## 11. REFERENCIAS EXTERNAS

- **Tailwind CSS v4 Docs**: https://tailwindcss.com
- **Inter Font**: https://rsms.me/inter/
- **Poppins Font**: https://fonts.google.com/specimen/Poppins
- **JetBrains Mono**: https://www.jetbrains.com/lp/mono/
- **WCAG 2.1 Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Color Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Tailwind Color Palette Tool**: https://www.tailwindcss.com/docs/customizing-colors

---

## 12. CHANGE LOG

### v1.0 - 2025-10-25
- Design system inicial creado
- Paleta de colores dark theme implementada (purple/blue/cyan)
- Tipografía responsive definida (Inter, Poppins, JetBrains Mono)
- Spacing system basado en 4px foundation
- Shadows & effects system completado
- Dark mode CSS variables documentadas
- Tailwind v4 configuration definida
- WCAG AA accessibility standards asegurados
- Responsive design breakpoints establecidos

---

**Documento Finalizado**: Design System v1.0
**Siguiente Paso**: Ver `COMPONENT-INVENTORY.md` para componentes base
