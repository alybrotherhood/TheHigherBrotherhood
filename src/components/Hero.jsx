import emphasizeWord from "../modules/emphasizeWord";

const Hero = ({ slice }) => (
    <div className='flex flex-col lg:flex-row gap-10 justify-center items-center px-10 sm:px-40 xl:px-64 py-20 mb-24'>
        <div className="flex-1 text-center lg:text-start" style={{ maxWidth: "650px" }}>
            <h2 className='text-6xl font-bold'>{ emphasizeWord(slice.primary.header_1[0]) }</h2>
            <h2 className='text-6xl font-bold'>{ emphasizeWord(slice.primary.header_2[0]) }</h2>
            <p className='text-lg font-medium mt-6 mb-10'>{ emphasizeWord(slice.primary.description[0]) }</p>
            <div className='my-14'>
                <a className='bg-secondaryColor px-6 py-4 rounded-full text-mainColor text-2xl font-bold uppercase' href={slice.primary.cta_link.url} target={slice.primary.cta_link.target}>{slice.primary.cta_text[0].text}</a>
            </div>
        </div>
        <div className="flex-1 flex justify-center items-center w-screen" style={{ maxWidth: '400px' }}>
            <img src={slice.primary.image.url} />
        </div>
    </div>
);

export default Hero