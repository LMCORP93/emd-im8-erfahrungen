// ── Types ──────────────────────────────────────────────────────────────

export interface Product {
  rank: number; name: string; brand: string; slug: string; image: string; brandLogo: string;
  rating: number; reviewCount: number; promoCode: string; promoPercent: number;
  originalPrice: string; discountPrice: string; affiliateLink: string; origin: string;
  availability: string; shipping?: string; productType: string; pros: string[]; cons: string[]; description: string;
}
export interface SiteConfig {
  domain: string; isIndexable?: boolean; siteName: string; brand: string; product: string;
  productCategory: string; productFormat: string; tagline: string; affiliateLink: string;
  promoCode: string; originalPrice: string; discountPrice: string; rating: number;
  author: { name: string; avatar: string; bio: string; };
  seo: { title: string; description: string; ogImage: string; };
  analyticsMeasurementId?: string; breadcrumbs: { label: string; href: string }[];
  quickSummary: { assets: string[]; considerations: string[]; };
  pros: string[]; cons: string[]; faq: { question: string; answer: string }[];
  products: Product[]; tocItems: { id: string; label: string }[];
  pages: { type: 'comparatif' | 'blog'; label: string; slug: string }[];
}

const products: Product[] = [
  {
    rank: 1,
    name: 'Daily Ultimate Essentials',
    brand: 'IM8',
    slug: 'im8',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69622bf7826caba2f8a5b72d_IM8.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69380c53746ebfad67adf684_Header-Logo-New.webp',
    rating: 8.7,
    reviewCount: 500,
    promoCode: 'LMC',
    promoPercent: 10,
    originalPrice: '$112.00',
    discountPrice: '$100.80',
    affiliateLink: 'https://taap.it/im8health',
    origin: '🇺🇸 USA',
    availability: 'Online verfügbar',
    shipping: 'Lieferung nach Deutschland prüfen',
    productType: 'All-in-one Pulver für tägliche Mikronährstoff-Routine',
    pros: [
      'Sehr kompletter Daily-Drink statt einzelnes Standard-Supplement',
      'Premium-Positionierung mit Vitaminen, Mineralstoffen und Pflanzenstoffen',
      'Praktisch für Menschen, die mehrere Produkte durch eine Routine ersetzen wollen',
      'Offizieller Link mit LMC-Code verfügbar'
    ],
    cons: [
      'Deutlich teurer als einfache Multivitamin- oder Elektrolytprodukte',
      'Nicht ideal, wenn man nur einen isolierten Wirkstoff sucht',
      'Der beste Preis hängt von Angebot, Abo und Versandbedingungen ab'
    ],
    description: 'IM8 ist hier die Hauptempfehlung, weil es als täglicher All-in-one Drink gedacht ist: weniger einzelne Dosen, mehr Routine. Der Ansatz passt gut zu Käufern, die morgens ein funktionelles Getränk wollen und nicht fünf verschiedene Dosen im Schrank stehen haben möchten.'
  }
];

