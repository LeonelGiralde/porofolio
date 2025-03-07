import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../img/logo.png'
import { Link } from 'react-scroll' 



const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    
  
  
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt="logo" style={{ width: '50px' }} />
            </div>
            {/* menu */}

            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} >
                        Sobre mi
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500} >
                        Porfolio
                    </Link>
                </li>
                <li><Link to="contact" smooth={true} duration={500} >
                    Contacto
                </Link>
                </li>
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!show ? <FaBars /> : <FaTimes />}

            </div>
            {/* Mobile Menu */}
            <ul className={!show ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        Sobre mi
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                        Porfolio
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Contacto
                    </Link>
                </li>
            </ul>
            {/* social icons */}
            <div className={!show ? 'hidden lg:flex fixed flex-col top-[35%] left-0' : 'flex fixed flex-col top-[35%] left-0'}>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/leonel-giralde/" target="_blank" rel="noreferrer" >
                            Linkedin<FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/LeonelGiralde" target="_blank" rel="noreferrer" >
                            Github<FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <Link to='email' smooth={true} duration={500} className='flex justify-between items-center w-full text-gray-300'  >
                            Email<HiOutlineMail size={30} />
                        </Link>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#655f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/146u0_S2kYlM9gCzcfU8suHSPkoi84xH2/view?usp=sharing' target="_blank" rel="noreferrer" >
                            Cv<BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar