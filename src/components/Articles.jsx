import React from 'react'
import Currency from '../assets/image-currency.jpg'
import Resturant from '../assets/image-restaurant.jpg'
import Plane from '../assets/image-plane.jpg'
import Confetti from '../assets/image-confetti.jpg'

const Articles = () => {
  return (
    <div className='p-4 xs:p-6 mt:[80px] bg-[#faf8f8]'>
      <h1 className='mt-8 text-4xl xs:text-5xl font-semibold text-center laptop:text-4xl laptop:text-left'>
       Latest Articles
      </h1>

      <div className='mt-10 p-1 xs:p-2 laptop:flex laptop:flex-row
      laptop:justify-between laptop:items-top'>
        <div className='text-center flex flex-col items-center mb-20
        laptop:block laptop:text-left laptop:mr-5 laptop:ml-5'>
          <img
            className='mb-3 laptop:h-[200px]' 
            src={Currency} 
            alt="" 
          />

          <p className='text-md opacity-60'>
            By Claire Robinson
          </p>

          <h1 className='text-2xl xs:text-3xl laptop:text-2xl mb-3 font-semibold'>
            Receive money in any currency with no fees
          </h1>

          <p className='text-lg xs:text-xl laptop:text-lg mb-2 opacity-50 font-semibold'>
            The world is getting smaller and we’re becoming more mobile. So why should you be 
            forced to only receive money in a single …
          </p>
        </div>
        
        <div className='text-center flex flex-col items-center mb-20
        laptop:block laptop:text-left laptop:mr-5 laptop:ml-5'>
          <img
            className='mb-3 laptop:h-[200px]' 
            src={Resturant} 
            alt="" 
          />

          <p className='text-md opacity-60'>
            By Wilson Hutton
          </p>

          <h1 className='text-2xl xs:text-3xl laptop:text-2xl mb-3 font-semibold'>
            Treat yourself without worrying about money
          </h1>

          <p className='text-lg xs:text-xl mb-2 laptop:text-lg opacity-50 font-semibold'>
            Our simple budgeting feature allows you to separate out your spending and set 
            realistic limits each month. That means you …
          </p>
        </div>
        
        <div className='text-center flex flex-col items-center mb-20
        laptop:block laptop:text-left laptop:mr-5 laptop:ml-5'>
          <img
            className='mb-3 laptop:h-[200px]' 
            src={Plane} 
            alt="" 
          />

          <p className='text-md opacity-60'>
            By Wilson Hutton
          </p>

          <h1 className='text-2xl xs:text-3xl laptop:text-2xl mb-3 font-semibold'>
            Take your Digitalbank card wherever you go
          </h1>

          <p className='text-lg xs:text-xl mb-2 laptop:text-lg opacity-50 font-semibold'>
            We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
            while you’re abroad. We’ll even show you …
          </p>
        </div>
        
        <div className='text-center flex flex-col items-center mb-20
        laptop:block laptop:text-left laptop:mr-5 laptop:ml-5'>
          <img
            className='mb-3 laptop:h-[200px]' 
            src={Confetti} 
            alt="" 
          />

          <p className='text-md opacity-60'>
            By Claire Robinson
          </p>

          <h1 className='text-2xl xs:text-3xl laptop:text-2xl mb-3 font-semibold'>
            Our invite-only Beta accounts are now live!
          </h1>

          <p className='text-lg xs:text-xl mb-2 laptop:text-lg opacity-50 font-semibold'>
            After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
            It’s easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Articles