import React from 'react'
import HeroMobile from '../assets/bg-intro-mobile.svg'
import HeroDesktop from '../assets/bg-intro-desktop.svg'
import Phones from '../assets/image-mockups.png'

const Hero = () => {
  return (
    <div>
      <section
        id='home'
        className='pl-7 pb-6 mb-8 min-h-[110vh] xs:min-h-[100vh] flex flex-col-reverse bg-[#faf8f8]
        laptop:flex-row tablet:content-center'
      >
        <div className='text-center absolute top-[380px] xs:top-[480px] z-50 
        laptop:w-[50%] laptop:static laptop:top-0 laptop:mt-50 tablet:top-[780px]'>
          <h1 className='text-3xl xs:text-4xl -ml-7'>
            Next Generation Digital Banking
          </h1>
          <p className='-ml-7 mt-2 xs:mt-6 mb-6 laptop:ml-5 laptop:mr-7'>
            Take your financial life online. Your Digitalbank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.
          </p>

          <a 
            className=''
            href=""
          >
            <button className='transition-all ease-in-out duration-500 hover:-translate-y-1.5
            bg-green-500 text-white p-2 rounded-[30px] text-2xl cursor-pointer
            -ml-7 mb-7 xs:mb-0 tablet:mb-0'>
              Request Invite
            </button>
          </a>
        </div>

        <div className='hidden laptop:block laptop:w-[50%] laptop:mr-4 laptop:ml-7'>
          <img
            className='relative w-full -top-25'
            src={HeroDesktop} 
            alt="" 
          />

          <img 
            className='absolute -top-20 right-0 w-[580px] h-[730px]'
            src={Phones}
            alt="" 
          />
        </div>

        <div className='w-full laptop:hidden'>
          <img
            className='absolute top-19 -ml-7 w-full tablet:-top-20'
            src={HeroMobile} 
            alt="" 
          />

          <img 
            className='absolute -top-10 left-0 tablet:-top-40 beforeTablet:left-15'
            src={Phones}
            alt="" 
          />
        </div>
      </section>
    </div>
  )
}

export default Hero