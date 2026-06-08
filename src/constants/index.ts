// ── App-wide constants ────────────────────────────────────────────────────────

export const APP_NAME = 'Bhoomika Digital';
export const APP_TAGLINE = 'Your Printing Partner in Hyderabad';
export const APP_PHONE = '+91-99999-99999';
export const APP_EMAIL = 'hello@bhoomika.in';
export const APP_ADDRESS = 'Hyderabad, Telangana, India';
export const WHATSAPP_NUMBER = '919999999999';

// ── SEO ───────────────────────────────────────────────────────────────────────
export const DEFAULT_TITLE = 'Bhoomika Digital — Premium Printing in Hyderabad';
export const DEFAULT_DESCRIPTION =
  'Professional printing services in Hyderabad: business cards, banners, signage, brochures, exhibition solutions, apparel printing and more. Fast turnaround, premium quality.';

// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'All Products',        href: '/' },
  { label: 'Business Stationery', href: '/category/business-stationery' },
  { label: 'Marketing Prints',    href: '/category/marketing-promotional' },
  { label: 'Corporate Branding',  href: '/category/corporate-branding' },
  { label: 'Exhibition',          href: '/category/exhibition-event' },
  { label: 'Signage & Glow',      href: '/category/signage-glow' },
  { label: 'Apparel',             href: '/category/apparel-accessories' },
  { label: 'Photo & Decor',       href: '/category/photo-wall-decor' },
  { label: 'About',               href: '/about' },
  { label: 'Contact',             href: '/contact' },
] as const;

// ── Trust stats ───────────────────────────────────────────────────────────────
export const TRUST_STATS = [
  { value: '500+',  label: 'Businesses Served' },
  { value: '50K+',  label: 'Orders Fulfilled' },
  { value: '4.9★',  label: 'Average Rating' },
  { value: '24hr',  label: 'Express Delivery' },
] as const;

// ── How it works ──────────────────────────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Configure',
    description: 'Choose your size, material, finish and quantity.',
    icon: 'tune',
  },
  {
    step: 2,
    title: 'Upload Design',
    description: 'Upload your artwork or we help you create one.',
    icon: 'upload_file',
  },
  {
    step: 3,
    title: 'Approve Proof',
    description: 'Review a digital proof before we print.',
    icon: 'thumb_up',
  },
  {
    step: 4,
    title: 'Get Delivered',
    description: 'Premium prints at your doorstep, on time.',
    icon: 'local_shipping',
  },
] as const;

// ── File upload ───────────────────────────────────────────────────────────────
export const ACCEPTED_DESIGN_FORMATS = '.pdf,.ai,.psd,.png,.jpg,.jpeg,.svg,.eps';
export const MAX_UPLOAD_SIZE_MB = 100;
