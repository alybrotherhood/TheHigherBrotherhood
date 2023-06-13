import { Fragment, useState } from 'react';

import {
    Accordion,
    AccordionHeader,
    AccordionBody
} from '@material-tailwind/react'

import emphasizeWord from '../modules/emphasizeWord';

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

const FAQ = ({ slice }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className='flex flex-col justify-center items-center px-10 sm:px-40 xl:px-64 py-20 mb-24' id='faq'>
            <h2 className='text-5xl font-bold mb-16'>{emphasizeWord(slice.primary.header[0])}</h2>

            <Fragment>
                {
                    slice.items.map((FAQ, index) => (
                        <Accordion open={open === index + 1} icon={<Icon id={index + 1} open={open} />} key={`FAQ-${index + 1}`}>
                            <AccordionHeader className="text-white hover:text-white" onClick={() => handleOpen(index + 1)}>
                                {emphasizeWord(FAQ.question[0])}
                            </AccordionHeader>
                            <AccordionBody className="text-white text-base font-medium">
                                {emphasizeWord(FAQ.answer[0])}
                            </AccordionBody>
                        </Accordion>
                    ))
                }
            </Fragment>
        </div>
    )
}

export default FAQ