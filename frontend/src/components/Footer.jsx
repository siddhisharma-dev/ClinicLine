import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/*-----------Left Section--------------*/}
            <div>
                <div className='flex items-center gap-2'>
                        <img  className='w-25 cursor-pointer'src={assets.logo} alt="" />
                        <h1 className='text-2xl font-bold text-blue-900'>ClinicLine</h1>
                </div>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when on unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
            </div>

            {/*-----------Center Section--------------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/*-----------Right Section--------------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-1234567890</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>
            </div>
        </div>
        {/*----------Copyright Text------------*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2026@ ClinicLine - All Right Reserved.</p>

        </div>
    </div>
  )
}

export default Footer