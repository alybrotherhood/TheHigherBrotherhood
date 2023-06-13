import React, { useState, useEffect } from 'react';

import {
    Dialog,
    DialogBody,
    Card,
} from "@material-tailwind/react";

import ScrollAnimation from '../modules/ScrollAnimation';
import emphasizeWord from '../modules/emphasizeWord';

const Testimonials = ({ slice }) => {
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
                <h2 className='text-5xl font-bold leading-normal'>{emphasizeWord(slice.primary.header[0])}</h2>
                <h3 className='text-3xl font-bold'>{emphasizeWord(slice.primary.sub_header[0])}</h3>

                <p className='text-lg font-medium mt-10 mb-16'>{emphasizeWord(slice.primary.description[0])}</p>

                <a className='bg-secondaryColor px-6 py-4 rounded-full text-mainColor text-2xl font-bold uppercase' href={slice.primary.cta_link.url} target={slice.primary.cta_text[0].text}>{slice.primary.cta_text[0].text}</a>
            </div>
            <div className='w-[400px] lg:w-full columns-1 lg:columns-2 gap-5 space-y-5' style={{ maxWidth: "1200px" }}>
                {
                    slice.items.map(({ testimonial }, index) => (
                        <Card className="cursor-pointer overflow-hidden opacity-0 duration-500" data-class-in="opacity-100" onClick={() => handleOpen(testimonial.url)} key={`Testimonial-${index}`} >
                            <img
                                className="h-full w-full object-cover object-center"
                                src={testimonial.url}
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