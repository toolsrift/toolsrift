import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftPdf = dynamic(() => import('../components/toolsrift-pdf'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/pdf" />
      <ToolsRiftPdf />
    </>
  )
}
