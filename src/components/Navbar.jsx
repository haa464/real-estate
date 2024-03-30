import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaAlignRight } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {

    const [toggle, showMenu] = useState(false);
    const handleclick = () => showMenu(!toggle)

  return (
    <>
    <div className="absolute z-[999] w-full h-[80px] bg-transparent items-center border-b border-solid border-green-800">
        <div className="md:max-w-[700px] max-w-[330px] m-auto w-full h-full flex justify-between items-center py-[20px]">
            {/* left side menu */}

            <ul className="hidden md:flex md:gap-4">
                <li><a className='nav-link text-lg font-semibold rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white' href='#'>About Us</a></li>
                <li><a className='nav-link text-lg font-semibold rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white' href='#'>Sectors</a></li>
            </ul>

            <img className='' width={180} src={Logo} alt="logo" />

            <ul className="hidden md:flex gap-4">
                <li><a className='nav-link text-lg font-semibold rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white' href='#'>Gallery</a></li>
                <li><a className='nav-link text-lg font-semibold rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white' href='#'>Contact Us</a></li>
             </ul>

            <div className='md:hidden' onClick={handleclick}>
                {toggle ? <MdOutlineClose className='icons-1'  /> : <FaAlignRight className='icons-1' />}
            </div>
        </div>

        <div className={toggle ? 'absolute z-10 p-4 bg-white w-full px-6 md:hidden border-b' : 'hidden'}>
            <ul>
                <li className='text-[#195B42] font-2xl font-medium p-4 hover:bg-gray-400' onClick={handleclick}>About Us</li>
                <li className='text-[#195B42] font-2xl font-medium p-4 hover:bg-gray-400' onClick={handleclick}>Sectors</li>
                <li className='text-[#195B42] font-2xl font-medium p-4 hover:bg-gray-400' onClick={handleclick}>Gallery</li>
                <li className='text-[#195B42] font-2xl font-medium p-4 hover:bg-gray-400' onClick={handleclick}>Contact Us</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar