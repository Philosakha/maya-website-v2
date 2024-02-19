import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/footer'

export default function Home() {
  return (
  <>
    <div>
    <Navbar />
    </div>
    <div>
    <Hero />
    </div>
    <div>
      <Footer/>
    </div>
    
    
  </>

  )
}
