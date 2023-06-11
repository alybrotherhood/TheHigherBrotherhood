import React from 'react'

import Timer from './Timer';

import iconRounded from '../assets/logo/icon-rounded.png';

const Hero = () => (
    <div className='flex flex-col lg:flex-row gap-10 justify-center items-center px-10 sm:px-40 xl:px-64 py-20 mb-32'>
        <div className='flex-1 text-center lg:text-start' style={{ maxWidth: "650px" }}>
            <div>
                <h2 className='text-6xl font-bold'><span className="text-secondaryColor">Unlock</span> Your Path To</h2>
                <h2 className='text-6xl font-bold'>Unlimited <span className='text-secondaryColor'>Wealth</span></h2>
            </div>
            <div className='my-6 mb-10'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolore. Enim, sit aliquam? At ullam aliquid maiores veritatis debitis soluta!</p>
            </div>
            <div className='mt-14'>
            <a className='bg-secondaryColor px-6 py-4 rounded-full text-mainColor text-2xl font-bold uppercase mb-14' href='https://whop.com/checkout/plan_6HODDDQEqJAAu' target="_blank">Join Now</a>
            </div>
        </div>
        <div className='flex-1 flex justify-center items-center w-screen' style={{ maxWidth: "400px" }}>
            <img src={ iconRounded } />
        </div>
    </div>
);

export default Hero