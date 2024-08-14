import React from 'react'

const Footer = () => {
    return (
        <div className='md:p-20  px-6 py-14 grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-6'>
             <div >
                <h2 className='md:text-4xl text-2xl font-bold'>VISUAL TENX</h2>
                <p className='md:text-xl text-xs text-justify'>
                    At Visual Tenx, we have an in-house
                    team of experts having a strong hand
                    on website development and digital
                    marketing. We develop websites for
                    Schools, Colleges, Hospitals, Clinics, Coaching centers, Taxi, and Transport Businesses, etc.
                </p>
            </div>
            <div>
                <h2 className='md:text-4xl text-2xl font-bold'>PRODUCTS</h2>
                <div>
                    <ul className='underline font-semibold leading-8'>
                        <li>Digital Marketing</li>
                        <li>Graphic designing</li>
                        <li>Website Designing</li>
                        <li>Sociel Media Marketing</li>
                    </ul>
                </div>
            </div>
           
            <div>
                <h2 className='md:text-4xl text-2xl font-bold'>USEFUL LINKS</h2>
                <div>
                    <ul className='underline font-semibold leading-8'>
                        <li>Pricing</li>
                        <li>Settings</li>
                        <li>Orders</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div >
                <h2 className='md:text-4xl text-2xl font-bold'>CONTACT</h2>
                <div>
                    <ul className='underline font-semibold leading-8'>
                        <li>Gharaunda, Haryana 132114</li>
                        <li>visualtenx@gmail.com</li>
                        <li>+91 98175-05418 </li>
                        <li>+91 74002-09100</li>
                    </ul>
                </div>
            </div>
           
           
            
            
        </div>
    )
}

export default Footer