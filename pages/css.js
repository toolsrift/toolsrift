import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftCss = dynamic(() => import('../components/toolsrift-css'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/css" />
      <ToolsRiftCss />
    </>
  )
}
