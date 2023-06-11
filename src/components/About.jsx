import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center px-10 sm:px-40 xl:px-64 py-20 mb-24' id='about'>
      <h2 className='text-5xl font-bold text-center'>About The <span className="text-secondaryColor">Higher Brotherhood</span></h2>
      <p className='my-10 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur necessitatibus eaque quas mollitia numquam sunt iure dignissimos, saepe at commodi quae quia neque porro explicabo nam sit beatae qui culpa!</p>
      <a className='bg-secondaryColor px-6 py-4 rounded-full text-mainColor text-2xl font-bold uppercase mb-14' href='https://whop.com/checkout/plan_6HODDDQEqJAAu' target="_blank">Join Now</a>
      <iframe className='w-full aspect-2 outline-none' src="https://www.youtube.com/embed/KYEXRNuKkT4" title="How I Made $1000 In One Night." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{ maxWidth: "850px" }}></iframe>
    </div>
  )
}

export default About