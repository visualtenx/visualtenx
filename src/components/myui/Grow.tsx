import React from 'react'
import Image from 'next/image'
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
const Grow = () => {
  return (
    <div className='h-screen bg-black text-white py-20 text-center'>
        <div>
            <h2 className='text-5xl'>How We Work To <br />
           <span className='font-bold'> Help Your Business Grow </span>   
           </h2>
        </div>
        <div className='flex gap-20 justify-center p-20'>
            <div>
                <Image src="/img/grow.png" width={500} height={0} alt='grow' className=''/>
            </div>
            <div className='bg-white text-black w-96 p-8'>
                <div className='py-4 flex justify-between text-2xl'>
                <HiArrowSmallLeft />
                <HiArrowSmallRight />
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>Brand Development</h3>
                    <span className='mt-8 text-2xl '>Brand Identity: <br /> 
                    Help create or refine the business’s brand identity, including logos, color schemes, and messaging.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grow