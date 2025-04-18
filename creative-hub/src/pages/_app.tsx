import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Layout from '../components/layout/Layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../i18n'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Handle RTL for languages that need it
  useEffect(() => {
    document.documentElement.dir = router.locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = router.locale || 'en'
  }, [router.locale])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// Wrap the app with translation HOC
export default appWithTranslation(App)
