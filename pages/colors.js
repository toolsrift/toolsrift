import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftColors = dynamic(() => import('../components/toolsrift-colors'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/colors" />
      <ToolsRiftColors />
    </>
  )
}
