import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMobilemenu, setShowMobilemenu] = useState(false);

    useEffect(() => {
        if (showMobilemenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobilemenu]);

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-10 lg:px-32'>
                <img src={assets.logo} alt="Olivia Spa & Physiotherapy Logo" />

                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-7 text-white'>
                    <Link to="/" className='cursor-pointer hover:text-emerald-500'>Home</Link>
                    <Link to="/location" className='cursor-pointer hover:text-emerald-500'>Location</Link>
                    <Link to="/services" smooth={true} duration={500} className='cursor-pointer hover:text-emerald-500'>Services</Link>
                    <Link to="/about" className='cursor-pointer hover:text-emerald-500'>About Us</Link>
                </ul>

                {/* Book Appointment Button */}
                <button 
                    className="bg-emerald-500 border-white px-8 py-3 rounded hidden md:block"
                    onClick={() => window.location.href = 'https://www.justdial.com/Dhanbad/Olivia-Spa-N-Physiotherapy-IV-Near-Reeta-Petrol-Pump-Nagnagar/9999PX326-X326-231207141811-R4A9_BZDET'}
                >
                    Book your Appointment
                </button>

                {/* Mobile Menu Icon */}
                <img onClick={() => setShowMobilemenu(true)} src={assets.menu_icon} className='md:hidden w-7' alt="Menu Icon" />
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 right-0 bottom-0 w-full bg-white transition-transform transform ${showMobilemenu ? 'translate-x-0' : 'translate-x-full'} shadow-lg`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img onClick={() => setShowMobilemenu(false)} src={assets.cross_icon} className='w-6' alt="Close Icon" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <Link to="/" onClick={() => setShowMobilemenu(false)} className='px-4 py-2 rounded-full inline-block'>Home</Link>
                    <Link to="/location" onClick={() => setShowMobilemenu(false)} className='px-4 py-2 rounded-full inline-block'>Location</Link>
                    <Link to="/services" onClick={() => setShowMobilemenu(false)} className='px-4 py-2 rounded-full inline-block'>Services</Link>
                    <Link to="/about" onClick={() => setShowMobilemenu(false)} className='px-4 py-2 rounded-full inline-block'>About Us</Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
