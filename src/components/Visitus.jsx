import React from 'react'
import ContactForm from './ContactForm'

const Visitus = () => {
  return (
    <div className='relative w-full h-full bg-black md:px-[5.2rem] border-t border-solid border-[#C1A358]'>
        <div className="grid md:grid-cols-2">
            <div className="md:py-32 pt-[80px] px-[40px] border-r border-solid border-[#C1A358]">
                <p className='text-white uppercase text-xl leading-[25.2px] font-light'>get in touch or</p>
                <h2 className='uppercase text-[#C1A358] text-5xl font-normal'>visit US</h2>
                
                <div className="md:flex justify-start gap-[10rem] my-24">
                    <div>
                        <p className='text-lg text-[#C1A358] font-light leading-5'>CALL AT</p>
                        <a className='text-white font-light leading-8 text-xl mt-2' href='tel:7069817800'>7069817800 </a>
                    </div>
                    <div>
                        <p className='text-lg text-[#C1A358] font-light leading-5'>EMAIL AT</p>
                        <a className='text-white font-light leading-8 text-xl mt-2' href='mailto:perfection@galainfra.com'>perfection@galainfra.com </a>
                    </div>
                </div>

                <div className="mt-2">
                    <p className='text-lg leading-5 font-light text-[#C1A358]'>SITE ADDRESS</p>
                    <p className='font-light text-xl text-white leading-8 max-w-[30rem] mt-2'>Le Parque, Sanand Bavla Road, (near Reliance Gas Bottling / PuniskaHealth Care), Pipan – 382110</p>
                </div>

                <div className="mt-10">
                    <p className='text-lg leading-5 font-light text-[#C1A358]'>CORPORATE ADDRESS</p>
                    <p className='font-light text-xl text-white leading-8 max-w-[30rem] mt-2'>Gala Group, A wing 9th floor Safal Profitaire, Corporate Road, Prahalad nagar, Ahmedabad – 15</p>
                </div>
            </div>

            <div className="md:pl-[5.2rem] md:py-32 py-24 px-[40px]">
                <p className='text-white uppercase text-xl leading-[25.2px] font-light'>send us a message</p>
                <h2 className='uppercase text-[#C1A358] text-5xl font-normal'>Contact Form</h2>
                
                {/* from Filled */}

                <ContactForm />
            </div>
            
        </div>
    </div>
  )
}

export default Visitus