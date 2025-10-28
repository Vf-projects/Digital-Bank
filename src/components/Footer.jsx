import React from 'react'
import Logo from '../assets/logo-light.svg'
import { FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-cyan-950 w-full p-4 flex flex-col justify-between items-center
    beforeTablet:flex-row 
    '>
      <div className='text-center'>
        <img 
          className='w-[200px]'
          src={Logo} 
          alt="" 
        />

        <ul className='flex flex-row mt-4'>
          <li className='text-white text-2xl mr-4'>
            <a 
              href=""
            >
              <FaFacebook />
            </a>
          </li>
          <li className='text-white text-2xl mr-4'>
            <a 
              href=""
            >
              <FaYoutube />
            </a>
          </li>
          <li className='text-white text-2xl mr-4'>
            <a 
              href=""
            >
              <FaTwitter />
            </a>
          </li>
          <li className='text-white text-2xl mr-4'>
            <a 
              href=""
            >
              <FaPinterest />
            </a>
          </li>
          <li className='text-white text-2xl mr-4'>
            <a 
              href=""
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      <div className='flex flex-col text-center beforeTablet:flex-row'>
        <ul className='flex flex-col text-center beforeTablet:text-left mt-4 beforeTablet:mt-0'>
          <li className='text-xl text-white opacity-80 font-semibold'>
            <a 
              href=""
            >
              About Us 
            </a>
          </li>
          <li className='text-xl text-white opacity-80 font-semibold'>
            <a 
              href=""
            >
              Contact 
            </a>
          </li>
          <li className='text-xl text-white opacity-80 font-semibold'>
            <a 
              href=""
            >
              Blog
            </a>
          </li>
        </ul>

        <ul className='flex flex-col text-center beforeTablet:text-left beforeTablet:ml-5'>
          <li className='text-xl text-white opacity-80 font-semibold'>
            <a 
              href=""
            >
              Careers
            </a>
          </li>
          <li className='text-xl text-white opacity-80 font-semibold'>
            <a 
              href=""
            >
              Support
            </a>
          </li>
          <li className='text-xl text-white opacity-80 font-semibold'>
            <a 
              href=""
            >
              Privacy Policy 
            </a>
          </li>
        </ul>
      </div>


      <div className='mt-4 text-center'>
        <a 
          className=''
          href=""
        >
          <button className='transition-all ease-in-out duration-500 hover:-translate-y-1.5
          bg-green-500 text-white p-2 rounded-[30px] text-2xl cursor-pointer
          mb-7 xs:mb-0 tablet:mb-0'>
            Request Invite
          </button>
        </a>

        <p className='mb-4 mt-4 opacity-60 text-white text-xl'>
          © Digitalbank. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer