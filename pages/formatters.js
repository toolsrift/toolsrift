import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftFormatters = dynamic(() => import('../components/toolsrift-formatters'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/formatters" />
      <ToolsRiftFormatters />
    </>
  )
}
