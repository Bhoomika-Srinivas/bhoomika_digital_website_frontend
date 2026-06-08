import { X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { formatINR } from '@/utils';
import { useCartStore } from '@/core-modules/cart-management/store/cart-store';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCartStore();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={cn(
          'fixed inset-0 z-50 bg-black/40 transition-opacity duration-200',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Panel */}
      <aside
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] bg-white flex flex-col',
          'transition-transform duration-300 ease-out shadow-2xl',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <ShoppingCart size={18} className="text-slate-700" />
            <h2 className="font-bold text-slate-900">
              Your Cart
              {items.length > 0 && (
                <span className="ml-2 text-sm font-normal text-slate-400">
                  ({items.length})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-5 px-6 py-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center">
                <ShoppingCart size={24} className="text-slate-300" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Your cart is empty</p>
                <p className="text-sm text-slate-400 mt-1">
                  Browse products and configure what you need.
                </p>
              </div>
              <button
                onClick={closeCart}
                className="h-10 px-5 bg-[#4338CA] text-white text-sm font-semibold rounded-xl hover:bg-[#3730A3] transition-colors"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-slate-50 px-4 py-2">
              {items.map((item) => (
                <li key={item.cartId} className="flex gap-4 py-4">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex-shrink-0 overflow-hidden flex items-center justify-center">
                    {item.product.image ? (
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ShoppingCart size={18} className="text-slate-300" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-slate-900 truncate">
                      {item.product.name}
                    </p>
                    {/* Specs */}
                    <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-0.5">
                      {item.config.size      && <span className="text-xs text-slate-400">{item.config.size}</span>}
                      {item.config.material  && <span className="text-xs text-slate-400">· {item.config.material}</span>}
                      {item.config.finish    && <span className="text-xs text-slate-400">· {item.config.finish}</span>}
                    </div>

                    <div className="flex items-center justify-between mt-2.5">
                      {/* Qty controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const n = item.config.quantity - 1;
                            if (n <= 0) removeItem(item.cartId);
                            else updateQuantity(item.cartId, n);
                          }}
                          className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="text-sm font-semibold text-slate-900 w-6 text-center">
                          {item.config.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.config.quantity + 1)}
                          className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <p className="text-sm font-bold text-slate-900">
                        {formatINR(item.totalPrice)}
                      </p>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.cartId)}
                    className="self-start mt-0.5 p-1 rounded text-slate-300 hover:text-red-400 transition-colors"
                    aria-label="Remove"
                  >
                    <Trash2 size={15} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-slate-100 px-5 py-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500 font-medium">Subtotal</span>
              <span className="text-lg font-black text-slate-900">
                {formatINR(subtotal())}
              </span>
            </div>
            <p className="text-xs text-slate-400">Shipping &amp; taxes calculated at checkout</p>

            <Link
              to="/checkout"
              onClick={closeCart}
              className="flex items-center justify-center w-full h-12 bg-[#F97316] text-white font-semibold text-sm rounded-xl hover:bg-[#EA6C0B] transition-colors"
            >
              Proceed to Checkout
            </Link>
            <Link
              to="/cart"
              onClick={closeCart}
              className="flex items-center justify-center w-full h-10 text-slate-600 text-sm font-medium border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
            >
              View full cart
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
