import { Link } from 'react-router-dom';
import { Camera, Share2, Mail } from 'lucide-react';

const FOOTER_COLS = [
  {
    heading: 'Products',
    links: [
      { label: 'Business Cards',      to: '/category/business-stationery' },
      { label: 'Brochures',           to: '/category/marketing-promotional' },
      { label: 'Marketing Collateral', to: '/category/marketing-promotional' },
      { label: 'Packaging',           to: '/category/corporate-office-branding' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Corporate Branding',  to: '/category/corporate-office-branding' },
      { label: 'Event & Exhibition',  to: '/category/exhibition-event' },
      { label: 'Retail Signage',      to: '/category/signage-glow-boards' },
      { label: 'Custom Apparel',      to: '/category/apparel-accessories' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Our Story',     to: '/about' },
      { label: 'Studio Quality', to: '/about' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Careers',       to: '/about' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Help Center',     to: '/contact' },
      { label: 'Live Chat',       to: '/contact' },
      { label: 'Request a Quote', to: '/contact' },
      { label: 'Studio Locations', to: '/contact' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-soft-separator pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">

        {/* ── Link columns ─────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-button text-button text-primary mb-6">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ───────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-soft-separator gap-4">
          <div className="flex items-center gap-6">
            <span className="font-headline-sm text-primary text-sm font-bold tracking-tight opacity-50">
              BHOOMIKA DIGITAL
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant opacity-60">
              &copy; {year} Bhoomika Digital. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Share">
              <Share2 size={20} />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Instagram">
              <Camera size={20} />
            </a>
            <a href="mailto:hello@bhoomika.digital" className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
