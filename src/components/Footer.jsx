import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left Section */}
            <div className=''>
                <img className='mb-5 w-30' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-grey-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et corporis numquam sunt, cum amet maiores voluptatibus? Maxime corporis non odio numquam harum eius unde provident, reiciendis id! Alias, illum!</p>
            </div>
            {/* cENTERSection */}
            <div className=''>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* Right Section */}
            <div className=''>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul  className='flex flex-col gap-2 text-gray-600'>
                    <li>+234 2534 2561 552</li>
                    <li>example@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* Bottom Section */}
        <div className=''>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2024 | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer