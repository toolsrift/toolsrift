import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftGenDevconfig = dynamic(() => import('../components/toolsrift-gen-devconfig'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/devgen" />
      <ToolsRiftGenDevconfig />
    </>
  )
}
