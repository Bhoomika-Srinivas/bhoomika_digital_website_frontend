import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { formatINR } from '@/utils';
import { getProductImage } from '@/shared/data/product-images';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const imageSrc = product.image ?? getProductImage(product.slug);

  return (
    <Link
      to={`/category/${product.categorySlug}/${product.slug}`}
      className={cn('group flex flex-col', className)}
    >
      {/* Display case — light gray, image floats inside */}
      <div className="relative bg-[#f5f5f5] rounded-xl overflow-hidden aspect-square flex items-center justify-center p-6 group-hover:shadow-[0_6px_28px_rgba(0,0,0,0.11)] transition-shadow duration-300">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-400 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 w-full h-full">
            {/* Placeholder grid */}
            <div className="grid grid-cols-3 gap-1.5 opacity-[0.12]">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-8 h-8 bg-slate-400 rounded" />
              ))}
            </div>
            <p className="text-xs font-medium text-slate-400 text-center leading-snug max-w-[80%]">
              {product.name}
            </p>
          </div>
        )}
      </div>

      {/* Label */}
      <div className="pt-4 pb-2 text-center px-1">
        <h3 className="font-semibold text-[15px] text-slate-900 leading-snug mb-1 group-hover:text-secondary transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-[13px] text-slate-500">
          Starting at{' '}
          <span className="font-medium text-slate-700">{formatINR(product.basePrice)}</span>
        </p>
      </div>
    </Link>
  );
}
