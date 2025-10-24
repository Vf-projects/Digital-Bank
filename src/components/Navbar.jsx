import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo-dark.svg'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const MenuBar = () => {
    setIsOpen(prev => !prev);
  }
  return (
    <div>
      <section 
        className='pt-6 pl-3 pr-7 pb-6 flex flex-row w-full
        items-center relative justify-between bg-white z-50'
      >
        <img 
          className='tablet:w-[200px] h-[30px]'
          src={Logo} 
          alt="" 
        />

        <ul
          className={`absolute -top-[500px] z-50 left-0 bg-cyan-950 p-[20px] w-[100%] text-center rounded-lg
          transition-all ease-in-out duration-1500 ${isOpen ? 'top-[90px]' : '-top-[500px]'} 
          ${isOpen ? 'fixed' : ''}
          tablet:flex tablet:flex-row tablet:w-auto tablet:p-0 tablet:static tablet:-mt-2 tablet:bg-white
          tablet:rounded-none`}
        >
          <li
            className='text-2xl text-white font-bold mb-2 border-b-1 border-b-solid border-b-gray-200 p-1
            tablet:mb-0 tablet:p-0 tablet:border-none mr-6
            hover:shadow-xl active:opacity-80 tablet:text-cyan-950'
          >
            <a 
              href=""
            >
              Home
            </a>
          </li>
          
          <li
            className='text-2xl text-white font-bold mb-2 border-b-1 border-b-solid border-b-gray-200 p-1
            tablet:mb-0 tablet:p-0 tablet:border-none mr-6 
            hover:shadow-xl active:opacity-80 tablet:text-cyan-950'
          >
            <a 
              href=""
            >
              About
            </a>
          </li>
          
          <li
            className='text-2xl text-white font-bold mb-2 border-b-1 border-b-solid border-b-gray-200 p-1
            tablet:mb-0 tablet:p-0 tablet:border-none mr-6 
            hover:shadow-xl active:opacity-80 tablet:text-cyan-950'
          >
            <a 
              href=""
            >
              Contact
            </a>
          </li>
          
          <li
            className='text-2xl text-white font-bold mb-2 border-b-1 border-b-solid border-b-gray-200 p-1
            tablet:mb-0 tablet:p-0 tablet:border-none mr-6 
            hover:shadow-xl active:opacity-80 tablet:text-cyan-950'
          >
            <a 
              href=""
            >
              Blog
            </a>
          </li>
          
          <li
            className='text-2xl text-white font-bold mr-6
            hover:shadow-xl active:opacity-80 tablet:text-cyan-950'
          >
            <a 
              href=""
            >
              Careers
            </a>
          </li>
        </ul>

        <button 
          className={`text-3xl text-cyan-950 tablet:hidden ${isOpen ? 'fixed' : ''}
          ${isOpen ? 'right-6' : ''} `}
          onClick={MenuBar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </section>
    </div>
  )
}

export default Navbar