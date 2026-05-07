import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftBusiness = dynamic(() => import('../components/toolsrift-business'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/business" />
      <ToolsRiftBusiness />
    </>
  )
}
