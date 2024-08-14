import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
    return (
        <div className='md:p-20 py-14 px-6'>
            <div className='md:w-1/2'>
                <h2 className='text-5xl font-bold'> Our Positive <span className='text-4xl italic font-light text-[#00AFF0]'>Social Impact</span> </h2>
                <p className='mt-4 font-light'>At CreativePulse Advertising, we believe in the power of creativity to drive positive change. Our   commitment to social responsibility is woven into the fabric of our agency. Here’s how we make a difference</p>
            </div>
            <div className='md:mt-20 mt-8 flex md:flex-row flex-col  gap-14'>
                <div className='shadow-lg p-10  rounded-3xl'>
                    <Image src="/img/comma.png" className='rounded-full  ' width={60} height={60} alt='logo' />

                    <h3 className='font-bold '>‘’ Best Cordination “</h3>
                    <p className='text-sm text-light mt-4'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident</p>
                    <div className='flex mt-6 items-center'>
                        <Image src="/img/user.png" className='rounded-full' width={60} height={60} alt='logo' />
                        <div>
                            <span className='font-bold'>Sophia Moore</span> <br />
                            <span className='text-sm'>CEO at Webflow Agency</span>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg p-10  rounded-3xl'>
                    <Image src="/img/comma.png" className='rounded-full  ' width={60} height={60} alt='logo' />

                    <h3 className='font-bold '>“ excellent work topnotch services’’</h3>
                    <p className='text-sm text-light mt-4'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident</p>
                    <div className='flex mt-6 items-center gap-2'>
                        <Image src="/img/user2.png" className='rounded-full' width={60} height={60} alt='logo' />
                        <div>
                            <span className='font-bold'>Adam Smith</span> <br />
                            <span className='text-sm'>Webflow Developer</span>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg p-10  rounded-3xl'>
                    <Image src="/img/comma.png" className='rounded-full  ' width={60} height={60} alt='logo' />

                    <h3 className='font-bold '>“Best Skill , industry standard work”</h3>
                    <p className='text-sm text-light mt-4'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident</p>
                    <div className='flex mt-6 items-center'>
                        <Image src="/img/user.png" className='rounded-full' width={60} height={60} alt='logo' />
                        <div>
                            <span className='font-bold'>Sophia Moore</span> <br />
                            <span className='text-sm'>CEO at Webflow Agency</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials