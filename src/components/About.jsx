import emphasizeWord from "../modules/emphasizeWord"

const About = ({ slice }) => (
  <div className='flex flex-col justify-center items-center px-10 sm:px-40 xl:px-64 py-20 mb-24' id='about'>
    <h2 className='text-5xl font-bold text-center'>{emphasizeWord(slice.primary.header[0])}</h2>
    <p className='text-lg font-medium my-10 text-center'>{emphasizeWord(slice.primary.description[0])}</p>
    <a className='bg-secondaryColor px-6 py-4 rounded-full text-mainColor text-2xl font-bold uppercase mb-14' href={slice.primary.cta_link.url} target={slice.primary.cta_link.target}>{slice.primary.cta_text[0].text}</a>
    <iframe className='w-full aspect-2 outline-none' src={slice.primary.video.html.match(/src="(.*?)"/)[1]} title={slice.primary.video.html.match(/title="(.*?)"/)[1]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{ maxWidth: "850px" }}></iframe>
  </div>
)

export default About