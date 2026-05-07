// components/SEOHead.jsx
import Head from 'next/head'

export default function SEOHead({ path }) {
  // Dynamic import to avoid circular deps
  const { getPageSEO } = require('../lib/seo-config')
  const seo = getPageSEO(path)
  const url = `https://toolsrift.com${path === '/' ? '' : path}`

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={url} />

      {/* OpenGraph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ToolsRift" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />

      {/* Schema */}
      {seo.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }}
        />
      )}
    </Head>
  )
}
