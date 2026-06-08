import { format, formatDistance } from 'date-fns';

// ── Currency ──────────────────────────────────────────────────────────────────

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatINRCompact(amount: number): string {
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
  if (amount >= 1000)   return `₹${(amount / 1000).toFixed(1)}K`;
  return formatINR(amount);
}

// ── Date ──────────────────────────────────────────────────────────────────────

export function formatDate(date: string | Date): string {
  return format(new Date(date), 'dd MMM yyyy');
}

export function formatDateRelative(date: string | Date): string {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
}

// ── Slug ──────────────────────────────────────────────────────────────────────

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
}

// ── String ────────────────────────────────────────────────────────────────────

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 1) + '…';
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// ── Pricing ───────────────────────────────────────────────────────────────────

export function calcUnitPrice(
  basePrice: number,
  priceTiers: { quantity: number; price: number }[] | undefined,
  quantity: number
): number {
  if (!priceTiers || priceTiers.length === 0) return basePrice;
  const sorted = [...priceTiers].sort((a, b) => b.quantity - a.quantity);
  const tier = sorted.find((t) => quantity >= t.quantity);
  return tier ? tier.price : basePrice;
}

// ── File ──────────────────────────────────────────────────────────────────────

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ── WhatsApp ──────────────────────────────────────────────────────────────────

export function getWhatsAppLink(phone: string, message?: string): string {
  const encoded = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${phone}${encoded ? `?text=${encoded}` : ''}`;
}
