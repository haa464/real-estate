import React from 'react'
import Ftimg from '../assets/fotter_logo.webp'

const Footer = () => {
  return (
    <div className='w-full back_green py-24'>
        <div className="max-w-[1450px] text-white m-auto grid px-4 md:grid-cols-6">
            {/* image about */}
            <div className="md:col-span-3 col-span-2">
                <img className='w-full max-w-[220px] pb-3' src={Ftimg} alt="footer_logo" />
                <p className='max-w-[330px] mb-0 font-normal text-white leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div>
                <ul className='md:mt-[0rem] mt-[3rem]'>
                    <li className='cursor-pointer pb-[10px] text-[16px] font-normal leading-6 uppercase hover:text-[#AC8D3F]'>Home</li>
                    <li className='cursor-pointer text-[16px] font-normal leading-6 uppercase hover:text-[#AC8D3F]'>About Us</li>
                </ul>
            </div>

            <div>
                <ul className='md:mt-[0rem] mt-[3rem]'>
                    <li className='cursor-pointer pb-[10px] text-[16px] font-normal leading-6 uppercase hover:text-[#AC8D3F]'>PROJECTS</li>
                    <li className='cursor-pointer pb-[10px] text-[16px] font-normal leading-6 uppercase hover:text-[#AC8D3F]'>OUR GALLERY</li>
                    <li className='cursor-pointer text-[16px] font-normal leading-6 uppercase hover:text-[#AC8D3F]'>CONTACT US</li>
                </ul>
            </div>

            <div>
                <ul className='md:mt-[0rem] mt-[3rem]'>
                    <li className='cursor-pointer pb-[10px] text-[16px] font-normal leading-6 uppercase hover:text-[#AC8D3F]'>legal agreement</li>
                    <li className='cursor-pointer pb-[10px] text-[16px] font-normal leading-6 uppercase hover:text-[#AC8D3F]'>PRIVACY POLICY</li>
                    <li className='cursor-pointer text-[16px] font-normal leading-6 uppercase hover:text-[#AC8D3F]'>terms & conditions</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer