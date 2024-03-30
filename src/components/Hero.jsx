import React from 'react'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className="relative w-full banner_design h-[920px] top-[-20px] bg-cover bg-center md:rounded-br-[30%]"></div>
        <div className="relative -z-10 md:p-[6.5rem] p-[0.5rem] second_back bg-cover bg-center md:h-[485px] h-[550px]">
            <div className="grid md:grid-cols-12 justify-between gap-x-34rem">
                <div className="col-span-9 relative md:top-[16rem] top-[20rem] z-10 mb-8 md:mb-0">
                    <p className='text-white uppercase leading-6 text-xl font-medium'>A seamless blend of</p>
                    <h2 className='text-[#C1A358] md:text-4xl text-3xl leading-[46.98px] uppercase font-semibold'>luxury and leisure</h2>
                </div>
                <div className="col-span-3 relative md:top-[16rem] top-[20rem] z-10">
                    <p className='text-[#C1A358] text-lg font-normal'>Take in fresh air <br/> amidst greenery that stretches <br/> <b>as far as the eye can see.</b></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero