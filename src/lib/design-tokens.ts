/**
 * Design Tokens — Bhoomika Digital
 *
 * Single source of truth for the design system.
 * These values mirror the CSS variables in index.css.
 * Use these in JS/TS contexts; use Tailwind utilities in JSX.
 */

// ── Color palette ─────────────────────────────────────────────────────────────
export const colors = {
  primary:   '#4338CA',
  primaryHover: '#3730A3',
  accent:    '#F97316',
  accentHover: '#EA6C0B',

  background: '#FFFFFF',
  foreground: '#0F172A',

  muted:          '#F8FAFC',
  mutedForeground:'#64748B',

  border:  '#E2E8F0',
  input:   '#E2E8F0',
  ring:    '#4338CA',

  destructive: '#EF4444',
  success:     '#16A34A',
  warning:     '#F59E0B',
} as const;

// ── Radius scale ──────────────────────────────────────────────────────────────
export const radius = {
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
} as const;

// ── Spacing scale ─────────────────────────────────────────────────────────────
export const spacing = {
  2:  '0.5rem',    //  8px
  4:  '1rem',      // 16px
  6:  '1.5rem',    // 24px
  8:  '2rem',      // 32px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  24: '6rem',      // 96px
} as const;

// ── Typography scale ──────────────────────────────────────────────────────────
export const typography = {
  hero:         'text-5xl lg:text-7xl font-black tracking-tight',
  sectionTitle: 'text-3xl lg:text-4xl font-bold tracking-tight',
  cardTitle:    'text-xl font-semibold',
  body:         'text-base text-slate-600',
  caption:      'text-sm text-slate-500',
  label:        'text-xs font-semibold uppercase tracking-widest',
} as const;

// ── Layout ────────────────────────────────────────────────────────────────────
export const layout = {
  container: 'max-w-7xl mx-auto px-6 lg:px-8',
  section:   'py-16 lg:py-24',
} as const;

// ── Shadow scale ──────────────────────────────────────────────────────────────
export const shadows = {
  card:   '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
  cardHover: '0 8px 30px rgba(0,0,0,0.10)',
  button: '0 2px 8px rgba(67,56,202,0.25)',
} as const;

// ── Animation presets ─────────────────────────────────────────────────────────
export const animation = {
  fadeUp: {
    initial:   { opacity: 0, y: 24 },
    animate:   { opacity: 1, y: 0 },
    transition:{ duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  fadeIn: {
    initial:   { opacity: 0 },
    animate:   { opacity: 1 },
    transition:{ duration: 0.4 },
  },
  stagger: {
    animate: { transition: { staggerChildren: 0.08 } },
  },
} as const;
