import { useCartStore } from '@/core-modules/cart-management/store/cart-store';
import { calcUnitPrice } from '@/utils';
import type { Product, CartItemConfig } from '@/types';

/**
 * Thin wrapper around the cart Zustand store.
 * Provides convenience helpers and computed values.
 */
export function useCart() {
  const store = useCartStore();

  function addToCart(product: Product, config: CartItemConfig) {
    store.addItem(product, config);
  }

  function getItemCount() {
    return store.totalItems();
  }

  function getSubtotal() {
    return store.subtotal();
  }

  function previewPrice(product: Product, quantity: number): number {
    return calcUnitPrice(product.basePrice, product.priceTiers, quantity);
  }

  return {
    items: store.items,
    isOpen: store.isOpen,
    addToCart,
    removeItem: store.removeItem,
    updateQuantity: store.updateQuantity,
    clearCart: store.clearCart,
    openCart: store.openCart,
    closeCart: store.closeCart,
    itemCount: getItemCount(),
    subtotal: getSubtotal(),
    previewPrice,
  };
}
