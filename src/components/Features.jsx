import React, { useEffect } from 'react'
import { features } from '../static'

import ScrollAnimation from '../modules/ScrollAnimation';

const Features = () => {
  useEffect(() => {
    const scrollAnimation = new ScrollAnimation();

    scrollAnimation.observeAll();

    return () => {
      scrollAnimation.unobserveAll();
    }
  }, []);

  return (
    <div className='flex flex-col justify-center items-center px-10 sm:px-40 xl:px-64 py-20 mb-24' id='features'>
      <h2 className='text-5xl font-bold text-center mb-20'>Features You Will <span className="text-secondaryColor">Get Access</span> To</h2>
      <div className='flex flex-col justify-center items-center gap-3'>
        {
          features.map(feature => (
            <div className='flex flex-col sm:flex-row text-center sm:text-start items-center gap-5 p-5 w-full translate-x-[-50px] opacity-0 transition transform duration-500' data-class-in="opacity-100 translate-x-[0px]"  key={feature.id}>
              <div className='text-5xl'>{feature.icon}</div>
              <div>
                <h2 className='text-3xl font-medium'>{feature.title}</h2>
                <p className='font-medium'>{feature.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features