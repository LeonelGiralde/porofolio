import React from 'react'
import { BsLinkedin, BsGithub, BsEnvelope, BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <div name='about' className='w-full bg-[#0a192f] text-gray-300 py-8'>
      <div className='flex flex-col justify-center items-center space-y-4'>
        <div className='flex space-x-4'>
          <a href="https://www.linkedin.com/in/leonel-giralde/" target="_blank" rel="noreferrer">
            <BsLinkedin size={30} />
          </a>
          <a href="https://github.com/LeonelGiralde" target="_blank" rel="noreferrer">
            <BsGithub size={30} />
          </a>
          <a href="leonelgiralde22@gmail.com">
            <BsEnvelope size={30} />
          </a>
          <a href="https://drive.google.com/file/d/1qGHFTR9B-UMUELrGWvjfyJVGlH2D9rlz/view?usp=sharing" target="_blank" rel="noreferrer">
            <BsFillPersonLinesFill size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer