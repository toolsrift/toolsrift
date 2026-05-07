import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftRoadmap = dynamic(() => import('../components/toolsrift-roadmap'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/roadmap" />
      <ToolsRiftRoadmap />
    </>
  )
}
