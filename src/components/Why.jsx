import React from 'react'
import Online from '../assets/icon-online.svg'
import Budgeting from '../assets/icon-budgeting.svg'
import Onboarding from '../assets/icon-onboarding.svg'
import OpenApi from '../assets/icon-api.svg'

const Why = () => {
  return (
    <div className='p-4 xs:p-6 mt:[80px]'>
      <h1 className='text-2xl xs:text-3xl font-semibold text-center laptop:text-4xl laptop:text-left'>
        Why choose Digitalbank?
      </h1>

      <p className='mt-3 xs:mt-3 opacity-50 text-md xs:text-lg text-center justify
      laptop:text-xl laptop:text-left laptop:w-[700px]'>
        We leverage Open Banking to turn your bank account into your financial hub. Control 
        your finances like never before.
      </p>

      <div className='mt-15 p-1 xs:mt-20 xs:p-2 laptop:flex laptop:flex-row
      laptop:justify-between laptop:items-top'>
        <div className='text-center flex flex-col items-center mb-20
        laptop:block laptop:text-left laptop:mr-3 laptop:ml-3'>
          <img
            className='w-30 h-30 xs:w-40 xs:h-40 mb-3' 
            src={Online} 
            alt="" 
          />

          <h1 className='text-2xl xs:text-3xl laptop:text-2xl mb-3 font-semibold'>
            Online Banking
          </h1>

          <p className='text-lg xs:text-xl laptop:text-lg mb-2 opacity-50 font-semibold'>
            Our modern web and mobile applications allow you to keep track of your finances 
            wherever you are in the world.
          </p>
        </div>
        
        <div className='text-center flex flex-col items-center mb-20
        laptop:block laptop:text-left laptop:mr-3 laptop:ml-3'>
          <img
            className='w-30 h-30 xs:w-40 xs:h-40 mb-3' 
            src={Budgeting} 
            alt="" 
          />

          <h1 className='text-2xl xs:text-3xl laptop:text-2xl mb-3 font-semibold'>
            Simple Budgeting
          </h1>

          <p className='text-lg xs:text-xl mb-2 laptop:text-lg opacity-50 font-semibold'>
            See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits.
          </p>
        </div>
        
        <div className='text-center flex flex-col items-center mb-20
        laptop:block laptop:text-left laptop:mr-3 laptop:ml-3'>
          <img
            className='w-30 h-30 xs:w-40 xs:h-40 mb-3' 
            src={Onboarding} 
            alt="" 
          />

          <h1 className='text-2xl xs:text-3xl laptop:text-2xl mb-3 font-semibold'>
            Fast Onboarding
          </h1>

          <p className='text-lg xs:text-xl mb-2 laptop:text-lg opacity-50 font-semibold'>
            We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.
          </p>
        </div>
        
        <div className='text-center flex flex-col items-center mb-20
        laptop:block laptop:text-left laptop:mr-3 laptop:ml-3'>
          <img
            className='w-30 h-30 xs:w-40 xs:h-40 mb-3' 
            src={OpenApi} 
            alt="" 
          />

          <h1 className='text-2xl xs:text-3xl laptop:text-2xl mb-3 font-semibold'>
            Open API
          </h1>

          <p className='text-lg xs:text-xl mb-2 laptop:text-lg opacity-50 font-semibold'>
            Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Why