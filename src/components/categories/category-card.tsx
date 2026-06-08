import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Category } from '@/types';

// Color themes per category (gradient pairs)
const CATEGORY_THEMES: Record<string, { from: string; to: string }> = {
  'business-stationery':  { from: '#EEF2FF', to: '#E0E7FF' },
  'certificates-awards':  { from: '#FFFBEB', to: '#FEF3C7' },
  'marketing-promotional':{ from: '#F0FDF4', to: '#DCFCE7' },
  'corporate-branding':   { from: '#FAF5FF', to: '#F3E8FF' },
  'exhibition-event':     { from: '#FFF1F2', to: '#FFE4E6' },
  'signage-glow':         { from: '#FFFBEB', to: '#FEF9C3' },
  'glass-film':           { from: '#ECFEFF', to: '#CFFAFE' },
  'apparel-accessories':  { from: '#FDF2F8', to: '#FCE7F3' },
  'photo-wall-decor':     { from: '#F0F9FF', to: '#E0F2FE' },
};

interface CategoryCardProps {
  category: Category;
  className?: string;
  /** Show as a larger "featured" tile */
  featured?: boolean;
}

export function CategoryCard({ category, className, featured = false }: CategoryCardProps) {
  const theme = CATEGORY_THEMES[category.slug] ?? { from: '#F8FAFC', to: '#F1F5F9' };

  return (
    <Link
      to={`/category/${category.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100',
        'hover:border-indigo-200 hover:shadow-lg transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4338CA] focus-visible:ring-offset-2',
        className
      )}
    >
      {/* Image / gradient tile */}
      <div
        className={cn(
          'relative flex items-center justify-center',
          featured ? 'h-52' : 'h-36'
        )}
        style={{
          background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)`,
        }}
      >
        <span
          className="group-hover:scale-110 transition-transform duration-300 select-none"
          style={{ fontSize: featured ? '52px' : '40px' }}
          aria-hidden="true"
        >
          {category.icon}
        </span>

        {/* "Browse Category" hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: 'rgba(67,56,202,0.08)' }}
        >
          <span className="text-xs font-bold text-white uppercase tracking-wide bg-[#F97316] px-3 py-1 rounded-full">
            Browse Category
          </span>
        </div>
      </div>

      {/* Label */}
      <div className="flex items-center justify-between bg-white px-4 py-3 border-t border-slate-50">
        <div>
          <p className="text-sm font-semibold text-slate-900 leading-tight">
            {category.name}
          </p>
          {featured && (
            <p className="text-xs text-slate-500 mt-0.5">{category.description}</p>
          )}
          <p className="text-[11px] text-slate-400 mt-0.5">
            {category.subcategories.length} products
          </p>
        </div>
        <ArrowRight
          size={16}
          className="text-slate-300 group-hover:text-[#4338CA] group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
        />
      </div>
    </Link>
  );
}
