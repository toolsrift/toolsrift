const SITE_URL = 'https://toolsrift.com';

const PAGES = [
  { url: '/',             priority: '1.0', changefreq: 'daily'   },
  { url: '/about',        priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
  { url: '/pricing',      priority: '0.6', changefreq: 'monthly' },
  { url: '/text',         priority: '0.9', changefreq: 'weekly'  },
  { url: '/images',       priority: '0.9', changefreq: 'weekly'  },
  { url: '/pdf',          priority: '0.9', changefreq: 'weekly'  },
  { url: '/json',         priority: '0.9', changefreq: 'weekly'  },
  { url: '/css',          priority: '0.9', changefreq: 'weekly'  },
  { url: '/colors',       priority: '0.9', changefreq: 'weekly'  },
  { url: '/units',        priority: '0.9', changefreq: 'weekly'  },
  { url: '/encoders',     priority: '0.9', changefreq: 'weekly'  },
  { url: '/hash',         priority: '0.9', changefreq: 'weekly'  },
  { url: '/html',         priority: '0.9', changefreq: 'weekly'  },
  { url: '/js',           priority: '0.9', changefreq: 'weekly'  },
  { url: '/formatters',   priority: '0.9', changefreq: 'weekly'  },
  { url: '/fancy',        priority: '0.9', changefreq: 'weekly'  },
  { url: '/encoding',     priority: '0.9', changefreq: 'weekly'  },
  { url: '/generators',   priority: '0.9', changefreq: 'weekly'  },
  { url: '/generators2',  priority: '0.9', changefreq: 'weekly'  },
  { url: '/devgen',       priority: '0.9', changefreq: 'weekly'  },
  { url: '/mathcalc',     priority: '0.9', changefreq: 'weekly'  },
  { url: '/financecalc',  priority: '0.9', changefreq: 'weekly'  },
  { url: '/converters2',  priority: '0.9', changefreq: 'weekly'  },
  { url: '/devtools',     priority: '0.9', changefreq: 'weekly'  },
  { url: '/business',     priority: '0.9', changefreq: 'weekly'  },
];

function generateSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
