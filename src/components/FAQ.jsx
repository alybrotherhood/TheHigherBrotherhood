import React, { Fragment, useState } from 'react'
import { FAQs } from '../static';

import {
    Accordion,
    AccordionHeader,
    AccordionBody
} from '@material-tailwind/react'

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

const FAQ = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className='flex flex-col justify-center items-center px-10 sm:px-40 xl:px-64 py-20 mb-24' id='faq'>
            <h2 className='text-5xl font-bold mb-16'>Frequently Asked Questions</h2>

            <Fragment>
                {
                    FAQs.map(FAQ => (
                        <Accordion open={open === FAQ.id} icon={<Icon id={FAQ.id} open={open} />} key={ FAQ.id }>
                            <AccordionHeader className="text-white $ hover:text-white" onClick={() => handleOpen(FAQ.id)}>
                                { FAQ.question }
                            </AccordionHeader>
                            <AccordionBody className="text-white text-lg font-medium">
                                { FAQ.answer }
                            </AccordionBody>
                        </Accordion>
                    ))
                }
            </Fragment>
        </div>
    )
}

export default FAQ