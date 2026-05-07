import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftJs = dynamic(() => import('../components/toolsrift-js'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/js" />
      <ToolsRiftJs />
    </>
  )
}
