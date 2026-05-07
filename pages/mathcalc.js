import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftCalcMath = dynamic(() => import('../components/toolsrift-calc-math'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/mathcalc" />
      <ToolsRiftCalcMath />
    </>
  )
}
