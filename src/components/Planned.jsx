import React from 'react'
import Plan1 from '../assets/3.png'

const Planned = () => {
  return (
    <div className='w-full h-full bg-white'>
        <div className="relative mt-[-16rem] mb-16 m-auto px-4 max-w-[1380px]">
            <div className="border border-solid border-[#C1A358] rounded-br-lg p-8 grid md:grid-cols-12">
                <div className="col-span-6 iimgr_hover w-full relative overflow-hidden">
                    <div className="img_desg">
                        <img className='w-full md:h-[700px]' src={Plan1} alt="Planning" />
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="md:p-[60px] pt-[40px] pb-[15px]">
                        <p className='text-lg font-medium leading-tight text-green-800 uppercase'>Every inch planned TO</p>
                        <h2 className='text-[36px] leading-47 font-medium text-[#C1A358] uppercase'>let you live better</h2>
                        <div className="mt-[60px]">
                            <p className='text-lg leading-6 mb-6'>A 300-acre vast estate, Le Parque is a self-contained  haven located just 30 minutes from central Ahmedabad. Le   Parque embraces the concept of exclusivity, offering a  carefully curated collection of resort-style villas with a   sprawling landscape that redefines opulence. Each villa is  meticulously designed to embody elegance, combining  contemporary architecture with timeless charm.</p>
                            <p className='text-lg leading-6'>Embrace the exclusivity of your own private haven, where you can retreat from the world and revel in the tranquillity of your surroundings.</p>
                        </div>
                        <div className="w-full mt-16">
                            <a href="" className="btn-us"><span>Contact Us</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Planned