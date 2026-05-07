// lib/seo-config.js

const BASE_URL = 'https://toolsrift.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`

export const SEO_CONFIG = {
  default: {
    title: 'ToolsRift — 1600+ Free Online Tools',
    description: 'Free online tools for everyone. Calculators, converters, text tools, PDF tools, image tools and more. No signup required.',
    keywords: 'free online tools, online tools website, calculators, converters, text tools',
    ogImage: DEFAULT_OG_IMAGE,
  },

  '/': {
    title: 'ToolsRift — 1600+ Free Online Tools',
    description: 'ToolsRift offers 1600+ free online tools including calculators, converters, text tools, PDF tools and more. No signup required.',
    keywords: 'free online tools, online tools website, toolsrift, calculators online, converters online',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'ToolsRift',
      url: BASE_URL,
      description: '1600+ free online tools',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }
  },

  '/text': {
    title: 'Free Text Tools Online — Word Counter, Case Converter & More | ToolsRift',
    description: 'Free online text tools: word counter, character counter, case converter, lorem ipsum generator, text reverser and 40+ more. No signup needed.',
    keywords: 'word counter online, character counter, case converter, lorem ipsum generator, free text tools, text reverser',
    ogImage: `${BASE_URL}/icon-text-192.png`,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Text Tools — ToolsRift', url: `${BASE_URL}/text`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/json': {
    title: 'Free JSON Tools Online — Formatter, Validator & More | ToolsRift',
    description: 'Free JSON formatter, validator, beautifier, minifier, JSON to CSV converter and 20+ more JSON tools online. Instant results, no signup.',
    keywords: 'json formatter online, json validator, json beautifier, json minifier, json to csv, free json tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'JSON Tools — ToolsRift', url: `${BASE_URL}/json`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/pdf': {
    title: 'Free PDF Tools Online — Merge, Compress, Convert | ToolsRift',
    description: 'Merge PDF, compress PDF, split PDF, PDF to Word, Word to PDF and 25+ free PDF tools online. No signup, no watermark.',
    keywords: 'pdf merge online free, compress pdf, pdf to word, split pdf online, free pdf tools, pdf converter',
    ogImage: `${BASE_URL}/icon-pdf-192.png`,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'PDF Tools — ToolsRift', url: `${BASE_URL}/pdf`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/images': {
    title: 'Free Image Tools Online — Resize, Compress, Convert | ToolsRift',
    description: 'Resize image, compress image, convert image format, crop, rotate and 45+ free image tools online. Fast, free, no signup required.',
    keywords: 'image resizer online free, compress image, image converter, resize image, crop image online, free image tools',
    ogImage: `${BASE_URL}/icon-image-192.png`,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Image Tools — ToolsRift', url: `${BASE_URL}/images`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/css': {
    title: 'Free CSS Generator Tools Online — Gradient, Shadow, Flexbox | ToolsRift',
    description: 'Free CSS generators: gradient generator, box shadow generator, flexbox generator, border radius, animations and 15+ more CSS tools online.',
    keywords: 'css gradient generator, css box shadow generator, css flexbox generator, border radius generator, free css tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'CSS Tools — ToolsRift', url: `${BASE_URL}/css`, applicationCategory: 'DeveloperApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/colors': {
    title: 'Free Color Tools Online — Color Picker, Converter, Palette | ToolsRift',
    description: 'Free color tools: color picker, hex to RGB, RGB to HSL, color palette generator, gradient maker and 15+ more. Instant results online.',
    keywords: 'color picker online, hex to rgb, rgb to hsl, color palette generator, color converter, free color tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Color Tools — ToolsRift', url: `${BASE_URL}/colors`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/encoders': {
    title: 'Free Encoder Decoder Tools — Base64, URL, JWT Online | ToolsRift',
    description: 'Free online encoders and decoders: Base64, URL encode/decode, JWT decoder, HTML entities, Hex and 20+ more encoder tools. No signup.',
    keywords: 'base64 encoder decoder, url encoder decoder, jwt decoder online, html entities encoder, free encoder tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Encoder Tools — ToolsRift', url: `${BASE_URL}/encoders`, applicationCategory: 'DeveloperApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/hash': {
    title: 'Free Hash Generator Online — MD5, SHA256, BCrypt | ToolsRift',
    description: 'Generate MD5, SHA1, SHA256, SHA512, BCrypt hashes online. Free hash generator and checker tools. Instant results, no data stored.',
    keywords: 'md5 generator online, sha256 hash generator, bcrypt hash generator, sha1 online, free hash tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Hash Tools — ToolsRift', url: `${BASE_URL}/hash`, applicationCategory: 'DeveloperApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/html': {
    title: 'Free HTML Tools Online — Formatter, Minifier, Validator | ToolsRift',
    description: 'Free HTML tools: HTML formatter, HTML minifier, HTML validator, HTML to Markdown, HTML to text and 20+ more. Online, instant, free.',
    keywords: 'html formatter online, html minifier, html validator, html to markdown, free html tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'HTML Tools — ToolsRift', url: `${BASE_URL}/html`, applicationCategory: 'DeveloperApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/formatters': {
    title: 'Free Code Formatter Online — SQL, XML, JS, CSS | ToolsRift',
    description: 'Free code formatters online: SQL formatter, XML formatter, JavaScript formatter, CSS formatter, JSON formatter and more. Instant, no signup.',
    keywords: 'sql formatter online, xml formatter, javascript formatter, code formatter online, free code formatter',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Code Formatters — ToolsRift', url: `${BASE_URL}/formatters`, applicationCategory: 'DeveloperApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/mathcalc': {
    title: 'Free Math Calculators Online — Scientific, Percentage, Fraction | ToolsRift',
    description: 'Free math calculators: scientific calculator, percentage calculator, fraction calculator, ratio calculator, statistics calculator and 30+ more.',
    keywords: 'scientific calculator online, percentage calculator, fraction calculator, ratio calculator, free math calculators',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Math Calculators — ToolsRift', url: `${BASE_URL}/mathcalc`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/financecalc': {
    title: 'Free Finance & Health Calculators — EMI, GST, BMI | ToolsRift',
    description: 'Free financial calculators: EMI calculator, GST calculator, loan calculator, BMI calculator, SIP calculator, income tax calculator India.',
    keywords: 'emi calculator india, gst calculator, loan calculator, bmi calculator, sip calculator, income tax calculator india',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Finance Calculators — ToolsRift', url: `${BASE_URL}/financecalc`, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/units': {
    title: 'Free Unit Converter Online — Length, Weight, Temperature | ToolsRift',
    description: 'Free unit converters: length converter, weight converter, temperature converter, volume converter, speed converter and 20+ more online.',
    keywords: 'unit converter online, length converter, weight converter, temperature converter, free unit converter',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Unit Converters — ToolsRift', url: `${BASE_URL}/units`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/converters2': {
    title: 'Free Online Converters — Number, Data, Currency | ToolsRift',
    description: 'Free online converters: number system converter, data storage converter, currency converter and more. Fast, accurate, no signup needed.',
    keywords: 'number system converter, binary to decimal, data converter online, currency converter free, unit converter',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Converters — ToolsRift', url: `${BASE_URL}/converters2`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/devtools': {
    title: 'Free Developer Tools Online — Regex, UUID, API Tester | ToolsRift',
    description: 'Free developer tools: regex tester, UUID generator, API tester, cron expression builder, diff checker and 35+ more dev tools online.',
    keywords: 'regex tester online, uuid generator, api tester online, cron expression generator, developer tools online free',
    ogImage: `${BASE_URL}/icon-dev-192.png`,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Developer Tools — ToolsRift', url: `${BASE_URL}/devtools`, applicationCategory: 'DeveloperApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/business': {
    title: 'Free Business Tools Online — Invoice, Resume, Cover Letter | ToolsRift',
    description: 'Free business tools: invoice generator, resume builder, cover letter generator, business card maker, SWOT analysis and more. Download free.',
    keywords: 'invoice generator free, resume builder online, cover letter generator, business card maker, free business tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Business Tools — ToolsRift', url: `${BASE_URL}/business`, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/fancy': {
    title: 'Fancy Text Generator Online — Cool Fonts & Stylish Text | ToolsRift',
    description: 'Generate fancy text, cool fonts, stylish letters for Instagram, Facebook, Twitter bios. 20+ text styles, copy paste ready. Free online.',
    keywords: 'fancy text generator, cool text generator, stylish font generator, instagram font generator, facebook font changer',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Fancy Text Generator — ToolsRift', url: `${BASE_URL}/fancy`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/encoding': {
    title: 'Free Text Encoding Tools Online — ASCII, Unicode, Morse | ToolsRift',
    description: 'Free text encoding and decoding tools: ASCII converter, Unicode lookup, Morse code translator, binary text, ROT13 and more online.',
    keywords: 'ascii converter online, unicode lookup, morse code translator, binary to text, rot13 encoder, free encoding tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Encoding Tools — ToolsRift', url: `${BASE_URL}/encoding`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/generators': {
    title: 'Free Online Generators — Password, QR Code, UUID | ToolsRift',
    description: 'Free online generators: password generator, QR code generator, UUID generator, barcode generator, random name generator and more.',
    keywords: 'password generator online, qr code generator free, uuid generator, barcode generator, random generator online',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Generator Tools — ToolsRift', url: `${BASE_URL}/generators`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/generators2': {
    title: 'Free Content Generator Tools Online | ToolsRift',
    description: 'Free content generators: hashtag generator, meta tag generator, lorem ipsum generator, dummy text generator, email template generator and more.',
    keywords: 'hashtag generator, meta tag generator, lorem ipsum generator, content generator online, dummy text generator',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Content Generators — ToolsRift', url: `${BASE_URL}/generators2`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/devgen': {
    title: 'Free Dev Config Generators — .gitignore, Dockerfile, README | ToolsRift',
    description: 'Free developer config generators: .gitignore generator, Dockerfile generator, README generator, package.json generator and 25+ more dev tools.',
    keywords: 'gitignore generator, dockerfile generator, readme generator, package json generator, dev config generator online',
    ogImage: `${BASE_URL}/icon-dev-192.png`,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Dev Config Generators — ToolsRift', url: `${BASE_URL}/devgen`, applicationCategory: 'DeveloperApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/js': {
    title: 'Free JavaScript Tools Online — Minifier, Formatter, Obfuscator | ToolsRift',
    description: 'Free JavaScript tools: JS minifier, JS formatter, JS obfuscator, JavaScript validator and more online developer tools. No signup.',
    keywords: 'javascript minifier online, js formatter, javascript obfuscator, js validator online, free javascript tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'JavaScript Tools — ToolsRift', url: `${BASE_URL}/js`, applicationCategory: 'DeveloperApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
  },

  '/about': {
    title: 'About ToolsRift — Free Online Tools Platform',
    description: 'ToolsRift is a free online tools platform offering 1600+ tools for developers, students, and professionals. Learn about our mission and team.',
    keywords: 'about toolsrift, free online tools platform, toolsrift mission',
    ogImage: DEFAULT_OG_IMAGE,
  },

  '/privacy-policy': {
    title: 'Privacy Policy | ToolsRift',
    description: 'Read the ToolsRift privacy policy. Learn how we handle your data and protect your privacy.',
    keywords: 'toolsrift privacy policy',
    ogImage: DEFAULT_OG_IMAGE,
  },

  '/pricing': {
    title: 'Pricing — Free & Pro Plans | ToolsRift',
    description: 'ToolsRift is free forever. Explore our free and Pro plans with 1600+ online tools, no signup required for the free tier.',
    keywords: 'toolsrift pricing, free online tools, toolsrift pro plan',
    ogImage: DEFAULT_OG_IMAGE,
  },
}

export function getPageSEO(path) {
  return SEO_CONFIG[path] || SEO_CONFIG.default
}
