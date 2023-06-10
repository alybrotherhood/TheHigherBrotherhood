import React from 'react'

const Testimonials = () => (
    <div className='flex flex-col justify-center items-center px-10 sm:px-40 xl:px-64 py-20 xl:py-10 mb-32' id='testimonials'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold leading-normal'>Don't Waste This <span className='text-secondaryColor'>Opportunity</span></h2>
            <h3 className='text-3xl font-bold'><span className='text-secondaryColor'>Join</span> Other People's Success Stories</h3>

            <p className='my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perferendis doloribus, magnam tempore labore similique distinctio magni repellendus accusamus dolore.</p>

            <button className='bg-secondaryColor px-6 py-3 rounded-full text-mainColor text-2xl font-bold uppercase mb-20'>Get Rich Now</button>
        </div>
        <div className='w-[400px] lg:w-full columns-1 lg:columns-2 gap-5 space-y-5' style={{ maxWidth: "1200px" }}>
            <img src="/src/assets/Testimonials/testimonial-1.png" />
            <img src="/src/assets/Testimonials/testimonial-2.png" />
            <img src="/src/assets/Testimonials/testimonial-3.png" />
            <img src="/src/assets/Testimonials/testimonial-4.png" />
            <img src="/src/assets/Testimonials/testimonial-5.png" />
            <img src="/src/assets/Testimonials/testimonial-6.png" />
            <img src="/src/assets/Testimonials/testimonial-7.png" />
            <img src="/src/assets/Testimonials/testimonial-8.png" />
        </div>
    </div>
);

export default Testimonials