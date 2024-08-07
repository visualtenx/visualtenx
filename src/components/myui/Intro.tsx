import React from 'react'
import Image from 'next/image'
import { DM_Sans } from 'next/font/google';
import { Inter } from 'next/font/google';

const dm_sans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Intro = () => {
    return (
        <div className='flex  px-20 justify-center items-center '>
            <div className=' w-1/2  '>
                <h4 className='text-5xl italic'>We are Best</h4>
                <h3 className='font-bold text-5xl '>Advertising Company <br /> Based in Haryana <br />
                    ( karnal )</h3>
                <h4 className={` ${dm_sans.className} mt-6`}>
                    Visual TenX is as clear as the name gets. Digital Experts providing Marketing Solutions that make you go ‘Bingo’. We at Visual TenX, a 360 Digital Marketing Agency, are not just assuring you or promising you but also delivering you the perfectly optimized digital marketing plan, customized for your product/service.
                </h4>
                <button className={` ${inter.className} py-4 px-6 bg-[#00AFF0] text-white mt-6`}>LEARN MORE</button>
            </div>
            <div className='w-1/2'>
                <Image src="/img/B15_9.png.png" width={760} height={695} alt='Visualtenx intro' />
            </div>
        </div>
    )
}

export default Intro