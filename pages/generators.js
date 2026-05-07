import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftGenSecurity = dynamic(() => import('../components/toolsrift-gen-security'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/generators" />
      <ToolsRiftGenSecurity />
    </>
  )
}
