import { useState, useMemo, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Paperclip, ArrowLeft, X, CheckCircle, Send } from 'lucide-react';
import { getProductBySlug } from '@/shared/data/products';
import { getCategoryBySlug } from '@/shared/data/categories';
import { cn } from '@/lib/utils';

const SELECT =
  'w-full h-11 pl-4 pr-10 border border-slate-200 rounded-xl text-sm text-slate-900 bg-white outline-none focus:border-[#13273F] focus:ring-2 focus:ring-[#13273F]/10 transition-all cursor-pointer';

const INPUT =
  'w-full h-11 px-4 border border-slate-200 rounded-xl text-sm text-slate-900 bg-white outline-none focus:border-[#13273F] focus:ring-2 focus:ring-[#13273F]/10 transition-all placeholder:text-slate-400';

export default function ProductPage() {
  const { categorySlug, productSlug } = useParams<{
    categorySlug: string;
    productSlug: string;
  }>();
  const navigate = useNavigate();

  const product  = useMemo(() => getProductBySlug(productSlug ?? ''), [productSlug]);
  const category = useMemo(() => getCategoryBySlug(categorySlug ?? ''), [categorySlug]);
  const opts     = product?.options;

  // Configuration state
  const [selectedSize,     setSelectedSize]     = useState(opts?.sizes?.[0] ?? '');
  const [selectedMaterial, setSelectedMaterial] = useState(opts?.materials?.[0] ?? '');
  const [selectedFinish,   setSelectedFinish]   = useState(opts?.finishes?.[0] ?? '');
  const [selectedPrintPos, setSelectedPrintPos] = useState(opts?.printPositions?.[0] ?? '');
  const [selectedColor,    setSelectedColor]    = useState(opts?.colors?.[0] ?? '');
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    if (opts?.variants) {
      for (const [key, vals] of Object.entries(opts.variants)) init[key] = vals[0] ?? '';
    }
    return init;
  });
  const [quantity,       setQuantity]       = useState(opts?.quantities?.[0] ?? 1);
  const [customNote,     setCustomNote]     = useState('');
  const [designFileName, setDesignFileName] = useState('');
  const [activeThumb,    setActiveThumb]    = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Modal state
  const [showModal,       setShowModal]       = useState(false);
  const [submitted,       setSubmitted]       = useState(false);
  const [contactName,     setContactName]     = useState('');
  const [contactCompany,  setContactCompany]  = useState('');
  const [contactPhone,    setContactPhone]    = useState('');
  const [contactEmail,    setContactEmail]    = useState('');
  const [contactMethod,   setContactMethod]   = useState<'WhatsApp' | 'Phone Call' | 'Email'>('WhatsApp');
  const [formError,       setFormError]       = useState('');

  if (!product || !category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
        <h1 className="text-2xl font-bold text-slate-900">Product not found</h1>
        <Link to="/" className="text-sm font-semibold text-[#13273F] hover:underline underline-offset-4">
          Return home
        </Link>
      </div>
    );
  }

  function handleSubmitQuote(e: React.FormEvent) {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim() || !contactEmail.trim()) {
      setFormError('Please fill in your name, phone, and email.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  }

  const thumbLabels = ['Main view', 'Material', 'Finish', 'Size chart'];

  // Build summary rows for the quote panel
  const summaryRows = [
    { label: 'Product',  value: product.name },
    selectedSize     && { label: 'Size',          value: selectedSize },
    selectedMaterial && { label: 'Material',      value: selectedMaterial },
    selectedFinish   && { label: 'Finish',         value: selectedFinish },
    selectedPrintPos && { label: 'Print Position', value: selectedPrintPos },
    selectedColor    && { label: 'Colour',         value: selectedColor },
    ...Object.entries(selectedVariants).map(([k, v]) => v ? { label: k, value: v } : false),
    { label: 'Quantity', value: `${quantity} pcs` },
    designFileName   && { label: 'Artwork',        value: designFileName },
    customNote.trim() && { label: 'Notes',         value: customNote.trim() },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-8">
          <Link to="/" className="hover:text-slate-700 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to={`/category/${categorySlug}`} className="hover:text-slate-700 transition-colors">
            {category.name}
          </Link>
          <ChevronRight size={12} />
          <span className="text-slate-700 font-medium">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">

          {/* ── LEFT: Image gallery ─────────────────────── */}
          <div className="lg:w-[44%] flex-shrink-0">
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <>
                  <svg className="w-full h-full absolute inset-0 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="lines-product" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="16" stroke="#13273F" strokeWidth="1.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#lines-product)" />
                  </svg>
                  <p className="relative text-sm font-medium text-slate-400 text-center px-8">
                    {product.name}
                    <br />
                    <span className="text-xs font-normal text-slate-300">Product image coming soon</span>
                  </p>
                </>
              )}
              <div className="absolute bottom-3 left-3">
                <span className="inline-block text-[10px] font-semibold bg-white/90 text-slate-500 px-2.5 py-1 rounded-full border border-slate-100 backdrop-blur-sm">
                  {thumbLabels[activeThumb]}
                </span>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2.5 mt-3">
              {thumbLabels.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setActiveThumb(i)}
                  className={cn(
                    'flex-1 h-16 rounded-xl border-2 transition-all text-xs font-medium bg-slate-50',
                    activeThumb === i
                      ? 'border-[#13273F] text-[#13273F] bg-slate-100'
                      : 'border-slate-100 text-slate-400 hover:border-slate-200'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Feature bullets */}
            <div className="mt-6 space-y-2">
              {opts?.sizes && (
                <div className="flex items-start gap-2.5 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1010] mt-1.5 flex-shrink-0" />
                  <span>Available sizes: {opts.sizes.join(', ')}</span>
                </div>
              )}
              {opts?.materials && (
                <div className="flex items-start gap-2.5 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1010] mt-1.5 flex-shrink-0" />
                  <span>Materials: {opts.materials.join(' · ')}</span>
                </div>
              )}
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B1010] mt-1.5 flex-shrink-0" />
                <span>Custom quotation — pricing tailored to your specifications</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B1010] mt-1.5 flex-shrink-0" />
                <span>Minimum Order Quantity (MOQ): {opts?.quantities?.[0] ?? 1} pcs</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Configurator ─────────────────────── */}
          <div className="flex-1">
            {/* Header */}
            <p className="text-xs font-bold uppercase tracking-widest text-[#8B1010] mb-2">
              {category.name}
            </p>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{product.name}</h1>
            <p className="mt-3 text-slate-500 text-sm leading-relaxed max-w-lg">
              {product.description}
            </p>

            <div className="mt-7 space-y-5">
              {opts?.sizes && opts.sizes.length > 0 && (
                <OptionRow label="Size">
                  <select className={SELECT} value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    {opts.sizes.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </OptionRow>
              )}

              {opts?.materials && opts.materials.length > 0 && (
                <OptionRow label="Material">
                  <select className={SELECT} value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
                    {opts.materials.map((m) => <option key={m}>{m}</option>)}
                  </select>
                </OptionRow>
              )}

              {opts?.finishes && opts.finishes.length > 0 && (
                <OptionRow label="Finish">
                  <select className={SELECT} value={selectedFinish} onChange={(e) => setSelectedFinish(e.target.value)}>
                    {opts.finishes.map((f) => <option key={f}>{f}</option>)}
                  </select>
                </OptionRow>
              )}

              {opts?.printPositions && opts.printPositions.length > 0 && (
                <OptionRow label="Print Position">
                  <select className={SELECT} value={selectedPrintPos} onChange={(e) => setSelectedPrintPos(e.target.value)}>
                    {opts.printPositions.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </OptionRow>
              )}

              {opts?.colors && opts.colors.length > 0 && (
                <OptionRow label="Colour">
                  <select className={SELECT} value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                    {opts.colors.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </OptionRow>
              )}

              {opts?.variants && Object.entries(opts.variants).map(([key, values]) => (
                <OptionRow key={key} label={key}>
                  <select
                    className={SELECT}
                    value={selectedVariants[key] ?? ''}
                    onChange={(e) => setSelectedVariants((prev) => ({ ...prev, [key]: e.target.value }))}
                  >
                    {values.map((v) => <option key={v}>{v}</option>)}
                  </select>
                </OptionRow>
              ))}

              <OptionRow label="Quantity">
                <select className={SELECT} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                  {opts?.quantities.map((q) => <option key={q} value={q}>{q} pcs</option>)}
                </select>
              </OptionRow>

              {/* Artwork upload */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-700">Upload Artwork</p>
                  <span className="text-xs text-slate-400 font-medium">Optional</span>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.ai,.psd,.png,.jpg,.jpeg,.svg,.eps"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) setDesignFileName(f.name); }}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-3.5 border-2 rounded-xl text-sm font-medium transition-all',
                    designFileName
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                      : 'border-dashed border-slate-300 text-slate-600 hover:border-[#13273F] hover:bg-slate-50'
                  )}
                >
                  <Paperclip size={17} className={designFileName ? 'text-emerald-500' : 'text-[#8B1010]'} />
                  <span className="flex-1 text-left truncate">
                    {designFileName ? designFileName : 'Click to upload your artwork file'}
                  </span>
                  {designFileName && <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />}
                </button>
                <p className="text-xs text-slate-400 mt-1.5">Accepted: PDF, AI, PSD, PNG, JPG, SVG, EPS</p>
                <div className="mt-2.5 flex items-start gap-2 px-3 py-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[#8B1010] text-xs font-bold mt-px">✓</span>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <span className="font-semibold text-slate-700">Don't have a design?</span> Our in-house design team can create one for you — just mention it in special instructions.
                  </p>
                </div>
              </div>

              {/* Special instructions */}
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-2">Special Instructions</p>
                <textarea
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  rows={2}
                  placeholder="e.g. Pantone 185 C for logo, bleed already included…"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#13273F] focus:ring-2 focus:ring-[#13273F]/10 transition-all resize-none"
                />
              </div>
            </div>

            {/* ── Quote Summary Panel ────────────────── */}
            <div className="mt-7 border border-slate-200 rounded-2xl overflow-hidden">
              <div className="px-5 py-3.5 border-b border-slate-100" style={{ background: '#13273F' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Quote Summary
                </p>
              </div>
              <div className="px-5 py-4 bg-slate-50 space-y-2.5">
                {summaryRows.map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3 text-sm">
                    <span className="w-28 flex-shrink-0 text-slate-400 font-medium">{label}</span>
                    <span className="text-slate-800 font-medium leading-snug">{value}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-4 border-t border-slate-100 bg-white flex flex-col gap-2.5">
                <div className="mb-1">
                  <p className="text-sm font-semibold text-slate-800 mb-0.5">Need pricing?</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Submit your requirements and our team will provide a customised quotation.
                  </p>
                  <p className="text-xs font-semibold mt-1" style={{ color: '#8B1010' }}>
                    Response within 1 business day.
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full h-11 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: '#8B1010' }}
                >
                  Request Quote
                </button>
                <button
                  onClick={() => navigate(`/category/${categorySlug}`)}
                  className="inline-flex items-center justify-center gap-1.5 h-9 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back to {category.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quote Request Modal ────────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => { if (e.target === e.currentTarget && !submitted) setShowModal(false); }}
        >
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#8B1010] mb-0.5">
                  {product.name}
                </p>
                <h2 className="text-lg font-bold text-slate-900">Request a Quote</h2>
              </div>
              {!submitted && (
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {submitted ? (
              /* Success state */
              <div className="px-6 py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Quote Request Submitted</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-1">
                  Thank you for your enquiry. Our team will review your requirements and contact you with a customised quotation.
                </p>
                <p className="text-xs text-slate-400 mt-3 mb-7">
                  Expected response time: <span className="font-semibold text-slate-600">within 1 business day</span>
                </p>
                <button
                  onClick={() => { setShowModal(false); setSubmitted(false); }}
                  className="h-10 px-6 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: '#13273F' }}
                >
                  Done
                </button>
              </div>
            ) : (
              /* Contact form */
              <form onSubmit={handleSubmitQuote} className="px-6 py-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Full Name <span className="text-[#8B1010]">*</span>
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your name"
                    className={INPUT}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Company Name <span className="text-slate-300 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={contactCompany}
                    onChange={(e) => setContactCompany(e.target.value)}
                    placeholder="Your company"
                    className={INPUT}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Phone Number <span className="text-[#8B1010]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={INPUT}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Email Address <span className="text-[#8B1010]">*</span>
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={INPUT}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-3">
                    {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setContactMethod(method)}
                        className={cn(
                          'flex-1 h-9 rounded-xl text-xs font-semibold border transition-all',
                          contactMethod === method
                            ? 'border-[#13273F] bg-[#13273F] text-white'
                            : 'border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                        )}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Auto-included config summary */}
                <div className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Your configuration</p>
                  <div className="space-y-1">
                    {summaryRows.map(({ label, value }) => (
                      <div key={label} className="flex gap-2 text-xs text-slate-600">
                        <span className="text-slate-400 w-24 flex-shrink-0">{label}</span>
                        <span className="font-medium truncate">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {formError && (
                  <p className="text-xs text-[#8B1010] font-medium">{formError}</p>
                )}

                <button
                  type="submit"
                  className="w-full h-11 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{ background: '#8B1010' }}
                >
                  <Send size={15} />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function OptionRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5">
      <label className="w-32 flex-shrink-0 text-sm font-semibold text-slate-700">{label}</label>
      <div className="flex-1">{children}</div>
    </div>
  );
}
