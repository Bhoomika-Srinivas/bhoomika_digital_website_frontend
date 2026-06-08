export type CategorySlug =
  | 'business-stationery'
  | 'certificates-awards'
  | 'marketing-promotional'
  | 'corporate-branding'
  | 'exhibition-event'
  | 'signage-glow'
  | 'glass-film'
  | 'apparel-accessories'
  | 'photo-wall-decor';

export interface Subcategory {
  name: string;
  slug: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface PriceTier {
  quantity: number;
  price: number; // price per unit at this tier
}

export interface ProductOptions {
  sizes?: string[];
  materials?: string[];
  finishes?: string[];
  quantities: number[];
  colors?: string[];
  printPositions?: string[];
  variants?: Record<string, string[]>;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categorySlug: CategorySlug;
  subcategorySlug: string;
  description: string;
  basePrice: number; // starting price shown on card
  unit: string; // e.g. 'per 100 pcs', 'per sq ft', 'per piece'
  image?: string;
  options: ProductOptions;
  priceTiers?: PriceTier[]; // tiered pricing by quantity
}

export interface CartItemConfig {
  size?: string;
  material?: string;
  finish?: string;
  quantity: number;
  color?: string;
  printPosition?: string;
  designFileName?: string;
  customNote?: string;
  variant?: Record<string, string>;
}

export interface CartItem {
  cartId: string;
  product: Product;
  config: CartItemConfig;
  unitPrice: number;
  totalPrice: number;
}

export interface Address {
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'in-production'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export interface Order {
  id: string;
  items: CartItem[];
  status: OrderStatus;
  totalAmount: number;
  shippingAddress: Address;
  createdAt: string;
}
