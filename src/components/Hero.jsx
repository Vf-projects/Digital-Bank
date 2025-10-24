import React from 'react'
import HeroMobile from '../assets/bg-intro-mobile.svg'
import HeroDesktop from '../assets/bg-intro-desktop.svg'
import Phones from '../assets/image-mockups.png'

const Hero = () => {
  return (
    <div>
      <section
        id='home'
        className='pl-7 pb-6 mb-8 min-h-[100vh] flex flex-col-reverse tablet:flex-row bg-[#faf8f8]'
      >
        <div className='text-center absolute top-[480px] z-50'>
          <h1 className='text-3xl xs:text-4xl -ml-7'>
            Next Generation Digital Banking
          </h1>
          <p className='-ml-7 mt-2 xs:mt-6 mb-6'>
            Take your financial life online. Your Digitalbank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.
          </p>

          <a 
            className='bg-green-500 text-white p-2 rounded-xl text-2xl -ml-7 mb-7 xs:mb-0'
            href=""
          >
            Request Invite
          </a>
        </div>

        <div className='w-full tablet:hidden'>
          <img
            className='absolute top-19 -ml-7 w-full'
            src={HeroMobile} 
            alt="" 
          />

          <img 
            className='absolute -top-10 left-0'
            src={Phones}
            alt="" 
          />
        </div>
      </section>
    </div>
  )
}

export default Hero