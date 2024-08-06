import React from 'react'
import Navbar from './Navbar'
import { Caveat } from 'next/font/google';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const caveat = Caveat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Banner = () => {
    return (
        <div className=' bg-black'>
            <Navbar />

            <div className='text-white flex relative flex-col gap-6 items-center justify-center md:h-screen h-[400px] '>
                <div className='text-2xl'>
                    <h2 className={` ${inter.className}`}>WELCOME <span className={`bg-[#00AFF0] italic  rounded ps-2 pe-3 ${caveat.className}`}>Here</span></h2>

                </div>
                <div>
                    <h2 className='md:text-8xl text-4xl text-center uppercase font-bold '>Digital Product’s <br />
                        for Your Business
                    </h2>

                </div>
                <div>
                    <h3 className={`${inter.className} md:text-xl  text-center `}>We specialize in web development & design, graphic design, and digital marketing. <br className='md:block hidden' /> Our mission is to empower businesses in the online world.</h3>
                </div>
                <div>
                    <button className={`${inter.className} md:text-xl text-xs bg-white font-bold text-black py-3 px-20 rounded-lg`}>LET'S GET YOUR <span className='text-[#00AFF0] italic'> PROJECT</span>  STARTED!</button>
                </div>
                <Image src="/img/B3_5.png.png" width={440} height={0} className='w-[440px] h-auto md:block hidden absolute left-0 bottom-0' alt="" />
                <Image src="/img/under.png" width={440} height={0} className='w-40 absolute right-0 top-12' alt="" />
            </div>
        </div>
    )
}

export default Banner