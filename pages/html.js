import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftHtml = dynamic(() => import('../components/toolsrift-html'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/html" />
      <ToolsRiftHtml />
    </>
  )
}
