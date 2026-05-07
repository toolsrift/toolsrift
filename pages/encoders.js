import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftEncoders = dynamic(() => import('../components/toolsrift-encoders'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/encoders" />
      <ToolsRiftEncoders />
    </>
  )
}
