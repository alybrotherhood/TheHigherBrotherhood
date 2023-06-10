import React from 'react'

import Timer from './Timer'

const LimitedTime = () => {
  return (
    <div className='flex flex-col justify-center items-center px-10 sm:px-40 xl:px-64 py-20 xl:py-10 mb-32'>
        <h2 className="text-5xl font-bold">Only A <span className='text-secondaryColor'>Few Spots</span> Remaining</h2>
        <Timer />
        <h3 className='text-4xl font-bold mb-20'>Join <span className='text-secondaryColor'>NOW</span> Before The Price Is Increased From $97 to $147!</h3>
        <button className='bg-secondaryColor px-6 py-3 rounded-full text-mainColor text-2xl font-bold uppercase'>Join Now</button>
    </div>
  )
}

export default LimitedTime