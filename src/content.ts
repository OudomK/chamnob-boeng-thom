/**
 * ============================================================
 *  SITE CONTENT — edit this file to update text, menu & prices.
 * ============================================================
 *  • Every user-facing string is { km, en }. Khmer is primary.
 *  • Anything still unknown is marked [PLACEHOLDER]. Search for
 *    "PLACEHOLDER" in this file to find what still needs filling.
 *  • Photos: drop files into /public/images and set `src` to
 *    "/images/your-file.jpg" (see public/images/README.md).
 */

export type Lang = "km" | "en";
export type Text = { km: string; en: string };

/** Pick the right language from a { km, en } pair. */
export const t = (text: Text, lang: Lang) => text[lang];

// ------------------------------------------------------------------
// Business info
// ------------------------------------------------------------------
export const business = {
  name: { km: "ជំនោបឹងធំ", en: "Chamnob Boeng Thom" },
  tagline: {
    km: "អាហារខ្មែរធម្មជាតិ ក្បែរមាត់បឹង ក្រោមម្លប់ដូង",
    en: "Natural Khmer food by the lake, under the coconut palms",
  },
  /** Used for SEO meta description & Facebook link previews. */
  seoDescription: {
    km: "ជំនោបឹងធំ — ភោជនីយដ្ឋានខ្មែរបែបធម្មជាតិ ក្បែរមាត់បឹង ក្រោមម្លប់ដូង ក្នុងខេត្តកំពង់ចាម។ ល្បីល្បាញដោយទេសភាពថ្ងៃលិច។ បើករៀងរាល់ថ្ងៃ ២៤ម៉ោង។ ទូរស័ព្ទ ០១២ ៣៧២ ៤៨៩",
    en: "Chamnob Boeng Thom — a countryside Khmer restaurant by the lake under coconut palms in Kampong Cham, Cambodia. Famous for sunset views. Open 24 hours, every day. Tel 012 372 489.",
  },
  phone: {
    display: "012 372 489",
    tel: "tel:012372489",
    international: "+855 12 372 489",
  },
  facebook: "https://facebook.com/profile.php?id=61595489751142",
  location: {
    lat: 12.0144852,
    lng: 105.3568384,
    address: {
      km: "[PLACEHOLDER — need exact address] ក្បែរសាលាឃុំវិហារធំ ខេត្តកំពង់ចាម",
      en: "[PLACEHOLDER — need exact address] Near Vihear Thom Commune Hall, Kampong Cham, Cambodia",
    },
    region: { km: "ខេត្តកំពង់ចាម", en: "Kampong Cham" },
  },
  hours: { km: "បើករៀងរាល់ថ្ងៃ ២៤ម៉ោង", en: "Open daily, 24 hours" },
  services: {
    km: "ញ៉ាំនៅហាង • ខ្ចប់យកទៅផ្ទះ • មិនមានសេវាដឹកជញ្ជូន",
    en: "Dine-in • Takeout • No delivery",
  },
};

export const mapLinks = {
  /** Opens Google Maps app / site at the pin. */
  google: `https://www.google.com/maps/search/?api=1&query=${business.location.lat},${business.location.lng}`,
  /** Keyless embed for the iframe. */
  embed: `https://maps.google.com/maps?q=${business.location.lat},${business.location.lng}&z=15&output=embed`,
};

// ------------------------------------------------------------------
// UI labels (navigation, buttons, section titles)
// ------------------------------------------------------------------
export const ui = {
  nav: [
    { id: "about", label: { km: "អំពីយើង", en: "About" } },
    { id: "menu", label: { km: "មុខម្ហូប", en: "Menu" } },
    { id: "gallery", label: { km: "រូបភាព", en: "Gallery" } },
    { id: "contact", label: { km: "ទីតាំង", en: "Location" } },
  ],
  callUs: { km: "ទូរស័ព្ទមកយើង", en: "Call Us" },
  call: { km: "ហៅទូរស័ព្ទ", en: "Call" },
  facebookPage: { km: "ទំព័រហ្វេសប៊ុក", en: "Facebook Page" },
  directions: { km: "បើកផែនទី", en: "Directions" },
  openInMaps: { km: "បើកក្នុង Google Maps", en: "Open in Google Maps" },
  openMenu: { km: "បើកម៉ឺនុយ", en: "Open menu" },
  closeMenu: { km: "បិទម៉ឺនុយ", en: "Close menu" },
  /** Label of the language switch (shows the OTHER language). */
  switchLang: { km: "EN", en: "ខ្មែរ" },
  switchLangAria: { km: "Switch to English", en: "ប្តូរទៅភាសាខ្មែរ" },
};

// ------------------------------------------------------------------
// Hero
// ------------------------------------------------------------------
export const hero = {
  /**
   * Optional hero photo (e.g. "/images/hero.jpg"). Leave empty to use
   * the built-in illustrated sunset scene (0 KB of image download).
   */
  image: "",
  imageAlt: {
    km: "ទេសភាពថ្ងៃលិចលើបឹង នៅជំនោបឹងធំ",
    en: "Sunset over the lake at Chamnob Boeng Thom",
  },
  eyebrow: { km: "ខេត្តកំពង់ចាម • បើក ២៤ម៉ោង", en: "Kampong Cham • Open 24/7" },
};

