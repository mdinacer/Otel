import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://mdi-nacer.netlify.app${router.route}`
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>
      <DefaultSeo
        additionalLinkTags={[
          {
            rel: 'icon',
            href: './favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: 'https://www.test.ie/apple-touch-icon.png',
            sizes: '76x76',
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        ]}
        titleTemplate="%s - Portfolio"
        openGraph={{
          type: 'website',
          locale: 'en_Us',
          url,
          description: 'Web developer portfolio',
          site_name: 'Mohammed Abdenasser | mdi-nacer.netlify.app',
          images: [
            {
              url: './preview.jpg',
              width: 1536,
              height: 960,
              alt: 'Og Image Alt',
            },
          ],
        }}
        canonical={url}
      />

      <Component {...pageProps} canonical={url} key={url} />
    </>
  )
}

export default MyApp
