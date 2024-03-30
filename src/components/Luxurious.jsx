import React from 'react'

const Luxurious = () => {
  return (
    <div className='w-full h-full bg-black opacity-[90%] md:py-[6.5rem] md:px-[5.2rem] py-16 px-8'>
        <div className="grid md:grid-cols-8 items-center">
            <div className="col-span-5">
                <p className='text-white uppercase leading-[26.1px] text-[20px] font-medium'>Luxurious</p>
                <h2 className='text-[#C1A358] md:text-4xl text-3xl leading-[46.98px] uppercase font-semibold'>villa developments</h2>
            </div>
            <div className="col-span-3">
                <p className='text-white max-w-[370px] leading-[20.16px] text-[16px] font-light'>Le Parque’s 300 acres are divided into several villa developments, each with its own distinct identity.</p>
            </div>
        </div>
        <div className="my-12 w-full m-auto">
            <div className="lux_img relative h-[537px] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="block m-auto">
            <p className='text-white uppercase font-light text-center leading-[32.79px] text-2xl'>Where every day feels like a paradisiacal escape</p>
        </div>
    </div>
  )
}

export default Luxurious