// ------------------------------------------------------------------
// About
// ------------------------------------------------------------------
export const about = {
  eyebrow: { km: "រឿងរ៉ាវរបស់យើង", en: "Our story" },
  title: { km: "កន្លែងសម្រាកបែបជនបទ ក្បែរមាត់បឹង", en: "A countryside escape by the lake" },
  paragraphs: [
    {
      km: "ជំនោបឹងធំ ជាកន្លែងញ៉ាំអាហារបែបធម្មជាតិ ស្ថិតនៅក្បែរមាត់បឹង ក្នុងខេត្តកំពង់ចាម។ នៅទីនេះ អ្នកនឹងបានអង្គុយញ៉ាំអាហារក្រោមម្លប់ដើមដូង ស្រូបខ្យល់បរិសុទ្ធពីផ្ទៃបឹង ឆ្ងាយពីភាពមមាញឹកនៃទីក្រុង។",
      en: "Chamnob Boeng Thom is a natural lakeside eatery in Kampong Cham province. Sit back under the shade of coconut palms, enjoy the fresh breeze off the water, and leave the busy city behind.",
    },
    {
      km: "យើងរៀបចំម្ហូបខ្មែរបែបជនបទ រសជាតិដូចធ្វើនៅផ្ទះ — សាកសមបំផុតសម្រាប់ការជួបជុំគ្រួសារ មិត្តភក្តិ និងពិធីជប់លៀងតូចៗ។",
      en: "We serve countryside Khmer cooking with a home-style taste — perfect for family gatherings, friends, and small celebrations.",
    },
    {
      km: "ពេលល្ងាច កុំភ្លេចរង់ចាំមើលព្រះអាទិត្យលិចលើផ្ទៃបឹង — ទេសភាពដែលភ្ញៀវរបស់យើងស្រឡាញ់ជាងគេ។",
      en: "In the evening, stay for the sunset over the lake — the view our guests love most.",
    },
  ],
  facts: [
    { icon: "clock", label: { km: "បើករៀងរាល់ថ្ងៃ ២៤ម៉ោង", en: "Open every day, 24 hours" } },
    { icon: "utensils", label: { km: "ញ៉ាំនៅហាង និងខ្ចប់យកទៅផ្ទះ", en: "Dine-in & takeout" } },
    { icon: "users", label: { km: "សាកសមសម្រាប់គ្រួសារ និងក្រុម", en: "Great for families & groups" } },
    { icon: "sun", label: { km: "ទេសភាពថ្ងៃលិចដ៏ស្រស់ស្អាត", en: "Beautiful sunset views" } },
  ],
} as const;

// ------------------------------------------------------------------
// Features (3 cards)
// ------------------------------------------------------------------
export const features = [
  {
    icon: "waves",
    title: { km: "កន្លែងអង្គុយមើលបឹង", en: "Lake-view seating" },
    body: {
      km: "តុអង្គុយនៅជិតមាត់ទឹក មើលឃើញផ្ទៃបឹងធំល្វឹងល្វើយ ខ្យល់បក់ត្រជាក់ពេញមួយថ្ងៃ។",
      en: "Tables right by the water with wide-open lake views and a cool breeze all day.",
    },
  },
  {
    icon: "palm",
    title: { km: "ម្លប់ដើមដូង", en: "Coconut shade" },
    body: {
      km: "អង្គុយសម្រាកក្រោមម្លប់ដើមដូង ត្រជាក់ស្រួល ទោះបីជាពេលថ្ងៃត្រង់ក៏ដោយ។",
      en: "Relax beneath tall coconut palms — shady and cool, even at midday.",
    },
  },
  {
    icon: "sun",
    title: { km: "ទេសភាពថ្ងៃលិច", en: "Sunset views" },
    body: {
      km: "ពេលល្ងាច មេឃពណ៌មាសឆ្លុះលើផ្ទៃបឹង — ពេលវេលាល្អបំផុតសម្រាប់ថតរូប និងញ៉ាំអាហារពេលល្ងាច។",
      en: "Golden evening skies reflected on the lake — the best time for photos and dinner.",
    },
  },
] as const;

// ------------------------------------------------------------------
// Menu
// ------------------------------------------------------------------
// [PLACEHOLDER] The dishes below are typical sample dishes — replace them
// with your real menu. Set `price` to a string like "15,000៛" or "$4".
// Items without a price show a "[PLACEHOLDER]" badge on the site.
export type MenuItem = { name: Text; price?: string };
export type MenuCategory = { id: string; icon: string; title: Text; items: MenuItem[] };

