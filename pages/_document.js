import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props) {
  const host = props.__NEXT_DATA__?.props?.pageProps?.__host || ''

  let manifest = '/manifest.json'
  if (host.startsWith('text.'))  manifest = '/manifest-text.json'
  if (host.startsWith('image.')) manifest = '/manifest-image.json'
  if (host.startsWith('pdf.'))   manifest = '/manifest-pdf.json'
  if (host.startsWith('dev.'))   manifest = '/manifest-dev.json'
  if (host.startsWith('calc.'))  manifest = '/manifest-calc.json'

  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href={manifest} />
        <meta name="theme-color" content="#38BDF8" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
