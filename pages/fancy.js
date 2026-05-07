import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftFancy = dynamic(() => import('../components/toolsrift-fancy'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/fancy" />
      <ToolsRiftFancy />
    </>
  )
}
