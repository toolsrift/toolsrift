import SEOHead from '../components/SEOHead'
import dynamic from 'next/dynamic'

const ToolsRiftText = dynamic(() => import('../components/toolsrift-text'), { ssr: false })

export async function getServerSideProps(context) {
  const host = context.req.headers.host || ''
  const isApp = host.startsWith('text.')
  return { props: { isApp } }
}

export default function Text({ isApp }) {
  return (
    <>
      <SEOHead path="/text" />
      <ToolsRiftText isApp={isApp} />
    </>
  )
}
