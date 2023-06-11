import React, { useState, useRef } from 'react'

const NavLinks = () => (
  <ul className='absolute left-0 top-full w-full lg:static flex flex-col lg:flex-row gap-12 bg-mainColor text-2xl text-white text-center uppercase font-medium py-10 lg-py-0'>
    <li><a className='bg-secondaryColor px-6 py-4 rounded-full text-mainColor text-2xl font-bold uppercase mb-14' href='https://whop.com/checkout/plan_6HODDDQEqJAAu' target="_blank">Join Now</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#faq">FAQ</a></li>
    {/* <li><a href="/login" className='lg:bg-secondaryColor px-6 py-3 rounded-full text-secondaryColor lg:text-mainColor font-bold'>Login</a></li> */}
  </ul>
);

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onMenuIconClicked = () => {
    setIsNavOpen(true);
  }

  const onCloseMenuIconClicked = () => {
    setIsNavOpen(false);
  }

  return (
    <nav className='relative flex justify-center items-center bg-mainColor py-5'>
      {
        <div className="hidden lg:block">
          <NavLinks />
        </div>
      }

      <button className={isNavOpen ? 'hidden' : 'block lg:hidden'} onClick={onMenuIconClicked}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <button className={isNavOpen ? 'block lg:hidden': 'hidden'} onClick={onCloseMenuIconClicked}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {
        isNavOpen && (
          <div className='lg:hidden'>
            <NavLinks />
          </div>
        )
      }
    </nav>
  );
};

export default Navbar