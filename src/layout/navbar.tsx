import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Menu, X, Search, ChevronDown, ArrowRight,
  Building2, Megaphone, MapPin, CalendarDays, Briefcase, Shirt, Layers,
  type LucideIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ── Products data ──────────────────────────────────────────────────────────────

interface ProductCat {
  icon: LucideIcon;
  title: string;
  to: string;
  items: string[];
}

const PRODUCTS_MEGA: ProductCat[] = [
  {
    icon: Building2,
    title: 'Business Essentials',
    to: '/category/business-stationery',
    items: ['Letterheads & Envelopes', 'Bill & Invoice Books', 'Cash Receipts & Vouchers', 'ID Cards'],
  },
  {
    icon: Megaphone,
    title: 'Marketing & Promotion',
    to: '/category/marketing-promotional',
    items: ['Flyers & Pamphlets', 'Brochures & Catalogues', 'Danglers & Wobblers', 'Certificates & Bibs'],
  },
  {
    icon: MapPin,
    title: 'Shop & Exterior Signage',
    to: '/category/signage-glow-boards',
    items: ['3D LED Acrylic Boards', 'Backlit Glow Sign Boards', 'Lollipop Signboards', 'Flex & Sunboard Signs'],
  },
  {
    icon: CalendarDays,
    title: 'Exhibitions & Events',
    to: '/category/exhibition-event',
    items: ['Standees & Shape Cut Standees', 'Collapsible Backdrops', 'Canopies & Tents', 'Promotional Flags'],
  },
  {
    icon: Briefcase,
    title: 'Corporate Space',
    to: '/category/corporate-office-branding',
    items: ['Frosted & One-Way Vision Films', 'Vinyl Wallpapers & Floor Graphics', 'Acrylic Name Boards', 'Aluminium Clip-on Frames'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Merchandise',
    to: '/category/apparel-accessories',
    items: ['T-Shirts (Polo, Round, V-Neck)', 'Promotional Caps', 'Custom Umbrellas'],
  },
  {
    icon: Layers,
    title: 'Large Format & Wall Decor',
    to: '/category/signage-glow-boards',
    items: ['Canvas, Vinyl & Flex Printing', 'Self-Adhesive & Fabric Prints', 'Acrylic & Photo Frames', 'Acrylic Wall Clocks'],
  },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* ── Header ──────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 w-full z-50"
        style={{ background: 'rgba(240,236,228,0.96)', backdropFilter: 'blur(20px)', boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="flex items-center justify-between px-5 md:px-16 h-[72px] max-w-[1400px] mx-auto">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-5 shrink-0" onClick={() => setActiveMenu(null)}>
            <img src="/logo.jpg" alt="Bhoomika Digital" className="h-11 w-auto" style={{ mixBlendMode: 'multiply', filter: 'brightness(1.3) contrast(0.92)' }} />
            <span className="whitespace-nowrap leading-none" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '21px', letterSpacing: '-0.03em', color: '#13273F' }}>
              Bhoomika Digital
            </span>
          </Link>

          {/* Desktop nav — pill group */}
          <nav className="hidden md:flex items-center rounded-full px-2 py-1.5 gap-0.5" style={{ background: 'rgba(255,255,255,0.60)' }}>
            <button
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeMenu === 'products'
                  ? 'bg-[#13273F] text-white'
                  : 'text-[#13273F]/60 hover:text-[#13273F]'
              }`}
              onMouseEnter={() => setActiveMenu('products')}
              onClick={() => { navigate('/products'); setActiveMenu(null); }}
            >
              Products
              <ChevronDown size={12} className={`mt-px transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180' : ''}`} />
            </button>

            <NavLink
              to="/solutions"
              onMouseEnter={() => setActiveMenu(null)}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive ? 'bg-[#13273F] text-white' : 'text-[#13273F]/60 hover:text-[#13273F]'
                }`
              }
            >
              Solutions
            </NavLink>

            <NavLink
              to="/about"
              onMouseEnter={() => setActiveMenu(null)}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive ? 'bg-[#13273F] text-white' : 'text-[#13273F]/60 hover:text-[#13273F]'
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onMouseEnter={() => setActiveMenu(null)}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive ? 'bg-[#13273F] text-white' : 'text-[#13273F]/60 hover:text-[#13273F]'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => { setSearchOpen(!searchOpen); setActiveMenu(null); }}
              className="hidden md:flex transition-colors"
              style={{ color: '#13273F', opacity: 0.5 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
              aria-label="Search"
            >
              <Search size={17} />
            </button>

            <Link
              to="/contact"
              onClick={() => setActiveMenu(null)}
              className="hidden md:inline-flex h-10 items-center gap-2 px-6 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ background: '#13273F' }}
            >
              Get a Quote
              <ArrowRight size={13} />
            </Link>

            <button onClick={() => setDrawerOpen(true)} className="md:hidden" style={{ color: '#13273F' }} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Search expand */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              className="overflow-hidden border-t border-black/5"
              style={{ background: 'rgba(240,236,228,0.98)' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 60, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="max-w-[1400px] mx-auto px-5 md:px-16 flex items-center h-[60px] gap-3">
                <Search size={15} className="text-on-surface-variant shrink-0" />
                <input
                  autoFocus type="text" placeholder="Search products…"
                  className="flex-1 text-sm bg-transparent text-on-surface outline-none placeholder:text-on-surface-variant/50"
                />
                <button onClick={() => setSearchOpen(false)} className="text-on-surface-variant hover:text-primary p-1">
                  <X size={15} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Products Mega-Menu ─────────────────────────────────────── */}
        <AnimatePresence>
          {activeMenu === 'products' && (
            <motion.div
              className="absolute top-full left-0 w-full border-b border-black/5 shadow-[0_16px_48px_rgba(0,0,0,0.10)]"
              style={{ background: 'rgba(240,236,228,0.98)' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="max-w-[1400px] mx-auto px-5 md:px-16 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
                  {[...PRODUCTS_MEGA, null].map((cat, idx) => {
                    const showDivider = (idx + 1) % 4 !== 0 && idx < PRODUCTS_MEGA.length;
                    const isFirstInRow = idx % 4 === 0;

                    if (!cat) {
                      // CTA filler cell — highlighted background
                      return (
                        <div
                          key="cta"
                          className="ml-8 flex flex-col justify-center bg-surface-container-low rounded-xl px-6 py-5"
                        >
                          <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                            Can't find what you're looking for?
                          </p>
                          <Link
                            to="/contact"
                            onClick={() => setActiveMenu(null)}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                          >
                            Talk to us <ArrowRight size={13} />
                          </Link>
                        </div>
                      );
                    }

                    const Icon = cat.icon;
                    return (
                      <div
                        key={cat.title}
                        className={`${showDivider ? 'border-r border-soft-separator/60' : ''} ${isFirstInRow ? 'pl-0' : 'pl-8'} pr-8`}
                      >
                        <Link
                          to={cat.to}
                          onClick={() => setActiveMenu(null)}
                          className="group flex items-center gap-2 mb-4"
                        >
                          <Icon size={14} className="text-primary shrink-0" strokeWidth={2} />
                          <span className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors leading-none">
                            {cat.title}
                          </span>
                        </Link>
                        <ul className="space-y-2.5">
                          {cat.items.map((item) => (
                            <li key={item}>
                              <Link
                                to={cat.to}
                                onClick={() => setActiveMenu(null)}
                                className="text-xs text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all duration-150 inline-block leading-snug"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* ── Mobile backdrop ──────────────────────────────────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setDrawerOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile drawer ────────────────────────────────────────────── */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-[60] w-[290px] flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ background: '#f0ece4' }}
      >
        <div className="flex items-center justify-between px-5 h-20 border-b border-soft-separator">
          <button onClick={() => setDrawerOpen(false)} className="p-1 text-on-surface-variant hover:text-primary">
            <X size={20} />
          </button>
          <Link to="/" onClick={() => setDrawerOpen(false)} className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Bhoomika Digital" className="h-9 w-auto" style={{ mixBlendMode: 'multiply', filter: 'brightness(1.3) contrast(0.92)' }} />
            <span className="whitespace-nowrap leading-none" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px', letterSpacing: '-0.03em', color: '#13273F' }}>
              Bhoomika Digital
            </span>
          </Link>
          <div className="w-8" />
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-0.5">
          {[
            { label: 'Products',  to: '/category/business-stationery' },
            { label: 'Solutions', to: '/solutions' },
            { label: 'About',     to: '/about' },
            { label: 'Contact',   to: '/contact' },
          ].map(({ label, to }) => (
            <Link
              key={label} to={to}
              onClick={() => setDrawerOpen(false)}
              className="flex items-center h-11 px-3 text-sm font-medium text-on-surface rounded-xl hover:bg-surface-container-low transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-4 pb-8 pt-3 border-t border-soft-separator">
          <Link
            to="/contact" onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-center h-11 bg-primary text-on-primary rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>
      </aside>
    </>
  );
}
