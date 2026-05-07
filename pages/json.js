import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftJson = dynamic(() => import('../components/toolsrift-json'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/json" />
      <ToolsRiftJson />
    </>
  )
}
