import React from 'react'
import "./Style.css";
import { Inter } from 'next/font/google';
// import Marquee from 'react-fast-marquee';

const inter = Inter({ subsets: ["latin"] });

const Expertise = () => {
    return (
        <div className=' flex flex-col justify-center items-center md:gap-20 gap-10 bg-black text-white md:px-0 px-6  md:py-28 py-24'>
            <div className='text-center '>
                <h2 className={` ${inter.className} uppercase grade py-2 md:px-20 md:text-3xl  tracking-widest font-light `}>Our expertise </h2>
                <h3 className='md:text-4xl text-3xl mt-8'>
                    <span> We constantly come up </span> <br />
                    <span className='font-bold'> with new and creative ideas.</span>
                </h3>
            </div>
            <div className='flex md:flex-row flex-col gap-20 '>
                <div className='bg-[url("/img/logo.jpeg")] bg-contain md:block hidden bg-no-repeat bg-center h-96 w-96 rounded-3xl'>
                    
                </div>
                <div className='grade2 flex flex-col  justify-center items-center text-center   scrollbarm snap-y text-2xl overflow-y-scroll h-96 w-96'>

                    <h4 className='hover:bg-red-400 h-32 py-8 w-full  '>Branding & <br />
                        Graphic Designing</h4>


                    <h4 className='hover:bg-[#8384cd2f] h-32 py-8 w-full'>
                        Web Designing <br />
                        & Development
                    </h4>

                    <h4 className='hover:bg-[#8384cd2f] h-32 py-8 w-full'>
                        Social Media  <br />
                        Management
                    </h4>
                    <h4 className='hover:bg-[#8384cd2f] h-32 py-8 w-full'>
                        Branding & <br />
                        Graphic Designing
                    </h4>
                    <h4 className='hover:bg-[#8384cd2f] h-32 py-8 w-full'>
                        Vedio Editing  <br />
                        & Reels
                    </h4>


                </div>

            </div>
        </div>
    )
}

export default Expertise

