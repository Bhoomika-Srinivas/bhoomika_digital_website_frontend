// Re-export domain types from shared layer
export type {
  Category,
  CategorySlug,
  Subcategory,
  Product,
  ProductOptions,
  PriceTier,
  CartItemConfig,
  CartItem,
  Address,
  Order,
  OrderStatus,
} from '@/shared/types/models';

// ── UI types ──────────────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'accent' | 'outline' | 'ghost' | 'link';
export type ButtonSize    = 'sm' | 'md' | 'lg' | 'icon';

export type CardVariant = 'default' | 'bordered' | 'elevated';

export type SectionBackground = 'white' | 'muted' | 'primary' | 'dark';

// ── API types ─────────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
  hasNext: boolean;
}

// ── Form types ────────────────────────────────────────────────────────────────

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  category?: string;
}

export interface QuoteFormValues {
  name: string;
  email: string;
  phone: string;
  productName: string;
  quantity: number;
  notes?: string;
}
