import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftGenContent = dynamic(() => import('../components/toolsrift-gen-content'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/generators2" />
      <ToolsRiftGenContent />
    </>
  )
}
