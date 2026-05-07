import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftEncoding = dynamic(() => import('../components/toolsrift-encoding'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/encoding" />
      <ToolsRiftEncoding />
    </>
  )
}
