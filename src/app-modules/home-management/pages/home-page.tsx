import { Link } from 'react-router-dom';
import { Building2, Truck, Star, MoveRight, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import LogoIntro from '@/components/intro/logo-intro';

// ── Data ──────────────────────────────────────────────────────────────────────

const SOLUTION_CATEGORIES = [
  {
    title: 'Business Essentials',
    to: '/category/business-stationery',
    img: '/business-stationery-cover.png',
  },
  {
    title: 'Marketing & Promotions',
    to: '/category/marketing-promotional',
    img: '/marketing-promotional-cover.png',
  },
  {
    title: 'Corporate Branding',
    to: '/category/corporate-office-branding',
    img: '/corporate-branding-cover.png',
  },
  {
    title: 'Events & Exhibitions',
    to: '/category/exhibition-event',
    img: 'https://loremflickr.com/600/600/standee,backdrop,exhibition,event,display?lock=704',
  },
  {
    title: 'Signage & Display',
    to: '/category/signage-glow-boards',
    img: 'https://loremflickr.com/600/600/neon,glow,sign,led,board?lock=705',
  },
  {
    title: 'Apparel & Merchandise',
    to: '/category/apparel-accessories',
    img: 'https://loremflickr.com/600/600/polo,tshirt,uniform,branded,cap?lock=706',
  },
];

const FEATURED_PRODUCTS = [
  {
    category: 'STATIONERY',
    title: 'Premium Business Cards',
    desc: 'Textured 400gsm cotton stock with blind embossing.',
    to: '/category/business-stationery/business-cards',
    img: 'https://loremflickr.com/800/600/business-card,luxury,print?lock=10',
  },
  {
    category: 'PROMOTION',
    title: 'High-Gloss Brochures',
    desc: 'UV-coated, full-bleed vibrant photography prints.',
    to: '/category/marketing-promotional/brochures-catalogues',
    img: 'https://loremflickr.com/400/400/brochure,pamphlet,print?lock=11',
  },
  {
    category: 'SIGNAGE',
    title: 'LED Acrylic Boards',
    desc: 'Edge-lit polished acrylic for modern corporate presence.',
    to: '/category/signage-glow-boards/acrylic-led',
    img: 'https://loremflickr.com/400/400/signage,led,acrylic?lock=12',
  },
];

const PORTFOLIO_ITEMS = [
  {
    title: 'Empire Kitchen — Glow Board',
    desc: 'LED acrylic signage installation',
    img: 'https://loremflickr.com/800/600/restaurant,neon,signage?lock=30',
    span: 'large',
  },
  {
    title: 'Stationery Suite',
    desc: 'Full brand stationery package',
    img: 'https://loremflickr.com/600/600/business-card,stationery,print?lock=31',
    span: 'small',
  },
  {
    title: 'Corporate ID Solutions',
    desc: 'ID cards & lanyards for 200+ staff',
    img: 'https://loremflickr.com/600/600/corporate,id,badge?lock=32',
    span: 'small',
  },
];

const WHY_FEATURES = [
  {
    title: 'Fast Turnaround',
    desc: 'We understand the speed of business. Expedited production without quality compromise.',
  },
  {
    title: 'Premium Materials',
    desc: 'Curated stocks from world-class paper mills and high-grade finishes for every project.',
  },
  {
    title: 'Design Support',
    desc: 'In-house experts to review and optimize your files for the best possible print result.',
  },
  {
    title: 'Volume Orders',
    desc: 'Scale your branding with custom quotations tailored to your volume, specifications, and delivery requirements.',
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-background text-on-surface">

      <LogoIntro />

      {/* ══════════════════════════════════════════════════
          HERO — split layout: text left, video right
      ══════════════════════════════════════════════════ */}
      <section
        className="relative"
        style={{
          background: '#f0ece4',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 pt-12 md:pt-16 pb-6 md:pb-8 min-h-[88vh] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">

            {/* ── Left: text content ── */}
            <div>
              <motion.h1
                className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6"
                style={{ color: '#13273F' }}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Print.{' '}
                <em style={{ fontStyle: 'italic', color: '#8B1010' }}>Brand.</em>{' '}
                Ad.{' '}
                Event.
              </motion.h1>

              <motion.p
                className="font-body-lg text-body-lg mb-10 max-w-md"
                style={{ color: '#4a5568' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Premium printing and branding solutions for businesses across India.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-14"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 font-button text-button text-white rounded-full transition-opacity hover:opacity-90"
                  style={{ background: '#8B1010' }}
                >
                  Get a Custom Quote
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 font-button text-button rounded-full border transition-colors hover:bg-black/5"
                  style={{ border: '1.5px solid #13273F', color: '#13273F' }}
                >
                  Explore Products
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="flex flex-wrap gap-6 md:gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Building2 size={14} style={{ color: '#13273F' }} />
                  <span className="font-label-caps text-label-caps" style={{ color: '#13273F', opacity: 0.6 }}>500+ BUSINESSES SERVED</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={14} style={{ color: '#13273F' }} />
                  <span className="font-label-caps text-label-caps" style={{ color: '#13273F', opacity: 0.6 }}>50,000+ ORDERS DELIVERED</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={14} style={{ color: '#13273F' }} fill="#13273F" />
                  <span className="font-label-caps text-label-caps" style={{ color: '#13273F', opacity: 0.6 }}>4.9 RATING</span>
                </div>
              </motion.div>
            </div>

            {/* ── Right: video card ── */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={reduceMotion
                ? { opacity: 1, x: 0 }
                : { opacity: 1, x: 0, y: [0, -10, 0] }
              }
              transition={reduceMotion
                ? { duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }
                : {
                    opacity: { duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
                    x:       { duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
                    y:       { duration: 4, delay: 1.1, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
                  }
              }
              className="relative"
              style={{
                rotate: '-1deg',
                scale: 1.1,
                marginTop: '-40px',
                marginBottom: '-60px',
                zIndex: 10,
              }}
            >
              <motion.div
                className="overflow-hidden"
                style={{
                  borderRadius: '28px',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5)',
                }}
                whileHover={{
                  scale: 1.025,
                  y: -6,
                  boxShadow: '0 24px 72px rgba(0,0,0,0.30), 0 8px 24px rgba(0,0,0,0.16), 0 0 0 1px rgba(255,255,255,0.65)',
                  transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
                }}
              >
                <video
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '16/10', display: 'block' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  poster="https://loremflickr.com/1280/720/printing,branding?lock=20"
                >
                  <source src="/hero.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SHOP BY SOLUTION — 120px above, 80px title gap
      ══════════════════════════════════════════════════ */}
      <section className="bg-white px-5 md:px-16 py-16 md:py-20 max-w-[1280px] mx-auto relative" style={{ zIndex: 0 }}>

        <div className="mb-10 flex justify-between items-end">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase">
              Categories
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">Shop by Solution</h2>
          </div>
          <Link
            to="/category/business-stationery"
            className="font-button text-button text-primary border-b border-primary pb-1 hidden md:flex items-center gap-1"
          >
            All Collections <MoveRight size={14} className="ml-1" />
          </Link>
        </div>

        {/* 3-col grid, portrait cards — smaller than 2-col */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
          {SOLUTION_CATEGORIES.map((cat) => (
            <Link key={cat.title} to={cat.to} className="group cursor-pointer flex flex-col">
              {/* Display-case card — matches product card style */}
              <div className="bg-[#f5f5f5] rounded-xl overflow-hidden aspect-square flex items-center justify-center p-6 group-hover:shadow-[0_6px_28px_rgba(0,0,0,0.11)] transition-shadow duration-300">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-400 ease-out"
                />
              </div>
              <div className="pt-4 text-center">
                <h3 className="font-semibold text-[15px] text-slate-900 leading-snug group-hover:text-secondary transition-colors duration-200">
                  {cat.title}
                </h3>
                <p className="text-[13px] text-slate-400 mt-1">Browse category</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FEATURED PRODUCTS — editorial, not a grid
          One large showcase + two compact below
      ══════════════════════════════════════════════════ */}
      <section className="bg-surface-container-lowest border-y border-soft-separator py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">

          <div className="mb-10 text-center">
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase">
              Featured
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">Craftsmanship in Detail</h2>
          </div>

          {/* Hero product — editorial 60/40 */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-14 items-center mb-10 md:mb-14">
            <div className="aspect-[4/3] overflow-hidden bg-surface-container">
              <img
                src={FEATURED_PRODUCTS[0].img}
                alt={FEATURED_PRODUCTS[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <p className="font-label-caps text-label-caps text-secondary">{FEATURED_PRODUCTS[0].category}</p>
              <h3 className="font-headline-md text-headline-md text-primary">{FEATURED_PRODUCTS[0].title}</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">{FEATURED_PRODUCTS[0].desc}</p>
              <Link
                to={FEATURED_PRODUCTS[0].to}
                className="inline-flex items-center gap-2 font-button text-button text-primary border-b border-primary pb-1 group"
              >
                Get a Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Two secondary products — smaller, horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {FEATURED_PRODUCTS.slice(1).map((p) => (
              <Link key={p.title} to={p.to} className="flex gap-6 group items-start">
                <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 bg-surface-container overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 pt-1">
                  <p className="font-label-caps text-label-caps text-secondary">{p.category}</p>
                  <h4 className="font-headline-sm text-headline-sm text-primary">{p.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          RECENT WORK — portfolio grid
      ══════════════════════════════════════════════════ */}
      <section className="px-5 md:px-16 py-16 md:py-20 max-w-[1280px] mx-auto">

        <div className="mb-10 flex justify-between items-end">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase">
              Portfolio
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">Recent Work</h2>
          </div>
          <Link
            to="/about"
            className="font-button text-button text-primary border-b border-primary pb-1 hidden md:flex items-center gap-1"
          >
            View All <MoveRight size={14} className="ml-1" />
          </Link>
        </div>

        {/* Large item + two smaller stacked */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
          {/* Large */}
          <div className="group overflow-hidden bg-surface-container">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={PORTFOLIO_ITEMS[0].img}
                alt={PORTFOLIO_ITEMS[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="pt-5">
              <h3 className="font-body-md text-body-md font-semibold text-primary">{PORTFOLIO_ITEMS[0].title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{PORTFOLIO_ITEMS[0].desc}</p>
            </div>
          </div>

          {/* Two smaller stacked */}
          <div className="flex flex-col gap-6">
            {PORTFOLIO_ITEMS.slice(1).map((item) => (
              <div key={item.title} className="group overflow-hidden bg-surface-container flex-1">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="font-body-md text-body-md font-semibold text-primary">{item.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY BHOOMIKA — 2×2, room to breathe
      ══════════════════════════════════════════════════ */}
      <section className="px-5 md:px-16 py-16 md:py-20 max-w-[1280px] mx-auto">

        <div className="mb-10">
          <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase">Why Us</span>
          <h2 className="font-headline-md text-headline-md text-primary">Built for serious brands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHY_FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-10 border border-soft-separator hover:border-primary transition-colors"
            >
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">{f.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FEATURED PROJECTS — dark visual break
      ══════════════════════════════════════════════════ */}
      <section className="bg-primary text-on-primary py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">

          <div className="mb-10">
            <span className="font-label-caps text-label-caps opacity-60 mb-3 block uppercase">Portfolio</span>
            <h2 className="font-headline-md text-headline-md">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="https://loremflickr.com/800/450/restaurant,neon,signage,glow?lock=40"
                alt="Empire Kitchen — Restaurant Frontage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <div>
                  <h4 className="font-headline-sm text-headline-sm mb-1">Empire Kitchen — Restaurant Frontage</h4>
                  <p className="font-body-sm text-body-sm opacity-80">
                    LED glow boards &amp; full exterior signage installation.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="border-l-2 border-secondary-fixed-dim pl-8 py-2 space-y-3">
                <h3 className="font-headline-sm text-headline-sm">Precision Output</h3>
                <p className="opacity-70 font-body-md text-body-md">
                  From artwork prepress to on-site installation, every detail is executed with
                  industrial-grade precision — no exceptions.
                </p>
              </div>
              <div className="border-l-2 border-secondary-fixed-dim pl-8 py-2 space-y-3">
                <h3 className="font-headline-sm text-headline-sm">Consistent Branding</h3>
                <p className="opacity-70 font-body-md text-body-md">
                  Color-matched across every substrate — business cards to billboard banners —
                  so your brand stays locked and recognisable.
                </p>
              </div>
              <Link
                to="/about"
                className="text-on-primary font-button text-button flex items-center gap-2 group"
              >
                VIEW ALL PROJECTS
                <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          BULK CTA — full breathing room before footer
      ══════════════════════════════════════════════════ */}
      <section className="px-5 md:px-16 py-16 md:py-20 max-w-[1280px] mx-auto text-center">
        <div className="bg-surface-container-low p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase">Enterprise</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">
              Need printing at scale?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
              Get a customised quotation and a dedicated account manager for your enterprise requirements.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-12 py-5 font-button text-button hover:opacity-90 transition-all inline-block"
            >
              Request Enterprise Quote
            </Link>
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        </div>
      </section>

    </div>
  );
}
