import emphasizeWord from "../modules/emphasizeWord"

const Footer = ({ slice }) => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-5 px-10 sm:px-40 xl:px-64 py-20 xl:py-10'>
            <p>{emphasizeWord(slice.primary.copyright_text[0])}</p>
            <div className='flex gap-3'>
                {
                    slice.items.map((socialMedia, index) => (
                        <a className='w-10' href={socialMedia.social_media_link.url} target={socialMedia.social_media_link.target} key={`Social-Media-${index}`}>
                            <img src={socialMedia.social_media_icon.url} />
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer
