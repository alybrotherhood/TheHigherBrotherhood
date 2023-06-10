import React from 'react'

const Hero = () => (
    <div className='flex gap-10 justify-center items-center px-52 py-14'>
        <div style={{ maxWidth: "650px" }}>
            <div>
                <h2 className='text-6xl font-bold'><span className="text-secondaryColor">Unlock</span> Your Path To</h2>
                <h3 className='text-6xl font-bold'>Unlimited <span className='text-secondaryColor'>Wealth</span></h3>
            </div>
            <div className='my-6'>
                <p className='break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolore. Enim, sit aliquam? At ullam aliquid maiores veritatis debitis soluta!</p>
            </div>
            <div className='mt-20'>
                <button className='bg-secondaryColor px-6 py-3 rounded-full text-mainColor text-2xl font-bold uppercase'>Join Now</button>
            </div>
        </div>
        <div style={{ maxWidth: "600px" }}>
            <img src="/src/assets/Logo/icon-rounded.png" />
        </div>
    </div>
);

export default Hero