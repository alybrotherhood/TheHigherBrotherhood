import React from 'react'

import { Hero, Navbar, About, Testimonials } from '../components'

const Home = () => {
  return (
    <div className='font-montserrat bg-mainColor text-white'>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Testimonials />
    </div>
  )
}

export default Home