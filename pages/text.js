import Head from 'next/head'
import dynamic from 'next/dynamic'
const ToolsRiftText = dynamic(() => import('../components/toolsrift-text'), { ssr: false })
export default function Text() {
  return (<><Head>
        <title>Free Text Tools — Word Counter, Case Converter, Lorem Ipsum &amp; 40+ More | ToolsRift</title>
        <meta name="description" content="45+ free online text tools. Word counter, character counter, case converter, lorem ipsum generator, readability checker, and more. Instant results, no signup." />
        <meta property="og:title" content="Free Text Tools — Word Counter, Case Converter, Lorem Ipsum &amp; 40+ More | ToolsRift" />
        <meta property="og:description" content="45+ free online text tools. Word counter, character counter, case converter, lorem ipsum generator, readability checker, and more. Instant results, no signup." />
        <meta property="og:url" content="https://toolsrift.com/text" />
        <meta property="og:site_name" content="ToolsRift" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://toolsrift.com/text" />
      </Head><ToolsRiftText /></>)
}
