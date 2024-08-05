import React from 'react'
import { BsLinkedin, BsGithub, BsEnvelope, BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div name='about' className='w-full bg-[#0a192f] text-gray-300 py-8'>
      <div className='flex flex-col justify-center items-center space-y-4'>
        <div className='flex space-x-4'>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <BsLinkedin size={30} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            <BsGithub size={30} />
          </a>
          <Link to="email" smooth={true} duration={500}>
            <BsEnvelope size={30} />
          </Link>
          <a href="/path-to-cv" target="_blank" rel="noreferrer">
            <BsFillPersonLinesFill size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer