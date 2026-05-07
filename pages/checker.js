import Head from 'next/head'
import dynamic from 'next/dynamic'

const ToolChecker = dynamic(() => import('../components/tool-checker'), { ssr: false })

export default function Checker() {
  return (
    <>
      <Head>
        <title>Tool Checker — ToolsRift</title>
        <meta name="description" content="Internal tool checker for ToolsRift." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <ToolChecker />
    </>
  )
}
