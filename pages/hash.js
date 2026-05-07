import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftHash = dynamic(() => import('../components/toolsrift-hash'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/hash" />
      <ToolsRiftHash />
    </>
  )
}
