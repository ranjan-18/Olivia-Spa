import React from 'react'
import { assets } from '../assets/assets'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-blue-500 w-full overflow-hidden'>
    <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'><img className='w-8 h-8' src={assets.logo2} alt="" />
        <p className='mt-4 text-white'>Bringing Wellness Closer to You</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
        <h3 className='text-white text-lg font-bold mb-4'>Services</h3>
        <ul className='flex flex-col gap-2 text-white'>
            <li>Dry Thai Massage</li>
            <li>Swedish Massage</li>
            <li>Deep Tissue Massage</li>
            <li>Balinese Massage</li>
            <li>Aroma Massage</li>
        </ul>
    </div>
    <div className='w-full md:w-1/3 gap-5'>
        <h3 className='text-white text-lg font-bold mb-4'>
        Contact Us
        </h3>
        <p className='flex items-center text-white gap-3'><FaPhoneAlt /> 8409122919</p>
        <a className='flex items-center text-white gap-3' href="mailto:ranjan@gmail.com"><CiMail />ranjan@gmail.com</a>
    </div>
    </div>
    <div className='text-white border-t border-white py-4 mt-10 text-center'>
    Copyright © reserved Olivia Spa N Physiothreapy | Made with ❤️ by <a className='z-50' href="https://www.linkedin.com/in/ranjan-kumar-a3a27425a/" target='_blank'>Ranjan</a>
    </div>
    </div>
  )
}

export default Footer