import React, { useState, useEffect } from 'react';

import {
    Dialog,
    DialogBody,
    Card,
} from "@material-tailwind/react";

import { testimonials } from '../static';
import ScrollAnimation from '../modules/ScrollAnimation';

const Testimonials = () => {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleOpen = (image) => {
        setCurrentImage(image);

        setOpen((cur) => !cur);
    };

    useEffect(() => {
        const scrollAnimation = new ScrollAnimation();

        scrollAnimation.observeAll();

        return () => {
            scrollAnimation.unobserveAll();
        }
    }, []);

    return (
        <div className='flex flex-col justify-center items-center px-10 sm:px-40 xl:px-64 py-20 mb-24' id='testimonials'>
            <div className='text-center mb-20'>
                <h2 className='text-5xl font-bold leading-normal'>Don't Waste This <span className='text-secondaryColor'>Opportunity</span></h2>
                <h3 className='text-3xl font-bold'><span className='text-secondaryColor'>Join</span> Other People's Success Stories</h3>

                <p className='my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perferendis doloribus, magnam tempore labore similique distinctio magni repellendus accusamus dolore.</p>

                <a className='bg-secondaryColor px-6 py-4 rounded-full text-mainColor text-2xl font-bold uppercase' href='https://whop.com/checkout/plan_6HODDDQEqJAAu' target="_blank">Get Rich Now</a>
            </div>
            <div className='w-[400px] lg:w-full columns-1 lg:columns-2 gap-5 space-y-5' style={{ maxWidth: "1200px" }}>
                {
                    testimonials.map(testimonial => (
                        <Card className="cursor-pointer overflow-hidden opacity-0 duration-500" data-class-in="opacity-100" onClick={() => handleOpen(testimonial.image)} key={testimonial.id} >
                            <img
                                className="h-full w-full object-cover object-center"
                                src={testimonial.image}
                            />
                        </Card>
                    ))
                }
            </div>

            <Dialog size="lg" open={open} handler={handleOpen}>
                <DialogBody className="p-0">
                    <img
                        className="w-full object-cover object-center"
                        src={currentImage}
                    />
                </DialogBody>
            </Dialog>

        </div>
    )
}

export default Testimonials