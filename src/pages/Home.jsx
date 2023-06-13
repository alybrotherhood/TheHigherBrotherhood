import { Navbar, Hero, LimitedTime, About, Features, Testimonials, FAQ, Footer, Pricing } from '../components';

import { SliceZone, useSinglePrismicDocument } from '@prismicio/react';

const Home = () => {
  const [document, { state }] = useSinglePrismicDocument('main');

  console.log(document);

  return (
    <div>
      <Navbar />

      {
        state === 'loading' ? (
          <p className='text-center'>Loading...</p>
        ) :
        document && (
          <SliceZone
            slices={document.data.body}
            components={{
              hero_section: Hero,
              urgency_section: LimitedTime,
              about_section: About,
              features_section: Features,
              testimonials_section: Testimonials,
              pricing_section: Pricing,
              faq_section: FAQ,
              footer: Footer
            }}
          />
        )
      }
    </div>
  )
}

export default Home