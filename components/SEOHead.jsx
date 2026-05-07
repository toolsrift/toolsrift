// components/SEOHead.jsx
// Reusable SEO head component — reads from lib/seo-config.js
// Usage: <SEOHead path="/text" />

import Head from 'next/head'
import { getPageSEO } from '../lib/seo-config'

export default function SEOHead({ path }) {
  const seo = getPageSEO(path)
  const canonicalPath = path === '/' ? '' : path
  const url = `https://toolsrift.com${canonicalPath}`

  return (
    <Head>
      {/* Primary SEO */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={url} />

      {/* OpenGraph — Facebook, WhatsApp, LinkedIn */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ToolsRift" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />
      <meta name="twitter:site" content="@toolsrift" />

      {/* Schema Markup — only on pages that have it defined */}
      {seo.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }}
        />
      )}
    </Head>
  )
}
