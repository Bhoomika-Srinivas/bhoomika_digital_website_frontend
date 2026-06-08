import { useMemo, useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { getCategoryBySlug } from '@/shared/data/categories';
import { getProductsByCategory } from '@/shared/data/products';
import { ProductCard } from '@/components/products/product-card';
import { cn } from '@/lib/utils';

// Single landscape hero image per category
const CATEGORY_HERO: Record<string, string> = {
  'business-stationery':   '/business-stationery-cover.png',
  'marketing-promotional': '/marketing-promotional-cover.png',
  'certificates-awards':   '/certificates-awards-cover.png',
  'corporate-branding':    '/corporate-branding-cover.png',
};

function getHeroImage(slug: string): string {
  return CATEGORY_HERO[slug] ?? `https://loremflickr.com/1280/480/print,brand,business,product?lock=${slug.length + 500}`;
}

export default function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [activeSubcat, setActiveSubcat] = useState<string | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [tabsSticky, setTabsSticky] = useState(false);

  const category = useMemo(() => getCategoryBySlug(categorySlug ?? ''), [categorySlug]);
  const allProducts = useMemo(() => getProductsByCategory(categorySlug ?? ''), [categorySlug]);
  const filtered = useMemo(
    () => (!activeSubcat ? allProducts : allProducts.filter((p) => p.subcategorySlug === activeSubcat)),
    [allProducts, activeSubcat]
  );

  const heroImage = useMemo(() => getHeroImage(categorySlug ?? ''), [categorySlug]);

  // Sticky tab bar detection
  useEffect(() => {
    const sentinel = tabsRef.current;
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => setTabsSticky(!entry.isIntersecting),
      { rootMargin: '-81px 0px 0px 0px', threshold: 0 }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
        <h1 className="text-2xl font-bold text-slate-900">Category not found</h1>
        <Link to="/" className="text-sm font-semibold text-secondary hover:underline underline-offset-4">
          Return home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ── Category hero — navy left + cover image right ────────── */}
      <div
        className="relative overflow-hidden"
        style={{ background: '#13273F', minHeight: '320px' }}
      >
        {/* Right: category cover image, fades left into navy */}
        <motion.div
          className="absolute inset-y-0 right-0 w-full md:w-[60%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={heroImage}
            alt={category.name}
            className="w-full h-full object-cover object-center"
          />
          {/* Left-edge fade: blends image into the navy background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #13273F 0%, rgba(19,39,63,0.88) 22%, rgba(19,39,63,0.45) 48%, rgba(19,39,63,0.08) 72%, transparent 88%)',
            }}
          />
        </motion.div>

        {/* Left: text content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-16 py-16 md:py-20 min-h-[320px] flex flex-col justify-end">
          <div className="w-full md:w-[52%]">
            <motion.nav
              className="flex items-center gap-1.5 mb-4"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/" className="text-xs text-white/50 hover:text-white/85 transition-colors">Home</Link>
              <ChevronRight size={11} className="text-white/35" />
              <Link to="/products" className="text-xs text-white/50 hover:text-white/85 transition-colors">Products</Link>
              <ChevronRight size={11} className="text-white/35" />
              <span className="text-xs text-white/85 font-medium">{category.name}</span>
            </motion.nav>

            <motion.h1
              className="text-white font-bold tracking-tight leading-tight mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px, 4vw, 52px)' }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {category.name}
            </motion.h1>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
            >
              <p className="text-white/60 text-sm max-w-sm">{category.description}</p>
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center h-9 px-5 text-xs font-semibold rounded-full transition-opacity hover:opacity-90"
                style={{ background: '#8B1010', color: '#fff' }}
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Sub-category tab bar ──────────────────────────────────── */}
      <div ref={tabsRef} />
      <div
        className={cn(
          'border-b border-slate-100 bg-white transition-shadow duration-200 z-40',
          tabsSticky ? 'sticky top-20 shadow-[0_2px_12px_rgba(0,0,0,0.06)]' : ''
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-0 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveSubcat(null)}
              className={cn(
                'flex-shrink-0 h-12 px-5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
                activeSubcat === null
                  ? 'border-secondary text-secondary font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              )}
            >
              All Products
              <span className="ml-2 text-xs text-slate-400">({allProducts.length})</span>
            </button>
            {category.subcategories.map((sub) => {
              const count = allProducts.filter((p) => p.subcategorySlug === sub.slug).length;
              if (count === 0) return null;
              return (
                <button
                  key={sub.slug}
                  onClick={() => setActiveSubcat(sub.slug)}
                  className={cn(
                    'flex-shrink-0 h-12 px-5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
                    activeSubcat === sub.slug
                      ? 'border-secondary text-secondary font-semibold'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  )}
                >
                  {sub.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Product grid ──────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-12">

        {activeSubcat && (
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold text-slate-900">
              {category.subcategories.find((s) => s.slug === activeSubcat)?.name}
              <span className="ml-2 text-sm font-normal text-slate-400">({filtered.length})</span>
            </h2>
            <button
              onClick={() => setActiveSubcat(null)}
              className="text-xs text-slate-400 hover:text-secondary transition-colors underline underline-offset-2"
            >
              Clear
            </button>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
            <p className="text-lg font-semibold text-slate-900">No products here yet</p>
            <p className="text-sm text-slate-400">Check back soon or browse another type.</p>
            <button
              onClick={() => setActiveSubcat(null)}
              className="mt-2 text-sm font-semibold text-secondary hover:underline underline-offset-4"
            >
              Show all
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3), ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
