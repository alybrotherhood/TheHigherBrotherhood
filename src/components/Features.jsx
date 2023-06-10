import React from 'react'
import { features } from '../static'

const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center px-10 sm:px-40 xl:px-64 py-20 xl:py-10 mb-32' id='features'>
      <h2 className='text-5xl font-bold text-center mb-14'>Features You Will <span className="text-secondaryColor">Get Access</span> To</h2>
      <div className='flex flex-wrap justify-center items-center gap-3'>
        {
          features.map(feature => (
            <div className='flex justify-start items-center gap-5 bg-zinc-900 p-5 w-full' style={{ height: "125px" }} key={ feature.id }>
              <div className='text-5xl'>{ feature.icon }</div>
              <div>
                <h2 className='text-3xl font-medium'>{ feature.title }</h2>
                <p>{ feature.description }</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Features