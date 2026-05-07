// lib/seo-config.js
// ToolsRift — Central SEO Configuration
// Edit keywords, titles, and descriptions for ALL pages here in one place.

const BASE_URL = 'https://toolsrift.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`

export const SEO_CONFIG = {

  default: {
    title: 'ToolsRift — 1600+ Free Online Tools',
    description: 'Free online tools for everyone. Calculators, converters, text tools, PDF tools, image tools and more. No signup required.',
    keywords: 'free online tools, online tools website, toolsrift, calculators online, converters online',
    ogImage: DEFAULT_OG_IMAGE,
  },

  '/': {
    title: 'ToolsRift — 1600+ Free Online Tools | No Signup Required',
    description: 'ToolsRift offers 1600+ free online tools including calculators, converters, text tools, PDF tools, image tools and developer tools. No signup, no limits.',
    keywords: 'free online tools, online tools website, toolsrift, calculators online, converters online, text tools, pdf tools free',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'ToolsRift',
      url: BASE_URL,
      description: '1600+ free online tools for everyone',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  },

  '/text': {
    title: 'Free Text Tools Online — Word Counter, Case Converter & More | ToolsRift',
    description: 'Free online text tools: word counter, character counter, case converter, lorem ipsum generator, text reverser, readability checker and 40+ more. No signup needed.',
    keywords: 'word counter online, character counter, case converter, lorem ipsum generator, free text tools, text reverser, readability checker, word frequency counter',
    ogImage: `${BASE_URL}/icon-text-192.png`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Text Tools — ToolsRift',
      url: `${BASE_URL}/text`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/json': {
    title: 'Free JSON Tools Online — Formatter, Validator, Beautifier | ToolsRift',
    description: 'Free JSON formatter, JSON validator, JSON beautifier, JSON minifier, JSON to CSV converter and 20+ more JSON tools online. Instant results, no signup.',
    keywords: 'json formatter online, json validator, json beautifier, json minifier, json to csv, json to xml, free json tools, json editor online',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'JSON Tools — ToolsRift',
      url: `${BASE_URL}/json`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/pdf': {
    title: 'Free PDF Tools Online — Merge, Compress, Split, Convert | ToolsRift',
    description: 'Merge PDF, compress PDF, split PDF, PDF to Word, Word to PDF and 25+ free PDF tools online. No signup, no watermark, works in browser.',
    keywords: 'pdf merge online free, compress pdf online, pdf to word converter, split pdf online, pdf tools free, pdf converter online, word to pdf',
    ogImage: `${BASE_URL}/icon-pdf-192.png`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'PDF Tools — ToolsRift',
      url: `${BASE_URL}/pdf`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/images': {
    title: 'Free Image Tools Online — Resize, Compress, Convert | ToolsRift',
    description: 'Resize image, compress image, convert image format, crop image, rotate and 45+ free image tools online. Fast, free, no signup required.',
    keywords: 'image resizer online free, compress image online, image converter, resize image free, crop image online, jpg to png, png to webp, image tools',
    ogImage: `${BASE_URL}/icon-image-192.png`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Image Tools — ToolsRift',
      url: `${BASE_URL}/images`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/css': {
    title: 'Free CSS Generator Tools Online — Gradient, Shadow, Flexbox | ToolsRift',
    description: 'Free CSS generators: gradient generator, box shadow generator, flexbox generator, border radius, CSS animations, glassmorphism and 15+ more CSS tools online.',
    keywords: 'css gradient generator, css box shadow generator, css flexbox generator, border radius generator, css animation generator, glassmorphism css, free css tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'CSS Tools — ToolsRift',
      url: `${BASE_URL}/css`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/colors': {
    title: 'Free Color Tools Online — Color Picker, Converter, Palette Generator | ToolsRift',
    description: 'Free color tools: color picker, hex to RGB, RGB to HSL, color palette generator, gradient maker, color contrast checker and 15+ more. Instant results online.',
    keywords: 'color picker online, hex to rgb converter, rgb to hsl, color palette generator, color contrast checker, gradient generator, free color tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Color Tools — ToolsRift',
      url: `${BASE_URL}/colors`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/encoders': {
    title: 'Free Encoder Decoder Tools Online — Base64, URL, JWT | ToolsRift',
    description: 'Free online encoders and decoders: Base64 encode decode, URL encode decode, JWT decoder, HTML entities encoder, Hex encoder and 20+ more. No signup.',
    keywords: 'base64 encoder decoder online, url encoder decoder, jwt decoder online, html entities encoder, hex encoder, free encoder decoder tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Encoder & Decoder Tools — ToolsRift',
      url: `${BASE_URL}/encoders`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/hash': {
    title: 'Free Hash Generator Online — MD5, SHA256, SHA512, BCrypt | ToolsRift',
    description: 'Generate MD5, SHA1, SHA256, SHA512, BCrypt hashes online free. Hash generator and hash checker tools. Instant results, no data stored, no signup.',
    keywords: 'md5 generator online, sha256 hash generator, bcrypt hash generator, sha1 online, sha512 generator, hash checker online, free hash tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Hash Generator Tools — ToolsRift',
      url: `${BASE_URL}/hash`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/html': {
    title: 'Free HTML Tools Online — Formatter, Minifier, Validator | ToolsRift',
    description: 'Free HTML tools: HTML formatter, HTML minifier, HTML validator, HTML to Markdown, HTML to text, HTML entity encoder and 20+ more. Online, instant, free.',
    keywords: 'html formatter online, html minifier, html validator free, html to markdown, html to text, html entity encoder, free html tools online',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'HTML Tools — ToolsRift',
      url: `${BASE_URL}/html`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/formatters': {
    title: 'Free Code Formatter Online — SQL, XML, JavaScript, CSS | ToolsRift',
    description: 'Free code formatters online: SQL formatter, XML formatter, JavaScript formatter, CSS formatter, Python formatter and more. Instant, no signup required.',
    keywords: 'sql formatter online, xml formatter, javascript formatter online, css formatter, code formatter online, python formatter, free code formatter',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Code Formatters — ToolsRift',
      url: `${BASE_URL}/formatters`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/mathcalc': {
    title: 'Free Math Calculators Online — Scientific, Percentage, Fraction | ToolsRift',
    description: 'Free math calculators: scientific calculator, percentage calculator, fraction calculator, ratio calculator, statistics calculator, probability and 30+ more.',
    keywords: 'scientific calculator online, percentage calculator, fraction calculator online, ratio calculator, statistics calculator, probability calculator, free math calculators',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Math Calculators — ToolsRift',
      url: `${BASE_URL}/mathcalc`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/financecalc': {
    title: 'Free Finance & Health Calculators — EMI, GST, BMI | ToolsRift',
    description: 'Free financial and health calculators: EMI calculator India, GST calculator, loan calculator, BMI calculator, SIP calculator, income tax calculator and more.',
    keywords: 'emi calculator india, gst calculator india, loan calculator, bmi calculator, sip calculator, income tax calculator india, compound interest calculator, free finance calculators',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Finance & Health Calculators — ToolsRift',
      url: `${BASE_URL}/financecalc`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/units': {
    title: 'Free Unit Converter Online — Length, Weight, Temperature | ToolsRift',
    description: 'Free unit converters: length converter, weight converter, temperature converter, volume converter, speed converter, area converter and 20+ more online.',
    keywords: 'unit converter online free, length converter, weight converter, temperature converter, volume converter, speed converter, km to miles, kg to lbs',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Unit Converters — ToolsRift',
      url: `${BASE_URL}/units`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/converters2': {
    title: 'Free Online Converters — Number System, Data, Currency | ToolsRift',
    description: 'Free online converters: binary to decimal, hex to binary, data storage converter, currency converter and more. Fast, accurate, no signup needed.',
    keywords: 'number system converter, binary to decimal, hex to binary, data storage converter, currency converter free, online converter tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Converters — ToolsRift',
      url: `${BASE_URL}/converters2`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/devtools': {
    title: 'Free Developer Tools Online — Regex Tester, UUID, Diff Checker | ToolsRift',
    description: 'Free developer tools: regex tester, UUID generator, API tester, cron expression builder, diff checker, color picker and 35+ more dev tools online.',
    keywords: 'regex tester online, uuid generator, diff checker online, cron expression generator, api tester, developer tools online free, color picker for developers',
    ogImage: `${BASE_URL}/icon-dev-192.png`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Developer Tools — ToolsRift',
      url: `${BASE_URL}/devtools`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/business': {
    title: 'Free Business Tools Online — Invoice Generator, Resume Builder | ToolsRift',
    description: 'Free business tools: invoice generator, resume builder, cover letter generator, business card maker, SWOT analysis, UTM builder and more. Download free.',
    keywords: 'invoice generator free online, resume builder online, cover letter generator, business card maker, swot analysis tool, utm builder, free business tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Business Tools — ToolsRift',
      url: `${BASE_URL}/business`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/fancy': {
    title: 'Fancy Text Generator Online — Cool Fonts & Stylish Text | ToolsRift',
    description: 'Generate fancy text, cool fonts, stylish letters for Instagram, Facebook, Twitter bios. 20+ text styles — bold, italic, cursive, bubble and more. Copy paste ready.',
    keywords: 'fancy text generator, cool text generator, stylish font generator, instagram font generator, facebook font changer, cursive text generator, bubble text generator',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fancy Text Generator — ToolsRift',
      url: `${BASE_URL}/fancy`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/encoding': {
    title: 'Free Text Encoding Tools — ASCII, Unicode, Morse Code | ToolsRift',
    description: 'Free text encoding and decoding tools: ASCII converter, Unicode lookup, Morse code translator, binary to text, ROT13, Braille and more online.',
    keywords: 'ascii converter online, unicode lookup, morse code translator online, binary to text, rot13 encoder, braille translator, free encoding tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Text Encoding Tools — ToolsRift',
      url: `${BASE_URL}/encoding`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/generators': {
    title: 'Free Online Generators — Password, QR Code, UUID | ToolsRift',
    description: 'Free online generators: password generator, QR code generator, UUID generator, barcode generator, random number generator and more. No signup.',
    keywords: 'password generator online, qr code generator free, uuid generator online, barcode generator, random number generator, free generator tools',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Generator Tools — ToolsRift',
      url: `${BASE_URL}/generators`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/generators2': {
    title: 'Free Content Generator Tools Online | ToolsRift',
    description: 'Free content generators: hashtag generator, meta tag generator, lorem ipsum generator, dummy text generator, email template generator and more online.',
    keywords: 'hashtag generator online, meta tag generator, lorem ipsum generator, dummy text generator, email template generator, content generator online free',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Content Generators — ToolsRift',
      url: `${BASE_URL}/generators2`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/devgen': {
    title: 'Free Dev Config Generators — .gitignore, Dockerfile, README | ToolsRift',
    description: 'Free developer config generators: .gitignore generator, Dockerfile generator, README generator, package.json generator, nginx config and 25+ more dev tools.',
    keywords: 'gitignore generator online, dockerfile generator, readme generator, package json generator, nginx config generator, dev config tools online',
    ogImage: `${BASE_URL}/icon-dev-192.png`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Dev Config Generators — ToolsRift',
      url: `${BASE_URL}/devgen`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/js': {
    title: 'Free JavaScript Tools Online — Minifier, Formatter, Obfuscator | ToolsRift',
    description: 'Free JavaScript tools: JS minifier, JS beautifier, JS obfuscator, JavaScript validator, console simulator and more online developer tools. No signup.',
    keywords: 'javascript minifier online, js beautifier, javascript obfuscator online, js validator, free javascript tools online, js minify',
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'JavaScript Tools — ToolsRift',
      url: `${BASE_URL}/js`,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  },

  '/about': {
    title: 'About ToolsRift — Free Online Tools Platform | Our Mission',
    description: 'ToolsRift is a free online tools platform with 544+ tools for developers, students, and professionals. Learn about our mission, values, and what we are building.',
    keywords: 'about toolsrift, free online tools platform, toolsrift mission, online tools for developers, free tools website',
    ogImage: DEFAULT_OG_IMAGE,
  },

  '/privacy-policy': {
    title: 'Privacy Policy | ToolsRift — Free Online Tools',
    description: 'Read the ToolsRift privacy policy. Learn how we handle your data, what we collect, and how we protect your privacy. Your data stays in your browser.',
    keywords: 'toolsrift privacy policy, data privacy, online tools privacy',
    ogImage: DEFAULT_OG_IMAGE,
  },

  '/pricing': {
    title: 'Pricing — Free & Pro Plans Coming Soon | ToolsRift',
    description: 'All 544+ ToolsRift tools are completely free. Pro plans with advanced features coming soon. No signup required for free tools.',
    keywords: 'toolsrift pricing, free online tools no signup, toolsrift pro plan',
    ogImage: DEFAULT_OG_IMAGE,
  },

  '/roadmap': {
    title: 'Roadmap — ToolsRift Development Plans | 1600+ Tools Coming',
    description: 'ToolsRift development roadmap — 544+ free online tools already built, with 1600+ more coming soon across 34 categories. See what is next.',
    keywords: 'toolsrift roadmap, upcoming tools, toolsrift development, free tools roadmap',
    ogImage: DEFAULT_OG_IMAGE,
  },

}

// Helper function — used by SEOHead component
export function getPageSEO(path) {
  return SEO_CONFIG[path] || SEO_CONFIG.default
}
