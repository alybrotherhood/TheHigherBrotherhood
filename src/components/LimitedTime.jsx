import Timer from './Timer';

import emphasizeWord from '../modules/emphasizeWord';

const LimitedTime = ({ slice }) => (
  <div className='flex flex-col justify-center items-center text-center px-10 sm:px-40 xl:px-64 py-20 xl:py-10 mb-32'>
    <h2 className="text-5xl font-bold">{ emphasizeWord(slice.primary.header[0]) }</h2>
    <h2 className='text-6xl font-bold my-16 border-b-4'>{ emphasizeWord(slice.primary.members[0]) }</h2>
    <Timer />
    <h3 className='text-4xl font-bold mt-12 mb-20'>{ emphasizeWord(slice.primary.sub_header[0]) }</h3>
    <div>
      <a className='bg-secondaryColor px-6 py-4 rounded-full text-mainColor text-2xl font-bold uppercase mb-14' href={slice.primary.cta_link.url} target={slice.primary.cta_link.target}>{slice.primary.cta_text[0].text}</a>
    </div>
  </div>
);

export default LimitedTime