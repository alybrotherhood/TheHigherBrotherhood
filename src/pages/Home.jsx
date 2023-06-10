import React from 'react'

import { Hero, Navbar, About, Features, Testimonials, FAQ, Footer } from '../components'

const Home = () => {
  return (
    <div className='font-montserrat bg-mainColor text-white'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home