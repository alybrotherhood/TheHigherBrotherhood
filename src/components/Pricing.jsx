import emphasizeWord from "../modules/emphasizeWord";

const Pricing = ({ slice }) => (
    <div className='flex flex-col-reverse xl:flex-row gap-10 justify-center items-center px-10 sm:px-40 xl:px-64 py-20 mb-32' id="pricing">
        <div className='p-10 rounded-lg text-center' style={{ maxWidth: "500px" }}>
            <h3 className='text-4xl font-bold'>{emphasizeWord(slice.primary.header[0])}</h3>
            <p className='my-5 text-lg font-medium'>{emphasizeWord(slice.primary.description_1[0])}</p>
            <div className='mt-12 mb-16'>
                <a className='bg-secondaryColor px-6 py-4 rounded-full text-mainColor text-2xl font-bold uppercase' href={slice.primary.cta_link.url} target={slice.primary.cta_link.target}>{slice.primary.cta_text[0].text}</a>
            </div>
            <div className='flex flex-col gap-3 mt-5 font-medium'>
                {
                    slice.items.map(({ fascination }, index) => (
                        <div className='flex gap-2 text-xl text-start' key={`Fascination-${index}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondaryColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {emphasizeWord(fascination[0])}
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-col justify-center items-center' style={{ maxWidth: "500px" }}>
            <img src={slice.primary.image.url} className='bg-mainColorLight w-full' />
            <div className='p-0 xl:p-10 text-center xl:text-start'>
                <p className='text-xl font-medium mt-5'>{emphasizeWord(slice.primary.description_2[0])}</p>
                <p className="text-xl font-medium mt-5">{emphasizeWord(slice.primary.description_3[0])}</p>
            </div>
        </div>
    </div>
);

export default Pricing