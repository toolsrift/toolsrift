import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftConverters2 = dynamic(() => import('../components/toolsrift-converters2'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/converters2" />
      <ToolsRiftConverters2 />
    </>
  )
}
