import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftUnits = dynamic(() => import('../components/toolsrift-units'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/units" />
      <ToolsRiftUnits />
    </>
  )
}
