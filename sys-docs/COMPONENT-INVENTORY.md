# Component Inventory - cjhirashi.com

**Versión**: 1.0
**Última Actualización**: 2025-10-25
**Framework**: React 19 + TypeScript + Tailwind v4
**Design System**: See `DESIGN-SYSTEM.md`

---

## Tabla de Contenidos

1. [Overview](#1-overview)
2. [Button](#2-button)
3. [Card](#3-card)
4. [Input](#4-input)
5. [Select](#5-select)
6. [Checkbox & Radio](#6-checkbox--radio)
7. [Badge & Tag](#7-badge--tag)
8. [Alert](#8-alert)
9. [Modal / Dialog](#9-modal--dialog)
10. [Navbar](#10-navbar)
11. [Footer](#11-footer)
12. [Loading Spinner](#12-loading-spinner)

---

## 1. OVERVIEW

### Component Architecture

```
Base Components (en este inventory)
    ↓
Composite Components (combinaciones de base)
    ↓
Page Components (página entera)
    ↓
App Features (features como chat, profile)
```

### Standards Aplicables a TODOS los Componentes

- **Props Types**: Siempre tipados con TypeScript
- **Accessibility**: ARIA labels, keyboard navigation, focus indicators
- **States**: default, hover, active, disabled, loading, focus
- **Responsive**: Mobile-first, responde a breakpoints
- **Dark Mode**: Diseñados para dark theme (DESIGN-SYSTEM.md)
- **Animations**: Transiciones 300ms con ease-in-out
- **Spacing**: Usar spacing scale (4px multiples)

---

## 2. BUTTON

### Propósito
Elemento interactivo para trigger de acciones, links, o navegación.

### Variants

```
primary   - CTA principal (purple #9D4EDD)
secondary - CTA secundario (blue #3C63DD)
ghost     - Minimal, solo texto/border
outline   - Outlined style con border
link      - Plain link style
danger    - Destructive action (red)
```

### Sizes

```
sm    - 24px height, px-3 py-1 (small buttons)
md    - 32px height, px-4 py-2 (standard - default)
lg    - 40px height, px-6 py-3 (emphasis)
```

### Props Interface

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Appearance
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'link' | 'danger';
  size?: 'sm' | 'md' | 'lg';

  // State
  disabled?: boolean;
  loading?: boolean;

  // Icon support
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // Styling
  className?: string;

  // Behavior
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
```

### Visual States

#### Primary Variant
```
Default:  bg-primary-600 text-white hover:bg-primary-700
          shadow-md
Active:   bg-primary-800 ring-2 ring-primary-500
Focus:    ring-2 ring-primary-600 ring-offset-2 ring-offset-neutral-900
Disabled: opacity-50 cursor-not-allowed
Hover:    scale-105 shadow-lg transition-all duration-300
```

#### Secondary Variant
```
Default:  bg-secondary-500 text-white hover:bg-secondary-600
Active:   bg-secondary-700
Focus:    ring-2 ring-secondary-600
Disabled: opacity-50 cursor-not-allowed
```

#### Ghost Variant
```
Default:  bg-transparent text-primary-600 hover:bg-neutral-800
Active:   bg-neutral-700 text-primary-500
Focus:    ring-2 ring-primary-500
Disabled: opacity-50 cursor-not-allowed
```

#### Outline Variant
```
Default:  border-2 border-primary-600 text-primary-600 bg-transparent
Hover:    border-primary-700 bg-primary-600/10
Active:   bg-primary-600/20 border-primary-700
Focus:    ring-2 ring-primary-600
Disabled: border-neutral-600 text-neutral-600 opacity-50
```

#### Link Variant
```
Default:  text-primary-600 underline hover:no-underline hover:text-primary-700
Active:   text-primary-800 no-underline
Focus:    ring-2 ring-primary-600 ring-offset-2
Disabled: text-neutral-600 opacity-50 no-underline
```

#### Danger Variant
```
Default:  bg-error-500 text-white hover:bg-error-600
Active:   bg-error-700
Focus:    ring-2 ring-error-600
Disabled: opacity-50 cursor-not-allowed
```

### Loading State

```
Loading:  disabled=true + spinner animation
          text hidden si buttonOnly, visible si con label
          aria-busy="true"
```

### Accessibility

```
- tabindex=0 (keyboard navigation)
- aria-label para buttons sin texto visible
- aria-disabled="true" cuando disabled
- aria-busy="true" cuando loading
- focus-visible ring con offset
- :disabled pseudo-class respected
```

### Examples

```tsx
// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
<Button variant="link">Link</Button>
<Button variant="danger">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Icons
<Button leftIcon={<Plus />}>New</Button>
<Button rightIcon={<ArrowRight />}>Continue</Button>

// States
<Button disabled>Disabled</Button>
<Button loading>Loading...</Button>

// Combinations
<Button
  variant="primary"
  size="lg"
  leftIcon={<Send />}
  onClick={handleSubmit}
>
  Send Message
</Button>
```

### Tailwind Classes Reference

```tsx
// Base button styles
"inline-flex items-center justify-center rounded-md font-medium
 transition-all duration-300 focus-visible:outline-none
 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900
 disabled:opacity-50 disabled:cursor-not-allowed"

// Primary variant
"bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800
 shadow-md hover:shadow-lg focus-visible:ring-primary-600"

// Secondary variant
"bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700
 focus-visible:ring-secondary-600"

// Ghost variant
"bg-transparent text-primary-600 hover:bg-neutral-800 active:bg-neutral-700
 focus-visible:ring-primary-500"

// Size: sm (24px)
"h-6 px-3 py-1 text-sm"

// Size: md (32px) - default
"h-8 px-4 py-2 text-base"

// Size: lg (40px)
"h-10 px-6 py-3 text-lg"
```

---

## 3. CARD

### Propósito
Container para organizar contenido relacionado. Base para muchos componentes.

### Variants

```
default   - Standard card con shadow
elevated  - Elevated card con shadow mayor
outlined  - Card con border, sin shadow
ghost     - Minimal card, transparent
interactive - Card que reacciona al hover
```

### Props Interface

```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Appearance
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost' | 'interactive';

  // Padding
  padding?: 'sm' | 'md' | 'lg';

  // Styling
  className?: string;

  // Children
  children: React.ReactNode;
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
```

### Sub-Components

```tsx
<Card>
  <Card.Header>     {/* padding-bottom inherited */}
    Title or Header Content
  </Card.Header>
  <Card.Body>       {/* main content area */}
    Content
  </Card.Body>
  <Card.Footer>     {/* padding-top inherited */}
    Actions or Footer
  </Card.Footer>
</Card>
```

### Visual States

#### Default Variant
```
bg-neutral-800 text-text-primary
border-none shadow-md (elevation-3)
rounded-lg hover:shadow-lg transition-shadow
```

#### Elevated Variant
```
bg-neutral-800 text-text-primary
shadow-xl (elevation-5)
rounded-lg hover:shadow-2xl transition-shadow
```

#### Outlined Variant
```
bg-transparent text-text-primary
border-2 border-neutral-700 (not shadow)
rounded-lg hover:border-primary-600 transition-colors
```

#### Ghost Variant
```
bg-transparent text-text-primary
border-none shadow-none
rounded-lg hover:bg-neutral-800/20 transition-colors
```

#### Interactive Variant
```
bg-neutral-800 text-text-primary
shadow-md hover:shadow-lg cursor-pointer
rounded-lg hover:scale-102 transition-transform duration-300
border-transparent hover:border-primary-600
```

### Responsive Padding

```
sm:  16px (p-4)
md:  24px (p-6) - default
lg:  32px (p-8)
```

### Accessibility

```
- Semantic <article> or <section> si appropriate
- role="presentation" si purely decorative
- Headings inside Card.Header si necesario
```

### Examples

```tsx
// Simple card
<Card>
  <p>Simple content</p>
</Card>

// Card con structure
<Card variant="elevated" padding="lg">
  <Card.Header>
    <h2 className="text-xl font-bold">Card Title</h2>
  </Card.Header>
  <Card.Body>
    <p>Card content goes here</p>
  </Card.Body>
  <Card.Footer className="flex gap-3">
    <Button variant="ghost">Cancel</Button>
    <Button variant="primary">Save</Button>
  </Card.Footer>
</Card>

// Interactive card
<Card
  variant="interactive"
  onClick={() => navigate('/article')}
  className="cursor-pointer"
>
  <Card.Header>
    <h3>Article Title</h3>
    <p className="text-text-secondary text-sm">By Author · 5 min read</p>
  </Card.Header>
  <Card.Body>
    <p>Article preview...</p>
  </Card.Body>
</Card>

// Outlined card
<Card variant="outlined">
  <Card.Header>
    <h3>Alert</h3>
  </Card.Header>
  <Card.Body>
    <p>Important information here</p>
  </Card.Body>
</Card>
```

### Tailwind Classes Reference

```tsx
// Base card
"rounded-lg transition-all duration-300"

// Default variant
"bg-neutral-800 text-text-primary shadow-md hover:shadow-lg"

// Elevated variant
"bg-neutral-800 text-text-primary shadow-xl hover:shadow-2xl"

// Outlined variant
"bg-transparent border-2 border-neutral-700 hover:border-primary-600"

// Ghost variant
"bg-transparent hover:bg-neutral-800/20"

// Interactive variant
"bg-neutral-800 shadow-md cursor-pointer hover:shadow-lg hover:scale-102"

// Padding: sm
"p-4"

// Padding: md
"p-6"

// Padding: lg
"p-8"

// Header + Body + Footer spacing
"space-y-4" // between sections
```

---

## 4. INPUT

### Propósito
Elemento de formulario para capturar entrada de usuario.

### Types Soportados

```
text, email, password, number, url, tel, search, date, datetime-local,
time, month, week, color, file, range, hidden
```

### Props Interface

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Layout
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;

  // State
  error?: boolean;
  disabled?: boolean;

  // Sizing
  size?: 'sm' | 'md' | 'lg';

  // Icons
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // Styling
  className?: string;

  // Callbacks
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
```

### Visual States

#### Default State
```
bg-neutral-900 border-2 border-neutral-700
text-text-primary placeholder:text-text-tertiary
rounded-md focus:border-primary-600 focus:ring-2 focus:ring-primary-600/30
transition-all duration-300
```

#### Focused State
```
border-primary-600 ring-2 ring-primary-600/30
bg-neutral-850 (slightly darker)
```

#### Error State
```
border-error-500 ring-2 ring-error-500/30
text-error-600 (label)
```

#### Disabled State
```
bg-neutral-900/50 border-neutral-700 opacity-50
cursor-not-allowed text-text-tertiary
```

#### Loading State (if applicable)
```
cursor-wait opacity-75
```

### With Label

```tsx
<div className="flex flex-col gap-2">
  <label htmlFor="email" className="text-sm font-medium">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    placeholder="you@example.com"
  />
  <p className="text-xs text-text-secondary">
    We'll never share your email
  </p>
</div>
```

### Sizes

```
sm:  24px height, px-3 py-1 text-sm
md:  32px height, px-4 py-2 text-base (default)
lg:  40px height, px-4 py-3 text-lg
```

### Accessibility

```
- <label htmlFor> connected a input id
- aria-label para inputs sin visible label
- aria-invalid="true" cuando error
- aria-describedby para helper/error text
- aria-disabled="true" cuando disabled
- focus-visible ring clara
```

### Examples

```tsx
// Simple input
<input
  type="text"
  placeholder="Enter your name"
  className="w-full bg-neutral-900 border-2 border-neutral-700
             text-text-primary px-4 py-2 rounded-md"
/>

// With label and helper
<div className="space-y-2">
  <label htmlFor="email" className="text-sm font-medium">
    Email
  </label>
  <input
    id="email"
    type="email"
    placeholder="you@example.com"
    className="w-full bg-neutral-900 border-2 border-neutral-700"
  />
  <p className="text-xs text-text-secondary">
    Valid email required
  </p>
</div>

// With error
<div className="space-y-2">
  <label htmlFor="password" className="text-sm font-medium">
    Password
  </label>
  <input
    id="password"
    type="password"
    className="w-full bg-neutral-900 border-2 border-error-500
               focus:ring-error-500/30"
  />
  <p className="text-xs text-error-500">
    Password must be at least 8 characters
  </p>
</div>

// With icons (left icon)
<div className="relative">
  <span className="absolute left-3 top-1/2 -translate-y-1/2">
    <Search className="w-4 h-4 text-text-secondary" />
  </span>
  <input
    type="search"
    placeholder="Search..."
    className="w-full pl-10 pr-4 py-2 bg-neutral-900 border-2 border-neutral-700"
  />
</div>

// Textarea
<textarea
  placeholder="Write your message..."
  rows={5}
  className="w-full bg-neutral-900 border-2 border-neutral-700
             text-text-primary px-4 py-2 rounded-md resize-none"
/>
```

### Tailwind Classes Reference

```tsx
// Base input
"w-full bg-neutral-900 border-2 border-neutral-700 text-text-primary
 placeholder:text-text-tertiary rounded-md transition-all duration-300
 focus:outline-none focus:border-primary-600 focus:ring-2
 focus:ring-primary-600/30"

// Size: sm (24px)
"h-6 px-3 py-1 text-sm"

// Size: md (32px) - default
"h-8 px-4 py-2 text-base"

// Size: lg (40px)
"h-10 px-4 py-3 text-lg"

// Error state
"border-error-500 focus:ring-error-500/30"

// Disabled state
"bg-neutral-900/50 opacity-50 cursor-not-allowed"

// With left icon (add padding)
"pl-10"

// With right icon (add padding)
"pr-10"
```

---

## 5. SELECT

### Propósito
Elemento dropdown para seleccionar una opción de una lista.

### Props Interface

```typescript
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  // Layout
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;

  // Options
  options: Array<{
    value: string | number;
    label: string;
    disabled?: boolean;
  }>;

  // State
  error?: boolean;
  disabled?: boolean;

  // Sizing
  size?: 'sm' | 'md' | 'lg';

  // Icons
  leftIcon?: React.ReactNode;

  // Styling
  className?: string;

  // Callbacks
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
```

### Visual States

#### Default State
```
bg-neutral-900 border-2 border-neutral-700
text-text-primary focus:border-primary-600 focus:ring-primary-600/30
rounded-md transition-all
Cursor: pointer
```

#### Focused State (Open)
```
border-primary-600 ring-2 ring-primary-600/30
Option hover: bg-primary-600/20
```

#### Disabled State
```
bg-neutral-900/50 cursor-not-allowed opacity-50
border-neutral-700
```

#### Error State
```
border-error-500 ring-error-500/30
```

### Examples

```tsx
// Simple select
<select defaultValue="">
  <option value="">Select an option</option>
  <option value="opt1">Option 1</option>
  <option value="opt2">Option 2</option>
</select>

// With label
<div className="space-y-2">
  <label htmlFor="category" className="text-sm font-medium">
    Category
  </label>
  <select
    id="category"
    defaultValue=""
    className="w-full bg-neutral-900 border-2 border-neutral-700
               text-text-primary px-4 py-2 rounded-md"
  >
    <option value="">Select category</option>
    <option value="tech">Technology</option>
    <option value="design">Design</option>
    <option value="business">Business</option>
  </select>
</div>

// With error
<select className="w-full border-error-500 border-2">
  <option value="">Select an option</option>
  <option value="opt1">Option 1</option>
</select>
<p className="text-xs text-error-500 mt-1">
  Please select a valid option
</p>
```

### Tailwind Classes Reference

```tsx
// Base select
"w-full bg-neutral-900 border-2 border-neutral-700 text-text-primary
 rounded-md px-4 py-2 transition-all duration-300 cursor-pointer
 focus:outline-none focus:border-primary-600 focus:ring-2
 focus:ring-primary-600/30"

// Error
"border-error-500 focus:ring-error-500/30"

// Disabled
"opacity-50 cursor-not-allowed bg-neutral-900/50"
```

---

## 6. CHECKBOX & RADIO

### Propósito
Elementos para selecciones binarias (checkbox) o mutually-exclusive (radio).

### Checkbox Props

```typescript
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  size?: 'sm' | 'md';
  indeterminate?: boolean;
  className?: string;
}
```

### Radio Props

```typescript
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  size?: 'sm' | 'md';
  className?: string;
}

interface RadioGroupProps {
  name: string;
  value?: string | number;
  options: Array<{
    value: string | number;
    label: string;
  }>;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
}
```

### Visual States

#### Checkbox Default
```
w-4 h-4 border-2 border-neutral-600 rounded-sm
bg-transparent cursor-pointer
checked: bg-primary-600 border-primary-600
checked::after: checkmark icon (white)
focus: ring-2 ring-primary-600/30
disabled: opacity-50 cursor-not-allowed
```

#### Radio Default
```
w-4 h-4 border-2 border-neutral-600 rounded-full
bg-transparent cursor-pointer
checked: border-primary-600 bg-primary-600
checked::after: inner circle (white, 2px radius)
focus: ring-2 ring-primary-600/30
disabled: opacity-50 cursor-not-allowed
```

### Examples

```tsx
// Simple checkbox
<div className="flex items-center gap-2">
  <input
    type="checkbox"
    id="agree"
    className="w-4 h-4 border-2 border-neutral-600 rounded-sm
               bg-transparent cursor-pointer
               checked:bg-primary-600 checked:border-primary-600
               focus:ring-2 focus:ring-primary-600/30"
  />
  <label htmlFor="agree" className="text-sm cursor-pointer">
    I agree to the terms
  </label>
</div>

// Radio group
<fieldset className="space-y-3">
  <legend className="text-sm font-medium">Choose an option</legend>
  <div className="flex items-center gap-2">
    <input
      type="radio"
      id="opt1"
      name="choice"
      value="option1"
      defaultChecked
      className="w-4 h-4 border-2 border-neutral-600 rounded-full"
    />
    <label htmlFor="opt1" className="text-sm">Option 1</label>
  </div>
  <div className="flex items-center gap-2">
    <input
      type="radio"
      id="opt2"
      name="choice"
      value="option2"
      className="w-4 h-4 border-2 border-neutral-600 rounded-full"
    />
    <label htmlFor="opt2" className="text-sm">Option 2</label>
  </div>
</fieldset>

// Checkbox with helper text
<div className="space-y-2">
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      id="newsletter"
      className="w-4 h-4 border-2 border-neutral-600 rounded-sm"
    />
    <label htmlFor="newsletter" className="text-sm font-medium">
      Subscribe to newsletter
    </label>
  </div>
  <p className="text-xs text-text-secondary ml-6">
    We send updates once a month
  </p>
</div>
```

### Tailwind Classes Reference

```tsx
// Checkbox base
"w-4 h-4 border-2 border-neutral-600 rounded-sm bg-transparent
 cursor-pointer transition-all duration-300
 checked:bg-primary-600 checked:border-primary-600
 focus:ring-2 focus:ring-primary-600/30 focus:outline-none
 disabled:opacity-50 disabled:cursor-not-allowed"

// Radio base
"w-4 h-4 border-2 border-neutral-600 rounded-full bg-transparent
 cursor-pointer transition-all duration-300
 checked:border-primary-600 checked:bg-primary-600
 focus:ring-2 focus:ring-primary-600/30
 disabled:opacity-50 disabled:cursor-not-allowed"

// Checkbox/Radio group wrapper
"flex flex-col gap-3"

// Label with checkbox/radio
"flex items-center gap-2 cursor-pointer"
```

---

## 7. BADGE & TAG

### Propósito
Elementos pequeños para etiquetar, categorizar o marcar estado.

### Badge Props

```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  // Appearance
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';

  // Content
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // Styling
  className?: string;
}

interface TagProps extends BadgeProps {
  // Tag-specific
  removable?: boolean;
  onRemove?: () => void;
}
```

### Badge Variants

```
default   - Gray, neutral (bg-neutral-700)
primary   - Purple, main accent (bg-primary-600)
secondary - Blue (bg-secondary-500)
success   - Green (bg-success-500)
warning   - Amber (bg-warning-500)
error     - Red (bg-error-500)
info      - Sky (bg-info-500)
```

### Visual States

#### Badge Default
```
bg-neutral-700 text-neutral-50 px-3 py-1 rounded-md text-xs
font-medium whitespace-nowrap inline-flex items-center gap-2
```

#### Badge Primary
```
bg-primary-600 text-white px-3 py-1 rounded-md text-xs
font-medium
```

#### Badge Success
```
bg-success-500 text-white px-3 py-1 rounded-md text-xs
```

#### Tag (Removable Badge)
```
Similar to Badge pero with 'x' icon
onClick del 'x' triggers onRemove callback
```

### Sizes

```
sm: px-2 py-0.5 text-xs
md: px-3 py-1 text-xs (default)
```

### Examples

```tsx
// Simple badge
<span className="inline-flex items-center gap-2 bg-neutral-700
                 text-neutral-50 px-3 py-1 rounded-md text-xs font-medium">
  Development
</span>

// Primary badge
<span className="inline-flex items-center gap-2 bg-primary-600
                 text-white px-3 py-1 rounded-md text-xs font-medium">
  In Progress
</span>

// With icon
<span className="inline-flex items-center gap-2 bg-success-500
                 text-white px-3 py-1 rounded-md text-xs font-medium">
  <Check className="w-3 h-3" />
  Verified
</span>

// Badge group (multiple badges)
<div className="flex flex-wrap gap-2">
  <span className="bg-primary-600 text-white px-3 py-1 rounded-md text-xs">
    React
  </span>
  <span className="bg-secondary-500 text-white px-3 py-1 rounded-md text-xs">
    TypeScript
  </span>
  <span className="bg-primary-600 text-white px-3 py-1 rounded-md text-xs">
    Tailwind
  </span>
</div>

// Tag (removable)
<div className="inline-flex items-center gap-2 bg-primary-600
               text-white px-3 py-1 rounded-md text-xs">
  JavaScript
  <button
    onClick={() => removeTag('javascript')}
    className="hover:opacity-80 transition"
  >
    <X className="w-3 h-3" />
  </button>
</div>

// Error badge
<span className="bg-error-500 text-white px-3 py-1 rounded-md text-xs">
  Failed
</span>

// Warning badge
<span className="bg-warning-500 text-white px-3 py-1 rounded-md text-xs">
  Pending
</span>
```

### Tailwind Classes Reference

```tsx
// Base badge
"inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs
 font-medium whitespace-nowrap"

// Variant: default
"bg-neutral-700 text-neutral-50"

// Variant: primary
"bg-primary-600 text-white"

// Variant: success
"bg-success-500 text-white"

// Variant: error
"bg-error-500 text-white"

// Variant: warning
"bg-warning-500 text-white"

// Size: sm
"px-2 py-0.5 text-xs"

// Size: md
"px-3 py-1 text-xs"
```

---

## 8. ALERT

### Propósito
Mensaje importante para usuario (info, success, warning, error).

### Props Interface

```typescript
interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  // Type
  variant?: 'info' | 'success' | 'warning' | 'error';

  // Content
  title?: string;
  description?: string;
  children?: React.ReactNode;

  // Actions
  dismissible?: boolean;
  onDismiss?: () => void;

  // Styling
  className?: string;
}
```

### Alert Variants

#### Info Alert
```
bg-info-50 border-2 border-info-500 text-text-primary
Icon: info circle (cyan)
```

#### Success Alert
```
bg-success-50 border-2 border-success-500 text-text-primary
Icon: check circle (green)
```

#### Warning Alert
```
bg-warning-50 border-2 border-warning-500 text-text-primary
Icon: warning triangle (amber)
```

#### Error Alert
```
bg-error-50 border-2 border-error-500 text-text-primary
Icon: error circle (red)
```

### Visual States

```
Default:  Border + icon + title + description
Hover:    background slightly darker (20% opacity increase)
Focused:  ring-2 ring-offset-2 if interactive (dismiss button)
Dismissed: fadeOut animation 300ms, remove from DOM
```

### Examples

```tsx
// Simple info alert
<div className="flex gap-3 bg-info-50 border-2 border-info-500
                rounded-md p-4">
  <Info className="w-5 h-5 text-info-500 flex-shrink-0" />
  <div>
    <p className="text-sm font-medium">Info</p>
    <p className="text-sm text-text-secondary">
      This is an informational message for the user.
    </p>
  </div>
</div>

// Success alert with title
<div className="flex gap-3 bg-success-50 border-2 border-success-500
                rounded-md p-4">
  <Check className="w-5 h-5 text-success-500 flex-shrink-0" />
  <div>
    <p className="text-sm font-semibold">Success!</p>
    <p className="text-sm text-text-secondary">
      Your changes have been saved successfully.
    </p>
  </div>
</div>

// Warning alert with dismiss
<div className="flex gap-3 bg-warning-50 border-2 border-warning-500
                rounded-md p-4 justify-between">
  <div className="flex gap-3">
    <AlertTriangle className="w-5 h-5 text-warning-500 flex-shrink-0" />
    <div>
      <p className="text-sm font-medium">Warning</p>
      <p className="text-sm text-text-secondary">
        This action cannot be undone.
      </p>
    </div>
  </div>
  <button
    onClick={dismissAlert}
    className="text-text-secondary hover:text-text-primary"
  >
    <X className="w-4 h-4" />
  </button>
</div>

// Error alert
<div className="flex gap-3 bg-error-50 border-2 border-error-500
                rounded-md p-4">
  <AlertCircle className="w-5 h-5 text-error-500 flex-shrink-0" />
  <div>
    <p className="text-sm font-semibold">Error</p>
    <p className="text-sm text-text-secondary">
      Something went wrong. Please try again.
    </p>
  </div>
</div>
```

### Tailwind Classes Reference

```tsx
// Base alert
"flex gap-3 rounded-md p-4 border-2"

// Info variant
"bg-info-50 border-info-500"

// Success variant
"bg-success-50 border-success-500"

// Warning variant
"bg-warning-50 border-warning-500"

// Error variant
"bg-error-50 border-error-500"

// Icon styling (shared)
"w-5 h-5 flex-shrink-0"

// Title
"text-sm font-semibold"

// Description
"text-sm text-text-secondary mt-1"

// Dismiss button
"text-text-secondary hover:text-text-primary transition"
```

---

## 9. MODAL / DIALOG

### Propósito
Overlay modal para mostrar contenido importante o forms en primer plano.

### Props Interface

```typescript
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  // State
  isOpen: boolean;
  onClose: () => void;

  // Content
  title?: string;
  description?: string;
  children?: React.ReactNode;

  // Behavior
  closeOnEscape?: boolean;
  closeOnBackdropClick?: boolean;

  // Size
  size?: 'sm' | 'md' | 'lg' | 'xl';

  // Styling
  className?: string;
}
```

### Modal Structure

```tsx
<Modal isOpen={isOpen} onClose={handleClose}>
  <Modal.Header>
    <Modal.Title>Dialog Title</Modal.Title>
    <Modal.Close />
  </Modal.Header>
  <Modal.Body>
    Content goes here
  </Modal.Body>
  <Modal.Footer>
    <Button variant="ghost">Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </Modal.Footer>
</Modal>
```

### Visual States

#### Backdrop
```
bg-black/75 backdrop-blur-sm
Fixed positioning, full viewport
z-index: 40 (below modal)
```

#### Modal Container
```
bg-neutral-800 border-2 border-neutral-700 rounded-xl
shadow-2xl z-index: 50
Size by variant:
  sm:  400px
  md:  500px (default)
  lg:  600px
  xl:  700px
```

#### Modal Close Button
```
Positioned top-right, transparent button
Icon: X (gray-500)
Hover: gray-400
```

### Examples

```tsx
// Simple modal
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Header>
    <Modal.Title>Confirm Action</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Are you sure you want to proceed?</p>
  </Modal.Body>
  <Modal.Footer className="flex gap-3 justify-end">
    <Button variant="ghost" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleConfirm}>
      Confirm
    </Button>
  </Modal.Footer>
</Modal>

// Form modal
<Modal isOpen={isFormOpen} onClose={closeForm} size="lg">
  <Modal.Header>
    <Modal.Title>Create New Post</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form className="space-y-4">
      <div>
        <label className="text-sm font-medium">Title</label>
        <input type="text" className="w-full mt-2" />
      </div>
      <div>
        <label className="text-sm font-medium">Content</label>
        <textarea className="w-full mt-2" rows={6} />
      </div>
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="ghost">Cancel</Button>
    <Button variant="primary">Publish</Button>
  </Modal.Footer>
</Modal>

// Fullscreen modal on mobile
<Modal isOpen={isOpen} onClose={handleClose} size="md">
  {/* Content */}
</Modal>
// Add responsive: max-w-[95vw] sm:max-w-[500px]
```

### Accessibility

```
- role="dialog" on modal container
- aria-labelledby="modal-title" pointing to title
- aria-modal="true"
- Focus trap within modal (Tab cycles through focusable elements)
- ESC key closes modal (if closeOnEscape=true)
- Backdrop click closes (if closeOnBackdropClick=true)
- Initial focus on close button o first input
```

### Tailwind Classes Reference

```tsx
// Backdrop
"fixed inset-0 bg-black/75 backdrop-blur-sm z-40"

// Modal Container
"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
 bg-neutral-800 border-2 border-neutral-700 rounded-xl shadow-2xl z-50
 max-h-[90vh] overflow-y-auto"

// Modal Size: sm (400px)
"w-full sm:w-[400px]"

// Modal Size: md (500px) - default
"w-full sm:w-[500px]"

// Modal Size: lg (600px)
"w-full sm:w-[600px]"

// Modal Header
"border-b border-neutral-700 px-6 py-4 flex items-center justify-between"

// Modal Title
"text-lg font-bold"

// Modal Body
"px-6 py-4"

// Modal Footer
"border-t border-neutral-700 px-6 py-4 flex items-center justify-end gap-3"
```

---

## 10. NAVBAR

### Propósito
Navegación principal del sitio. Header con logo, links, y acciones.

### Props Interface

```typescript
interface NavbarProps {
  logo?: React.ReactNode;
  links?: Array<{
    href: string;
    label: string;
    active?: boolean;
  }>;
  actions?: React.ReactNode;
  sticky?: boolean;
  className?: string;
}
```

### Navbar Layout

```
┌─────────────────────────────────────────────────┐
│ Logo    │  Home  Blog  Projects  │  GitHub  ⊙  │
└─────────────────────────────────────────────────┘
```

### Visual States

#### Desktop Layout
```
flex items-center justify-between px-6 lg:px-12 py-4
logo (left) | nav-links (center) | actions (right)
gap-8 between sections
```

#### Mobile Layout (< md)
```
Menu icon visible, nav collapses to hamburger
Links appear in drawer/modal on mobile
py-3 px-4 (tighter spacing)
```

#### Link States
```
Default: text-text-secondary hover:text-primary-600
Active: text-primary-600 border-b-2 border-primary-600
```

### Examples

```tsx
// Basic navbar
<nav className="flex items-center justify-between bg-neutral-900
               border-b border-neutral-700 px-6 py-4 sticky top-0 z-40">
  <a href="/" className="text-xl font-bold text-primary-600">
    Charlie
  </a>

  <div className="hidden md:flex gap-8">
    <a href="/" className="text-text-secondary hover:text-primary-600">
      Home
    </a>
    <a href="/blog" className="text-text-secondary hover:text-primary-600">
      Blog
    </a>
    <a href="/projects" className="text-text-secondary hover:text-primary-600">
      Projects
    </a>
  </div>

  <div className="flex gap-4 items-center">
    <a href="https://github.com" className="text-text-secondary
                                          hover:text-primary-600">
      <Github className="w-5 h-5" />
    </a>
    <button className="text-text-secondary hover:text-text-primary">
      <Menu className="w-5 h-5 md:hidden" />
    </button>
  </div>
</nav>

// Advanced navbar with dropdown
<nav className="bg-neutral-900 border-b border-neutral-700 sticky top-0 z-40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <a href="/" className="flex-shrink-0 text-xl font-bold text-primary-600">
        cjhirashi
      </a>

      {/* Links - Hidden on mobile */}
      <div className="hidden md:flex gap-8">
        <NavLink href="/" active>Home</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/about">About</NavLink>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <a href="https://github.com/cjhirashi">
          <Github className="w-5 h-5" />
        </a>
        <MobileMenu />
      </div>
    </div>
  </div>
</nav>
```

### Tailwind Classes Reference

```tsx
// Base navbar
"bg-neutral-900 border-b border-neutral-700 sticky top-0 z-40"

// Container
"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Navbar inner
"flex items-center justify-between h-16"

// Logo
"text-xl font-bold text-primary-600"

// Nav links container (hidden on mobile)
"hidden md:flex gap-8"

// Individual link
"text-text-secondary hover:text-primary-600 transition-colors"

// Active link
"text-primary-600 border-b-2 border-primary-600"

// Actions container
"flex items-center gap-4"
```

---

## 11. FOOTER

### Propósito
Pie de página con links, información, y copyright.

### Props Interface

```typescript
interface FooterProps {
  sections?: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  social?: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  copyright?: string;
  className?: string;
}
```

### Footer Layout

```
┌─────────────────────────────────────────────┐
│                                             │
│  Section 1     Section 2     Section 3      │
│  - Link 1      - Link 1      - Link 1       │
│  - Link 2      - Link 2      - Link 2       │
│                                             │
│  ──────────────────────────────────────    │
│  Copyright © 2025 · Follow: [social icons] │
│                                             │
└─────────────────────────────────────────────┘
```

### Visual States

```
bg-neutral-850 text-text-secondary
border-t-2 border-neutral-700
padding: py-12 px-6 lg:px-12
Links: hover:text-primary-600 transition
```

### Examples

```tsx
// Simple footer
<footer className="bg-neutral-850 border-t-2 border-neutral-700 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center text-text-secondary text-sm">
      <p>Copyright © 2025 cjhirashi.com. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:text-primary-600">GitHub</a>
        <a href="#" className="hover:text-primary-600">LinkedIn</a>
        <a href="#" className="hover:text-primary-600">Twitter</a>
      </div>
    </div>
  </div>
</footer>

// Advanced footer with sections
<footer className="bg-neutral-850 border-t-2 border-neutral-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Main sections */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {/* Product section */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-4">
          Product
        </h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li>
            <a href="#" className="hover:text-primary-600 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary-600 transition">
              Pricing
            </a>
          </li>
        </ul>
      </div>

      {/* Resources section */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-4">
          Resources
        </h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li>
            <a href="#" className="hover:text-primary-600 transition">
              Documentation
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary-600 transition">
              Community
            </a>
          </li>
        </ul>
      </div>

      {/* Company section */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-4">
          Company
        </h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li>
            <a href="#" className="hover:text-primary-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary-600 transition">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-neutral-700 pt-8">
      {/* Bottom section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-text-secondary">
          Copyright © 2025 cjhirashi. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-text-secondary hover:text-primary-600">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-text-secondary hover:text-primary-600">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-text-secondary hover:text-primary-600">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

### Tailwind Classes Reference

```tsx
// Base footer
"bg-neutral-850 border-t-2 border-neutral-700"

// Container
"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"

// Sections grid
"grid grid-cols-1 md:grid-cols-3 gap-8"

// Section title
"text-sm font-semibold text-text-primary mb-4"

// Section links
"space-y-2 text-sm text-text-secondary"

// Link
"hover:text-primary-600 transition-colors"

// Divider
"border-t border-neutral-700 pt-8"

// Bottom section
"flex flex-col md:flex-row items-center justify-between"

// Social icons
"flex gap-4 text-text-secondary hover:text-primary-600"
```

---

## 12. LOADING SPINNER

### Propósito
Indicador visual de carga asincrónica (API calls, data loading, etc).

### Props Interface

```typescript
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent';
  label?: string;
  fullScreen?: boolean;
  className?: string;
}
```

### Visual States

#### Small Spinner (sm)
```
w-4 h-4 border-2 border-neutral-700 border-t-2 border-t-primary-600
Rotating animation (spin 1s linear infinite)
```

#### Medium Spinner (md) - Default
```
w-8 h-8 border-4 border-neutral-700 border-t-4 border-t-primary-600
Rotating animation
```

#### Large Spinner (lg)
```
w-12 h-12 border-4 border-neutral-700 border-t-4 border-t-primary-600
Rotating animation
```

#### Fullscreen Spinner
```
fixed inset-0 flex items-center justify-center
bg-neutral-900/50 backdrop-blur-sm z-50
Large spinner (lg) centered
Optional label below
```

### Examples

```tsx
// Inline spinner
<div className="flex items-center gap-2">
  <div className="w-4 h-4 border-2 border-neutral-700 border-t-primary-600
                  rounded-full animate-spin" />
  <span className="text-sm">Loading...</span>
</div>

// Medium spinner (default)
<div className="flex items-center justify-center py-8">
  <div className="w-8 h-8 border-4 border-neutral-700 border-t-primary-600
                  rounded-full animate-spin" />
</div>

// Large spinner with label
<div className="flex flex-col items-center justify-center gap-4">
  <div className="w-12 h-12 border-4 border-neutral-700 border-t-primary-600
                  rounded-full animate-spin" />
  <p className="text-text-secondary">Loading your data...</p>
</div>

// Fullscreen spinner
<div className="fixed inset-0 flex items-center justify-center
               bg-neutral-900/50 backdrop-blur-sm z-50">
  <div className="flex flex-col items-center gap-4">
    <div className="w-12 h-12 border-4 border-neutral-700 border-t-primary-600
                    rounded-full animate-spin" />
    <p className="text-text-secondary">Processing...</p>
  </div>
</div>

// Inside a button (loading state)
<button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white">
  {isLoading ? (
    <>
      <div className="w-4 h-4 border-2 border-white border-t-transparent
                      rounded-full animate-spin" />
      <span>Saving...</span>
    </>
  ) : (
    <span>Save</span>
  )}
</button>
```

### Tailwind Classes Reference

```tsx
// Base spinner
"rounded-full animate-spin"

// Size: sm (4px)
"w-4 h-4 border-2 border-neutral-700 border-t-2 border-t-primary-600"

// Size: md (8px) - default
"w-8 h-8 border-4 border-neutral-700 border-t-4 border-t-primary-600"

// Size: lg (12px)
"w-12 h-12 border-4 border-neutral-700 border-t-4 border-t-primary-600"

// With label
"flex flex-col items-center justify-center gap-4"

// Fullscreen overlay
"fixed inset-0 flex items-center justify-center
 bg-neutral-900/50 backdrop-blur-sm z-50"
```

---

## COMPONENT STATE MANAGEMENT

### Props Pattern (Recommended)

```typescript
// Controlled component
<Input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  errorMessage="Please enter valid email"
/>
```

### Hook Pattern (For Complex Components)

```typescript
const [state, setState] = useState();
const { open, close } = useModal();
const { theme, toggle } = useTheme();
```

---

## COMPOSITION PATTERNS

### Button + Icon

```tsx
<button className="inline-flex items-center gap-2 px-4 py-2">
  <Plus className="w-4 h-4" />
  <span>Add New</span>
</button>
```

### Input + Label + Helper

```tsx
<div className="space-y-2">
  <label className="text-sm font-medium">Email</label>
  <input className="w-full" />
  <p className="text-xs text-text-secondary">Enter valid email</p>
</div>
```

### Card + Content

```tsx
<Card>
  <Card.Header>
    <h2>Title</h2>
  </Card.Header>
  <Card.Body>
    Content
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

### Alert + Dismissible

```tsx
{showAlert && (
  <Alert variant="info" dismissible onDismiss={() => setShowAlert(false)}>
    <p>Important message</p>
  </Alert>
)}
```

---

## ACCESSIBILITY CHECKLIST

Por cada componente:

- [ ] **Semantic HTML**: Uso correcto de `<button>`, `<input>`, `<label>`, etc
- [ ] **ARIA Labels**: `aria-label`, `aria-labelledby`, `aria-describedby` donde aplique
- [ ] **Focus Management**: Focus visible, focus trap (modals), focus restoration
- [ ] **Keyboard Navigation**: Tab, Shift+Tab, Enter, Escape, Arrow Keys funcionales
- [ ] **Color Contrast**: WCAG AA (4.5:1 text, 3:1 elements)
- [ ] **Text Alternatives**: Alt text para imágenes, aria-label para iconos
- [ ] **State Communication**: aria-pressed, aria-selected, aria-disabled, aria-busy
- [ ] **Testing**: Screen reader testing (NVDA, JAWS, VoiceOver)

---

## RESPONSIVE DESIGN RULES

Para cada componente:

- [ ] **Mobile-first approach**: Diseño base para mobile
- [ ] **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- [ ] **Fluid sizing**: `clamp()` para typography responsiva
- [ ] **Touch targets**: Mínimo 44x44px en mobile
- [ ] **Spacing adjustment**: Reduce padding/margin en mobile
- [ ] **Layout shift**: Usar CSS Grid/Flexbox para layouts adaptativos
- [ ] **Testing**: Test en multiple device sizes

---

## NEXT STEPS (Para el Coder)

1. Implementar componentes base en `src/components/ui/`
2. Crear Storybook stories para cada componente
3. Escribir tests (Jest + React Testing Library)
4. Documentar props en JSDoc comments
5. Crear composite components (formularios, tarjetas, secciones)
6. Integrar en página principal del portfolio

---

## REFERENCE CHECKLIST

- [ ] Design System (`DESIGN-SYSTEM.md`) - Colores, tipografía, espaciado
- [ ] Component Inventory (`COMPONENT-INVENTORY.md`) - Este documento
- [ ] Tailwind v4 Config - Colors, spacing, custom utilities
- [ ] Accesibilidad - WCAG 2.1 AA compliance
- [ ] Responsive - Mobile-first design
- [ ] Dark Mode - CSS variables, Tailwind dark: prefix

---

**Document Status**: COMPLETO - Ready for Implementation
**Última Actualización**: 2025-10-25
**Version**: 1.0

Para implementación, ver `DESIGN-SYSTEM.md` para tokens y referencia de Tailwind config.
