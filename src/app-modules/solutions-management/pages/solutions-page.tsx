import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';

// ── Color system ───────────────────────────────────────────────────────────────
const C = {
  bg:     '#02152f',
  card:   '#081B38',
  border: 'rgba(255,255,255,0.05)',
  red:    '#C1121F',
  cream:  '#F5F1EB',
  gold:   '#B89A5A',
  muted:  'rgba(244,240,232,0.45)',
};

// ── Data ──────────────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  'Business Cards', 'Glow Boards', 'Brochures', 'Backdrops',
  'Wall Graphics', 'Standees', 'Vinyl Films', 'Acrylic Boards',
  'Letterheads', 'Canopies', 'Registration Kits', 'Posters',
];

const JOURNEYS = [
  {
    num: '01',
    title: 'Launch My Brand',
    subtitle: 'First impressions, perfected.',
    items: ['Business Cards', 'Letterheads', 'Bill Books', 'Shop Boards'],
    to: '/contact',
  },
  {
    num: '02',
    title: 'Brand My Office',
    subtitle: 'Your space speaks volumes.',
    items: ['Glass Films', 'Acrylic Boards', 'Wall Graphics', 'Reception Signage'],
    to: '/category/corporate-branding',
  },
  {
    num: '03',
    title: 'Brand My Store',
    subtitle: 'Stop traffic. Start conversations.',
    items: ['Glow Boards', 'Retail Graphics', 'Vinyl Stickers', 'Window Branding'],
    to: '/contact',
  },
  {
    num: '04',
    title: 'Run A Campaign',
    subtitle: 'Print that moves people.',
    items: ['Flyers', 'Brochures', 'Posters', 'Standees'],
    to: '/category/marketing-promotional',
  },
  {
    num: '05',
    title: 'Exhibit At An Event',
    subtitle: 'Command any event space.',
    items: ['Backdrops', 'Canopies', 'Flags', 'Registration Kits'],
    to: '/category/exhibition-event',
  },
  {
    num: '06',
    title: 'Enterprise Procurement',
    subtitle: 'Scale your brand without limits.',
    items: ['Bulk Orders', 'Multi-location Rollouts', 'Dedicated Account Manager'],
    to: '/contact',
  },
];

