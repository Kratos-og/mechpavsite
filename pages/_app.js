import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout component={Component.DisplayName}><Component {...pageProps} /></Layout>
}

export default MyApp