const config: SiteConfig = {
  domain: 'https://emd-im8-erfahrungen.pages.dev',
  isIndexable: false,
  siteName: 'IM8 Erfahrungen',
  brand: 'IM8',
  product: 'Daily Ultimate Essentials',
  productCategory: 'All-in-one Nahrungsergänzung',
  productFormat: 'Pulver',
  tagline: 'Ein nüchterner deutscher Erfahrungsbericht zu IM8, Preis, Code und Alltagstauglichkeit.',
  affiliateLink: products[0].affiliateLink,
  promoCode: products[0].promoCode,
  originalPrice: products[0].originalPrice,
  discountPrice: products[0].discountPrice,
  rating: products[0].rating,
  author: { name: 'Tim', avatar: '/author-avatar.png', bio: 'Tester und Redakteur für Nahrungsergänzungsmittel seit 2024.' },
  seo: {
    title: 'IM8 Erfahrungen 2026: Test, Wirkung, Preis & Rabattcode',
    description: 'IM8 Erfahrungen auf Deutsch: Was steckt in Daily Ultimate Essentials, für wen lohnt sich der All-in-one Drink, was kostet IM8 und welchen Rabattcode gibt es?',
    ogImage: '/og-image.jpg',
  },
  analyticsMeasurementId: undefined,
  breadcrumbs: [{ label: 'IM8 Erfahrungen', href: '/' }],
  quickSummary: {
    assets: [
      'Starker All-in-one Ansatz für eine tägliche Morgenroutine',
      'Gute Option für Käufer, die mehrere Supplements vereinfachen wollen',
      'Premium-Auftritt, klarer Drink-Use-Case und offizieller LMC-Code',
      'Am spannendsten für Routine, Energiegefühl und allgemeine Versorgung, nicht als medizinische Lösung'
    ],
    considerations: [
      'Preis höher als bei einfachen Einzelprodukten',
      'Nicht für jeden sinnvoll, wenn bereits viele Nährstoffe separat genutzt werden',
      'Versand, Abo und Endpreis sollten vor dem Kauf geprüft werden'
    ],
  },
  pros: products[0].pros,
  cons: products[0].cons,
  faq: [
    { question: 'Was ist IM8?', answer: 'IM8 Daily Ultimate Essentials ist ein Premium-All-in-one Pulver, das als tägliches Getränk genutzt wird. Es kombiniert mehrere Nährstoff- und Pflanzenstoff-Kategorien in einer Routine.' },
    { question: 'Lohnt sich IM8 in Deutschland?', answer: 'IM8 kann sich lohnen, wenn du bewusst eine einfache tägliche Routine suchst und nicht mehrere Einzelprodukte kombinieren willst. Wer nur einen einzelnen Wirkstoff sucht, fährt oft günstiger mit einem gezielten Produkt.' },
    { question: 'Gibt es einen IM8 Rabattcode?', answer: 'Über unseren Link ist aktuell der Code LMC hinterlegt. Prüfe den finalen Rabatt immer direkt im Checkout, weil Aktionen und Versandbedingungen sich ändern können.' },
    { question: 'Ist IM8 ein Medikament?', answer: 'Nein. IM8 ist ein Nahrungsergänzungsmittel und ersetzt keine medizinische Beratung, Diagnose oder Behandlung.' },
    { question: 'Wie nimmt man IM8 ein?', answer: 'IM8 wird typischerweise als Pulver mit Wasser gemischt und als tägliches Getränk genutzt. Die genaue Anwendung sollte nach Herstellerangaben erfolgen.' },
    { question: 'Für wen ist IM8 eher nicht geeignet?', answer: 'Wenn du schwanger bist, Medikamente nimmst, krank bist oder empfindlich auf bestimmte Inhaltsstoffe reagierst, solltest du vor der Nutzung ärztlichen Rat einholen.' }
  ],
  products,
  tocItems: [
    { id: 'kurzfassung', label: 'Kurzfassung' },
    { id: 'was-ist-im8', label: 'Was ist IM8?' },
    { id: 'erfahrungen', label: 'Unsere IM8 Erfahrungen' },
    { id: 'inhaltsstoffe', label: 'Inhaltsstoffe & Formel' },
    { id: 'preis', label: 'Preis & Rabattcode' },
    { id: 'fuer-wen', label: 'Für wen lohnt es sich?' },
    { id: 'verdict', label: 'Fazit' },
    { id: 'faq', label: 'FAQ' },
  ],
  pages: [
    { type: 'blog', label: 'IM8 Erfahrungen', slug: '/' },
    { type: 'blog', label: 'IM8 Rabattcode', slug: '/im8-rabattcode/' },
    { type: 'blog', label: 'IM8 Test', slug: '/im8-test/' },
    { type: 'blog', label: 'IM8 Preis', slug: '/im8-preis/' },
    { type: 'blog', label: 'IM8 Deutschland', slug: '/im8-deutschland/' },
  ],
};

export default config;
