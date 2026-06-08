/**
 * Product mockup image map — keyed by product slug.
 * Using loremflickr with specific print-product keywords + locked seeds
 * for consistency. Swap with real studio photography when available.
 */
const BASE = 'https://loremflickr.com/600/600';

export const PRODUCT_IMAGES: Record<string, string> = {
  // ── Business Stationery ──────────────────────────────────────────────────
  'bill-books':       `${BASE}/notepad,receipt,duplicate,carbonpaper?lock=501`,
  'invoice-books':    `${BASE}/invoice,document,paper,business?lock=502`,
  'prescription-pads':`${BASE}/prescription,pad,doctor,medical,paper?lock=503`,
  'letterheads':      `${BASE}/letterhead,stationery,corporate,paper?lock=504`,
  'envelopes':        `${BASE}/envelope,mail,paper,white,office?lock=505`,
  'id-cards':         `${BASE}/id,card,badge,identity,lanyard?lock=506`,
  'cash-receipts':    `${BASE}/receipt,paper,cash,print,book?lock=507`,
  'payment-vouchers': `${BASE}/voucher,coupon,payment,paper?lock=508`,
  'files-folders':    `${BASE}/folder,file,document,organize,office?lock=509`,

  // ── Certificates & Awards ────────────────────────────────────────────────
  'custom-certificates': `${BASE}/certificate,diploma,award,paper?lock=510`,
  'marathon-bibs':       `${BASE}/marathon,bib,running,race,number?lock=511`,
  'awards':              `${BASE}/trophy,award,plaque,recognition?lock=512`,

  // ── Marketing & Promotional ──────────────────────────────────────────────
  'flyers-pamphlets':       `${BASE}/flyer,pamphlet,leaflet,print,colorful?lock=520`,
  'brochures-catalogues':   `${BASE}/brochure,catalog,fold,print,glossy?lock=521`,
  'menu-printing':          `${BASE}/menu,restaurant,food,print,card?lock=522`,
  'tent-cards':             `${BASE}/tent,card,table,display,fold?lock=523`,
  'leaflets':               `${BASE}/leaflet,handout,print,paper,fold?lock=524`,
  'danglers':               `${BASE}/dangler,hanging,display,retail,print?lock=525`,
  'wobblers':               `${BASE}/wobbler,display,advertising,retail?lock=526`,
  'table-branding':         `${BASE}/table,branding,display,event?lock=527`,
  'posters':                `${BASE}/poster,print,wall,colorful,design?lock=528`,
  'scientific-posters':     `${BASE}/scientific,poster,research,academic?lock=529`,
  'exhibition-poster-prints':`${BASE}/exhibition,poster,display,print?lock=530`,
  'sunpack-printing':       `${BASE}/sunboard,signage,outdoor,print?lock=531`,
  'flex-printing':          `${BASE}/banner,flex,outdoor,signage,large?lock=532`,
  'fabric-printing':        `${BASE}/fabric,textile,print,cloth,color?lock=533`,

  // ── Corporate Branding ───────────────────────────────────────────────────
  'acrylic-name-boards':        `${BASE}/acrylic,nameplate,signage,office,board?lock=540`,
  'customized-vinyl-wallpapers':`${BASE}/wallpaper,vinyl,wall,interior,decor?lock=541`,
  'floor-graphics':             `${BASE}/floor,graphic,adhesive,print,design?lock=542`,
  'foam-sheets-sunboard-prints':`${BASE}/foam,board,print,display,outdoor?lock=543`,
  'self-adhesive-vinyl-prints': `${BASE}/vinyl,sticker,adhesive,print,label?lock=544`,
  'cloth-banners':              `${BASE}/banner,cloth,fabric,print,event?lock=545`,
  'aluminium-clip-on-frames':   `${BASE}/frame,aluminium,display,signage,snap?lock=546`,
  'covid-19-signages':          `${BASE}/signage,safety,notice,print,board?lock=547`,
  'inshop-branding':            `${BASE}/shop,branding,interior,display,retail?lock=548`,
  'custom-printed-banners':     `${BASE}/banner,print,advertising,outdoor,large?lock=549`,
  'non-tearable-banners':       `${BASE}/banner,durable,outdoor,print,vinyl?lock=550`,
  'decals':                     `${BASE}/decal,sticker,vinyl,print,custom?lock=551`,
  'backlit-arch-gate':          `${BASE}/arch,gate,backlit,event,entrance?lock=552`,

  // ── Exhibition & Event ───────────────────────────────────────────────────
  'exhibition-backdrops': `${BASE}/backdrop,exhibition,display,print,large?lock=560`,
  'shape-cut-standees':   `${BASE}/standee,cutout,display,print,lifesize?lock=561`,
  'canopies-tents':       `${BASE}/canopy,tent,outdoor,event,branded?lock=562`,
  'stage-backdrops':      `${BASE}/stage,backdrop,event,concert,print?lock=563`,
  'collapsible-backdrops':`${BASE}/backdrop,portable,display,print,popup?lock=564`,
  'easel-stands':         `${BASE}/easel,stand,display,art,board?lock=565`,
  'sunboard-standees':    `${BASE}/standee,sunboard,display,print,outdoor?lock=566`,
  'promo-tables':         `${BASE}/table,promotional,event,display,branded?lock=567`,
  'promotional-flag':     `${BASE}/flag,promotional,outdoor,event,teardrop?lock=568`,

  // ── Signage & Glow Boards ────────────────────────────────────────────────
  '3d-led-acrylic-boards':  `${BASE}/led,acrylic,signage,neon,board?lock=570`,
  'backlit-glow-sign-boards':`${BASE}/glow,sign,backlit,neon,board?lock=571`,
  'night-glow-signs':       `${BASE}/neon,glow,sign,night,light?lock=572`,
  'backlit-arch-gates':     `${BASE}/arch,gate,backlit,event,entrance?lock=573`,
  'shop-boards-on-flex':    `${BASE}/shopfront,sign,flex,outdoor,board?lock=574`,
  'sunboard-signs':         `${BASE}/sunboard,sign,outdoor,print?lock=575`,
  'lollipop-signboards':    `${BASE}/pole,sign,outdoor,street,display?lock=576`,
  'vinyl-printing':         `${BASE}/vinyl,print,adhesive,sticker,custom?lock=577`,

  // ── Glass Film ───────────────────────────────────────────────────────────
  'frosted-glass-film':  `${BASE}/frosted,glass,film,office,window?lock=580`,
  'one-way-vision-film': `${BASE}/glass,film,window,print,privacy?lock=581`,
  'glass-printing':      `${BASE}/glass,print,decal,window,design?lock=582`,

  // ── Apparel & Accessories ────────────────────────────────────────────────
  'round-neck-t-shirts':  `${BASE}/tshirt,round,neck,print,branded?lock=590`,
  'polo-t-shirts':        `${BASE}/polo,tshirt,branded,uniform,print?lock=591`,
  'promotional-caps':     `${BASE}/cap,hat,promotional,branded,print?lock=592`,
  'golf-umbrellas':       `${BASE}/umbrella,golf,branded,corporate?lock=593`,
  'v-neck-t-shirts':      `${BASE}/vneck,tshirt,print,apparel,branded?lock=594`,
  'single-fold-umbrellas':`${BASE}/umbrella,fold,portable,branded?lock=595`,
  'two-fold-umbrellas':   `${BASE}/umbrella,compact,branded,print?lock=596`,

  // ── Photo & Wall Decor ───────────────────────────────────────────────────
  'acrylic-photo-frames':        `${BASE}/acrylic,frame,photo,wall,clear?lock=600`,
  'canvas-frames':               `${BASE}/canvas,frame,art,print,wall?lock=601`,
  'acrylic-wall-clocks':         `${BASE}/clock,wall,acrylic,decor,modern?lock=602`,
  'photo-gallery-sets':          `${BASE}/gallery,photo,wall,frame,set?lock=603`,
  'transparent-acrylic-frames':  `${BASE}/acrylic,transparent,frame,photo?lock=604`,
  'maps-photo-frames':           `${BASE}/map,frame,wall,decor,vintage?lock=605`,
  'classic-photo-frames':        `${BASE}/photo,frame,classic,wood,print?lock=606`,
  'matte-photo-frames':          `${BASE}/matte,frame,photo,print,modern?lock=607`,
  'reverse-printed-acrylic-frames':`${BASE}/acrylic,reverse,print,frame,backlit?lock=608`,
  'wall-frames':                 `${BASE}/wall,frame,art,decor,gallery?lock=609`,
  'canvas-printing':             `${BASE}/canvas,print,art,photo,large?lock=610`,
};

export function getProductImage(slug: string): string | undefined {
  return PRODUCT_IMAGES[slug];
}
