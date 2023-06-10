import React from 'react'
import { fascinations } from '../static'

const Pricing = () => {
    return (
        <div className='flex flex-col-reverse xl:flex-row gap-10 justify-center items-center px-10 sm:px-40 xl:px-64 py-20 mb-32'>
            <div className='flex-1 bg-mainColorLight shadow-lg bg- p-10 rounded-lg text-center' style={{ maxWidth: "500px" }}>
                <h3 className='text-4xl font-bold'>Get Full Access</h3>
                <p className='my-5 text-xl font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit corrupti odit molestiae sit, est perferendis.</p>
                <button className='bg-secondaryColor px-6 py-3 rounded-full text-mainColor text-2xl font-bold uppercase mt-3 mb-7'>$97 Entry Fee</button>
                <div className='flex flex-col gap-3 mt-5 font-medium'>
                    {
                        fascinations.map(fascination => (
                            <div className='flex gap-2 text-xl text-start' key={fascination.id}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondaryColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {fascination.title}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center w-screen'>
                <img src="/src/assets/Logo/logo.png" className='bg-mainColorLight shadow-lg w-full' style={{ maxWidth: "500px" }} />
                <div className='p-10 text-center xl:text-start'>
                    <p className='text-xl font-medium mt-5'>Join other <span className='text-secondaryColor'>successful</span> people, from entrepreneurs to <span className='text-secondaryColor'>14-15 year</span> olds, making <span className='text-secondaryColor'>$1000+</span></p>
                    <p className="text-xl font-medium mt-5">You will make all your money back, and even make <span className='text-secondaryColor'>huge amounts</span> of <span className='text-secondaryColor'>profit</span> in a short period of time.</p>
                </div>
            </div>
        </div>
    )
}

export default Pricing