export const menu = {
  eyebrow: { km: "មុខម្ហូប", en: "Menu" },
  title: { km: "ម្ហូបខ្មែរបែបជនបទ", en: "Countryside Khmer dishes" },
  note: {
    km: "[PLACEHOLDER — add real prices] តម្លៃនឹងបញ្ចូលឆាប់ៗ។ សូមទូរស័ព្ទសួរព័ត៌មានបន្ថែម។",
    en: "[PLACEHOLDER — add real prices] Prices coming soon. Please call us to ask.",
  },
  pricePlaceholder: "[PLACEHOLDER]",
  categories: [
    {
      id: "seafood",
      icon: "fish",
      title: { km: "គ្រឿងសមុទ្រ", en: "Seafood" },
      items: [
        { name: { km: "បង្គាអាំង", en: "Grilled river prawns" } },
        { name: { km: "ក្តាមឆាម្រេចខ្ចី", en: "Crab stir-fried with green pepper" } },
        { name: { km: "មឹកឆាម្រេចខ្ចី", en: "Squid stir-fried with green pepper" } },
        { name: { km: "លៀសឆាម្ទេស", en: "Stir-fried clams with chili" } },
      ],
    },
    {
      id: "soups",
      icon: "bowl",
      title: { km: "សម្ល", en: "Khmer soups" },
      items: [
        { name: { km: "សម្លកកូរ", en: "Samlor korko (Khmer stirred soup)" } },
        { name: { km: "សម្លម្ជូរត្រី", en: "Sour fish soup" } },
        { name: { km: "ស្ងោរមាន់ក្រូចឆ្មារជ្រក់", en: "Chicken soup with pickled lime" } },
        { name: { km: "សម្លប្រហើរ", en: "Mild clear vegetable soup" } },
      ],
    },
    {
      id: "grilled",
      icon: "flame",
      title: { km: "អាំង / ចៀន", en: "Grilled & fried" },
      items: [
        { name: { km: "ត្រីអាំង ជាមួយទឹកជ្រលក់", en: "Grilled fish with dipping sauce" } },
        { name: { km: "ត្រីចៀនស្វាយ", en: "Fried fish with green mango salad" } },
        { name: { km: "មាន់អាំង", en: "Grilled chicken" } },
        { name: { km: "សាច់គោចង្កាក់", en: "Beef skewers" } },
        { name: { km: "បាយឆា", en: "Fried rice" } },
      ],
    },
    {
      id: "drinks",
      icon: "cup",
      title: { km: "ភេសជ្ជៈ", en: "Drinks" },
      items: [
        { name: { km: "ទឹកដូងស្រស់", en: "Fresh coconut" } },
        { name: { km: "កាហ្វេទឹកដោះគោទឹកកក", en: "Iced coffee with milk" } },
        { name: { km: "តែក្រូចឆ្មារទឹកកក", en: "Iced lime tea" } },
        { name: { km: "ទឹកក្រឡុកផ្លែឈើ", en: "Fruit shake" } },
        { name: { km: "ស្រាបៀរ", en: "Beer" } },
        { name: { km: "ភេសជ្ជៈត្រជាក់", en: "Soft drinks" } },
      ],
    },
  ] satisfies MenuCategory[],
};

// ------------------------------------------------------------------
// Gallery
// ------------------------------------------------------------------
// Add photos: put files in /public/images and set `src`, e.g.
//   { src: "/images/sunset-1.jpg", alt: {...} }
// Tiles without `src` render a styled placeholder.
export type GalleryItem = { src?: string; alt: Text };

export const gallery = {
  eyebrow: { km: "រូបភាព", en: "Gallery" },
  title: { km: "ទេសភាពនៅជំនោបឹងធំ", en: "Moments at Chamnob Boeng Thom" },
  placeholderLabel: "[PLACEHOLDER — add photo]",
  items: [
    { alt: { km: "ថ្ងៃលិចលើបឹង", en: "Sunset over the lake" } },
    { alt: { km: "ម្លប់ដើមដូង", en: "Coconut palm shade" } },
    { alt: { km: "ម្ហូបខ្មែរ", en: "Khmer dishes" } },
    { alt: { km: "កន្លែងអង្គុយមាត់បឹង", en: "Lakeside seating" } },
    { alt: { km: "ការជួបជុំគ្រួសារ", en: "Family gatherings" } },
    { alt: { km: "ផ្ទៃបឹងពេលព្រឹក", en: "The lake in the morning" } },
  ] satisfies GalleryItem[],
};

// ------------------------------------------------------------------
// Location & contact
// ------------------------------------------------------------------
export const contact = {
  eyebrow: { km: "ទីតាំង និងទំនាក់ទំនង", en: "Location & contact" },
  title: { km: "មកលេងយើង", en: "Come visit us" },
  labels: {
    address: { km: "អាសយដ្ឋាន", en: "Address" },
    phone: { km: "លេខទូរស័ព្ទ", en: "Phone" },
    hours: { km: "ម៉ោងបើក", en: "Opening hours" },
    services: { km: "សេវាកម្ម", en: "Services" },
  },
  mapTitle: { km: "ផែនទីទៅកាន់ជំនោបឹងធំ", en: "Map to Chamnob Boeng Thom" },
};

// ------------------------------------------------------------------
// Footer
// ------------------------------------------------------------------
export const footer = {
  rights: { km: "រក្សាសិទ្ធិគ្រប់យ៉ាង", en: "All rights reserved" },
};
