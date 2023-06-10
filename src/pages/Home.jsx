import React from 'react'

import { Navbar, Hero, LimitedTime, About, Features, Testimonials, FAQ, Footer, Pricing } from '../components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <LimitedTime /> */}
      <About />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home