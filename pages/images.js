import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftImages = dynamic(() => import('../components/toolsrift-images'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/images" />
      <ToolsRiftImages />
    </>
  )
}
