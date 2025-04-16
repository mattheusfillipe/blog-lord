import { Banner } from './components/Banner'
import { Instagram } from './components/Instagram'
import { Lancamentos } from './components/Lancamentos'
import { Newsletter } from './components/Newsletter'

export default function Home() {
  return (
    <>
      <Banner />
      <Instagram />
      <Lancamentos />
      <Newsletter />
      {/* Outras seções */}
    </>
  )
}
