import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Offers from '../components/Offers'
import Tour from '../components/Tour'

export default function Home() {
  return (
    <Layout title="OTel" description="the best hotel in the world, Not">
      <Hero />
      <Offers />
      <Tour />
      <Gallery />
      <Contact />
    </Layout>
  )
}
