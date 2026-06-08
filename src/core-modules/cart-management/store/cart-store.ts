import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, CartItemConfig, Product } from '@/shared/types/models';

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function calcUnitPrice(product: Product, quantity: number): number {
  if (!product.priceTiers || product.priceTiers.length === 0) {
    return product.basePrice;
  }
  // Find the best matching tier (highest tier qty that is <= selected quantity)
  const sorted = [...product.priceTiers].sort((a, b) => b.quantity - a.quantity);
  const tier = sorted.find((t) => quantity >= t.quantity);
  return tier ? tier.price : product.basePrice;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;

  addItem: (product: Product, config: CartItemConfig) => void;
  removeItem: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  updateConfig: (cartId: string, config: Partial<CartItemConfig>) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;

  totalItems: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, config) => {
        const unitPrice = calcUnitPrice(product, config.quantity);
        const totalPrice = unitPrice * config.quantity;
        const newItem: CartItem = {
          cartId: generateId(),
          product,
          config,
          unitPrice,
          totalPrice,
        };
        set((state) => ({ items: [...state.items, newItem], isOpen: true }));
      },

      removeItem: (cartId) =>
        set((state) => ({ items: state.items.filter((i) => i.cartId !== cartId) })),

      updateQuantity: (cartId, quantity) =>
        set((state) => ({
          items: state.items.map((item) => {
            if (item.cartId !== cartId) return item;
            const unitPrice = calcUnitPrice(item.product, quantity);
            return {
              ...item,
              config: { ...item.config, quantity },
              unitPrice,
              totalPrice: unitPrice * quantity,
            };
          }),
        })),

      updateConfig: (cartId, config) =>
        set((state) => ({
          items: state.items.map((item) => {
            if (item.cartId !== cartId) return item;
            const newConfig = { ...item.config, ...config };
            const unitPrice = calcUnitPrice(item.product, newConfig.quantity);
            return {
              ...item,
              config: newConfig,
              unitPrice,
              totalPrice: unitPrice * newConfig.quantity,
            };
          }),
        })),

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.config.quantity, 0),
      subtotal: () => get().items.reduce((sum, i) => sum + i.totalPrice, 0),
    }),
    {
      name: 'bd-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
