import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Copyfooter = () => {
  return (
    <div className='w-full back_green py-4 border-t border-solid border-[#F5F5F6]'>
        <div className="max-w-[1450px] text-white m-auto grid px-4 items-center  md:grid-cols-8">
            <div className='md:col-span-5'>
                <div className="flex gap-4 md:justify-start justify-center">
                    <FaFacebookF className='text-4xl p-2 border rounded-[50px] hover:bg-white hover:text-[#C1A358] hover:border-0' />
                    <FaInstagram className='text-4xl p-2 border rounded-[50px] hover:bg-white hover:text-[#C1A358] hover:border-0' />
                    <FaTwitter className='text-4xl p-2 border rounded-[50px] hover:bg-white hover:text-[#C1A358] hover:border-0' />
                    <FaLinkedin className='text-4xl p-2 border rounded-[50px] hover:bg-white hover:text-[#C1A358] hover:border-0' />
                </div>
            </div>

            <div className="md:col-span-3 md:mt-0 mt-[1.2rem]">
                <div className="text-center text-white opacity-50">Copyright © 2024 Le parque. All Rights Reserved.</div>
            </div>
        </div>
    </div>
  )
}

export default Copyfooter