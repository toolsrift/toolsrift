import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftDevtools = dynamic(() => import('../components/toolsrift-devtools'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/devtools" />
      <ToolsRiftDevtools />
    </>
  )
}
