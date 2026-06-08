import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { LayoutGrid, FileText, Search } from 'lucide-react';
import Navbar from './navbar';
import Footer from './footer';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
      <p className="text-7xl font-black text-surface-container">404</p>
      <h1 className="text-2xl font-bold text-primary">Page not found</h1>
      <p className="text-on-surface-variant text-body-sm max-w-xs">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-2 inline-flex items-center h-10 px-5 bg-primary text-on-primary text-body-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 text-center px-6">
      <p className="text-label-caps font-label-caps text-secondary uppercase tracking-widest">
        Coming Soon
      </p>
      <h1 className="font-headline-md text-headline-md text-primary">{title}</h1>
      <p className="text-on-surface-variant text-body-sm max-w-xs">
        We're working on this page. Check back soon.
      </p>
      <Link
        to="/"
        className="mt-2 inline-flex items-center h-10 px-5 bg-primary text-on-primary text-body-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}

export { NotFound };

export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          className="flex-1 pt-[72px] pb-16 md:pb-[120px]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />

      {/* ── WhatsApp floating button ─────────────────── */}
      <a
        href="https://wa.me/919731624441?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20printing%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[88px] md:bottom-8 right-5 md:right-8 z-40 flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
        style={{
          background: '#13273F',
          boxShadow: '0 4px 20px rgba(19,39,63,0.35), 0 1px 4px rgba(0,0,0,0.15)',
        }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(19,39,63,0.45), 0 2px 8px rgba(0,0,0,0.2)')}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(19,39,63,0.35), 0 1px 4px rgba(0,0,0,0.15)')}
      >
        {/* WhatsApp icon with green pulse */}
        <div className="relative flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {/* Online indicator */}
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#13273F]" />
        </div>

        <div className="leading-none">
          <p className="text-[10px] text-white/50 font-medium mb-1">Need Help?</p>
          <p className="text-sm text-white font-semibold">Chat with Us</p>
        </div>
      </a>

      {/* ── Mobile bottom nav ───────────────────────── */}
      <nav className="fixed bottom-0 w-full z-50 md:hidden bg-paper-white border-t border-soft-separator flex justify-around items-center h-16">
        <Link to="/products" className="flex flex-col items-center gap-1 text-on-surface-variant">
          <LayoutGrid size={22} />
          <span className="text-label-caps font-label-caps text-[10px]">PRODUCTS</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1 text-primary">
          <FileText size={22} />
          <span className="text-label-caps font-label-caps text-[10px] font-bold">GET QUOTE</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <Search size={22} />
          <span className="text-label-caps font-label-caps text-[10px]">SEARCH</span>
        </button>
      </nav>
    </div>
  );
}
