import React from 'react'
import Menu from './Menu'
import { CgMenuRight } from "react-icons/cg";
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <div className='px-12'>
                <div className='text-white grid md:grid-cols-3 grid-cols-2 py-6 items-center justify-between'>
                    <div>
                        <figure >
                            <Image src="/img/logo.jpeg" width={56} height={0} alt="visualtenx logo"  />
                        </figure>
                    </div>
                    <div className='md:flex justify-center hidden '>
                        <Menu />
                    </div>
                    <div className='flex gap-12 justify-end items-center'>
                        <button className='bg-[#00AFF0] py-3 ps-6 pe-6 rounded-md md:block hidden font-semibold '>Get in Touch</button>
                        <CgMenuRight className='text-4xl' />

                    </div>


                </div>
            </div>
        </>
    )
}

export default Navbar