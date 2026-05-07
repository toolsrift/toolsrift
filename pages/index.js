import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftMain = dynamic(
  () => import('../components/toolsrift-main').catch(err => {
    console.error('Dynamic import failed:', err)
    return { default: () => <div style={{ color: 'red', padding: 40 }}>Error: {String(err)}</div> }
  }),
  {
    ssr: false,
    loading: () => <div style={{ background: '#06090F', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B' }}>Loading...</div>
  }
)

export default function Home() {
  return (
    <>
      <SEOHead path="/" />
      <ToolsRiftMain />
    </>
  )
}
