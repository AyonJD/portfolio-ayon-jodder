import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#022C43] text-gray-300 z-50'>
      <div>
        <h1  className='logo text-4xl cursor-pointer my-name bg-white'>Ayon Jodder</h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='menu-item'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#022C43] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl menu-item'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl menu-item'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl menu-item'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl menu-item'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl menu-item'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  linkedin-style'>
            <a
              target="_blank" rel="noopener noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/ayon-jodder/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 github-style'>
            <a
              target="_blank" rel="noopener noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/AyonJD'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 email-style'>
            <a
              target="_blank" rel="noopener noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:ayonjodder177@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 resume-style'>
            <a
              target="_blank" rel="noopener noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/17r1Ob0f4iwcZEaPHji2F7gQ9PmHcHvxN/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
