import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/shared/data/categories';

const CATEGORY_IMAGES: Record<string, string> = {
  'business-stationery':    '/business-stationery-cover.png',
  'certificates-awards':    '/certificates-awards-cover.png',
  'marketing-promotional':  '/marketing-promotional-cover.png',
  'corporate-branding':     '/corporate-branding-cover.png',
  'exhibition-event':       'https://loremflickr.com/600/400/standee,backdrop,exhibition,event?lock=705',
  'signage-glow':           'https://loremflickr.com/600/400/neon,glow,sign,led,board?lock=706',
  'glass-film':             'https://loremflickr.com/600/400/frosted,glass,film,office?lock=707',
  'apparel-accessories':    'https://loremflickr.com/600/400/polo,tshirt,uniform,branded?lock=708',
  'photo-wall-decor':       'https://loremflickr.com/600/400/canvas,frame,wall,photo,print?lock=709',
};

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen" style={{ background: '#fff' }}>

      {/* ── Header ── */}
      <div className="bg-[#f0ece4] px-5 md:px-16 py-16 md:py-20 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#8B1010] mb-4 block">
            All Categories
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-[32px] md:text-[52px] font-bold leading-tight tracking-tight text-[#13273F] mb-4">
            Everything we print.
          </h1>
          <p className="text-[#4a5568] text-lg max-w-xl">
            Browse all product categories — from business stationery to large-format signage.
          </p>
        </motion.div>
      </div>

      {/* ── Category grid ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full"
            >
              <Link
                to={`/category/${cat.slug}`}
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-[#e8e3db] hover:border-[#d4cfc4] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-300"
                style={{ background: '#f0ece4' }}
              >
                {/* Image */}
                <div className="aspect-[3/2] overflow-hidden" style={{ background: '#e8e3db' }}>
                  <img
                    src={CATEGORY_IMAGES[cat.slug] ?? `https://loremflickr.com/600/400/print,brand,business?lock=${i + 800}`}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="font-semibold text-[17px] text-[#13273F] leading-snug group-hover:text-[#8B1010] transition-colors duration-200">
                      {cat.name}
                    </h2>
                    <span className="shrink-0 text-[11px] font-semibold text-slate-400 bg-slate-50 rounded-full px-2.5 py-1 mt-0.5">
                      {cat.subcategories.length} types
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#13273F] group-hover:gap-2 transition-all duration-200">
                    Browse category <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 pb-20">
        <div className="bg-[#13273F] rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">Can't find what you need?</h3>
            <p className="text-white/60 text-sm">Tell us what you're looking for — we'll make it happen.</p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#13273F] font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Get a Custom Quote <ArrowRight size={14} />
          </Link>
        </div>
      </div>

    </div>
  );
}
