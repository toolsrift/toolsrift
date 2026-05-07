import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftCalcFinance = dynamic(() => import('../components/toolsrift-calc-finance'), { ssr: false })

export default function Page() {
  return (
    <>
      <SEOHead path="/financecalc" />
      <ToolsRiftCalcFinance />
    </>
  )
}
