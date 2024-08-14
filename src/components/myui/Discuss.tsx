import React from 'react'
import Image from 'next/image'

const Discuss = () => {
  return (
    <div className='bg-black flex md:flex-row flex-col justify-between items-center text-white md:p-20 py-14 px-6 md:gap-20 gap-8'>
        <div>
            <h2 className='md:text-5xl text-3xl md:text-left text-center font-bold'>
            Let's Discuss  <br />
            with Our Team
            </h2>
        </div>
        <div className='w-96'>
            <p className='text-sm font-light md:text-left text-center'>
            At CreativePulse Advertising, we believe in the power of creativity to drive positive change. Our commitment to social responsibility is woven into the fabric of our agency. Here’s how we make a difference
            </p>
        </div>
        <div>
          <Image src="/img/redirect.png"  width={100} height={100} alt='arrow'/>
        </div>
    </div>
  )
}

export default Discuss