const GALLERY_IMAGES = [
  { src: 'https://loremflickr.com/1200/800/printing,press,production,inkjet?lock=200', alt: 'Production floor', wide: true },
  { src: 'https://loremflickr.com/600/800/business-card,luxury,premium,print?lock=201', alt: 'Premium business cards', wide: false },
  { src: 'https://loremflickr.com/600/800/office,signage,acrylic,brand?lock=202', alt: 'Office signage', wide: false },
  { src: 'https://loremflickr.com/1200/800/event,backdrop,exhibition,banner?lock=203', alt: 'Event backdrop', wide: true },
  { src: 'https://loremflickr.com/600/800/glow,sign,neon,store,retail?lock=204', alt: 'Glow boards', wide: false },
  { src: 'https://loremflickr.com/600/800/brochure,marketing,print,fold?lock=205', alt: 'Brochures', wide: false },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const tickerX     = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  const HEADLINE_WORDS = 'Printing Solutions For Every Stage Of Growth'.split(' ');

  return (
    <div className="overflow-x-hidden" style={{ background: C.bg, color: C.cream }}>

      {/* ══════════════════════════════════════════════════
          HERO — dark navy, PRINT watermark
      ══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden flex items-center">

        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(193,18,31,0.08), transparent 40%), #02152f' }} />
          {/* Subtle depth orbs — navy family only */}
          <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(15,39,71,0.7) 0%, transparent 70%)', right: '-120px', top: '-120px' }} />
          <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(161,18,23,0.08) 0%, transparent 70%)', left: '10%', bottom: '-60px' }} />
        </motion.div>

        {/* Giant PRINT watermark */}
        <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden" aria-hidden>
          <motion.span
            className="font-black leading-none whitespace-nowrap"
            style={{
              fontSize: '30vw',
              fontFamily: "'Fraunces', Georgia, serif",
              color: `rgba(255,255,255,0.03)`,
              x: tickerX,
              marginLeft: '-2vw',
            }}
          >
            PRINT
          </motion.span>
        </div>

        {/* Content */}
        <motion.div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-16" style={{ opacity: textOpacity }}>

          <motion.div className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
            <motion.div className="h-px" style={{ background: C.gold }}
              initial={{ width: 0 }} animate={{ width: 44 }}
              transition={{ duration: 0.8, delay: 0.2 }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.22em', color: C.gold, fontFamily: 'Inter, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}>
              Solutions
            </span>
          </motion.div>

          <h1 className="mb-12 max-w-4xl" style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            fontWeight: 700,
            color: C.cream,
          }}>
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span key={i} className="inline-block mr-[0.22em]"
                initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.75, delay: 0.25 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}>
                {word}
              </motion.span>
            ))}
          </h1>

          <div className="space-y-2.5 mb-14 max-w-xl">
            {[
              "Whether you're launching a startup,",
              'branding an office,',
              'running a campaign,',
              'or setting up an exhibition —',
              "we've got the complete print ecosystem.",
            ].map((line, i) => (
              <motion.p key={i} style={{ fontSize: 'clamp(15px,1.4vw,19px)', color: C.muted, fontFamily: 'Inter, sans-serif' }}
                initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.05 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}>
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.05 }}>
            <a href="#journeys"
              className="inline-flex items-center gap-2.5 px-8 py-4 font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: C.red, color: '#fff', borderRadius: '4px' }}>
              Find Your Solution <ArrowDown size={15} />
            </a>
            <Link to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 font-semibold text-sm hover:opacity-80 transition-opacity"
              style={{ border: `1px solid rgba(255,255,255,0.20)`, color: C.cream, borderRadius: '4px' }}>
              Get a Quote <ArrowRight size={15} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Ticker */}
        <motion.div className="absolute bottom-20 left-0 right-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 1 }}>
          <motion.div className="flex whitespace-nowrap" animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} style={{ fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.15)', fontFamily: 'Inter, sans-serif', fontWeight: 600, textTransform: 'uppercase', padding: '0 32px' }}>
                {item}<span style={{ marginLeft: '32px', color: `${C.gold}40` }}>·</span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 1 }}>
          <motion.div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }}
            animate={{ scaleY: [0.35, 1, 0.35], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          CHOOSE YOUR PATH — numbered journeys
      ══════════════════════════════════════════════════ */}
      <section id="journeys" className="py-[120px] px-5 md:px-16 max-w-[1280px] mx-auto">

        <div className="mb-16 flex items-end justify-between">
          <div>
            <motion.span style={{ fontSize: '11px', letterSpacing: '0.1em', color: C.red, fontFamily: 'Inter, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}
              className="block mb-3"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              What's your goal?
            </motion.span>
            <motion.h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px,3vw,40px)', fontWeight: 700, color: C.cream, letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
              Choose your path
            </motion.h2>
          </div>
          <span style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.04em', color: 'rgba(255,255,255,0.04)', lineHeight: 1, fontFamily: 'Inter, sans-serif' }}
            className="hidden md:block">
            06
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {JOURNEYS.map((j, i) => (
            <motion.div key={j.num}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to={j.to}
                className="group flex flex-col h-full p-8 transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: '#081B38',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '16px',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#C1121F')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)')}
              >
                {/* Number */}
                <span className="block mb-6 transition-colors duration-200 group-hover:opacity-100"
                  style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: C.red, fontFamily: 'Inter, sans-serif', opacity: 0.8 }}>
                  {j.num}
                </span>

                {/* Title */}
                <h3 className="mb-2 transition-colors duration-200"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '22px', fontWeight: 700, color: C.cream, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                  {j.title}
                </h3>

                {/* Subtitle */}
                <p className="mb-6" style={{ fontSize: '13px', color: C.muted, fontFamily: 'Inter, sans-serif' }}>
                  {j.subtitle}
                </p>

                {/* Items */}
                <ul className="flex-1 space-y-2 mb-8">
                  {j.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5" style={{ fontSize: '13px', color: 'rgba(244,240,232,0.55)', fontFamily: 'Inter, sans-serif' }}>
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: C.gold }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 font-semibold text-sm transition-all duration-200 group-hover:gap-3"
                  style={{ color: C.cream, fontFamily: 'Inter, sans-serif' }}>
                  Explore <ArrowRight size={14} style={{ color: C.red }} />
                </div>

                {/* Hover: bottom accent line */}
                <div className="mt-6 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
                  style={{ background: `linear-gradient(to right, ${C.red}, transparent)` }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          GALLERY — dark gradient, red as accent only
      ══════════════════════════════════════════════════ */}
      <section style={{ background: '#F5F1EB' }} className="py-[120px]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">

          <div className="mb-20">
            <motion.span className="block mb-3"
              style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#C1121F', fontFamily: 'Inter, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Our Work
            </motion.span>
            <motion.h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px,3vw,40px)', fontWeight: 700, color: '#02152F', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              See It In Print
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div key={idx}
                className={`overflow-hidden rounded-xl${img.wide ? ' col-span-2' : ''}`}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.7, delay: idx * 0.09, ease: [0.25, 0.1, 0.25, 1] }}>
                <div className={`overflow-hidden${img.wide ? ' aspect-[16/9]' : ' aspect-[4/3]'}`}>
                  <img src={img.src} alt={img.alt}
                    className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WATCH THE CRAFT — videos
      ══════════════════════════════════════════════════ */}
      <section className="py-[120px] px-5 md:px-16" style={{ background: '#02152F' }}>
        <div className="max-w-[1280px] mx-auto">
        <div className="mb-20">
          <motion.span className="block mb-3"
            style={{ fontSize: '11px', letterSpacing: '0.1em', color: C.red, fontFamily: 'Inter, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            In Motion
          </motion.span>
          <motion.h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px,3vw,40px)', fontWeight: 700, color: C.cream, letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Watch the craft
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { poster: 'https://loremflickr.com/900/600/printing,machine,press,ink?lock=300', label: 'Production Process', src: '/production.mp4' },
            { poster: 'https://loremflickr.com/900/600/signage,installation,led,glow?lock=301', label: 'Signage Installation', src: '/installation.mp4' },
          ].map((vid, idx) => (
            <motion.div key={idx}
              className="relative overflow-hidden group cursor-pointer"
              style={{ borderRadius: '16px', border: `1px solid ${C.border}` }}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.14 }}>
              <div className="aspect-video overflow-hidden">
                <video className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  poster={vid.poster} muted loop playsInline preload="none"
                  onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}>
                  <source src={vid.src} type="video/mp4" />
                </video>
              </div>

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                <motion.div className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                  style={{ background: 'rgba(255,255,255,0.92)' }}
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.93 }}>
                  <div className="w-0 h-0 ml-1" style={{ borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: `16px solid ${C.bg}` }} />
                </motion.div>
              </div>

              <div className="absolute bottom-5 left-5">
                <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}>
                  {vid.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — cream, hits hard
      ══════════════════════════════════════════════════ */}
      <section className="py-[120px] px-5 md:px-16" style={{ background: '#F5F1EB' }}>
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.span className="block mb-4"
            style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#C1121F', fontFamily: 'Inter, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Get Started
          </motion.span>
          <motion.h2 className="mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, color: '#02152F', letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Not sure where to start?
          </motion.h2>
          <motion.p className="mb-10 max-w-xl mx-auto" style={{ fontSize: '18px', color: 'rgba(2,21,47,0.6)', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
            Let's find the right solution together.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28 }}>
            <Link to="/contact"
              className="inline-flex items-center gap-2.5 px-12 py-5 font-semibold text-sm hover:opacity-90 transition-opacity group"
              style={{ background: '#C1121F', color: '#fff', borderRadius: '4px' }}>
              Talk to Us
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
