import React from 'react';
import Navbar from './Navbar';
import { assets } from '../assets/assets'; // Import assets

const Header = () => {
  return (
    <div
  className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
  style={{ backgroundImage: "url('/bg.jpg')" }}
  id="Header"
>
  <Navbar />
  <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-black">
    <h1 className="sm:text-emerald-500 text-white text-5xl">
      Best Spa & Massage Centre in Dhanbad -<span className="sm:text-white text-emerald-400">Olivia Spa & Physiotherapy</span>
    </h1>
    <button 
    className="bg-emerald-500 border-white px-8 py-3 my-10 rounded md:hidden"
    onClick={() => window.location.href = 'https://www.justdial.com/Dhanbad/Olivia-Spa-N-Physiotherapy-IV-Near-Reeta-Petrol-Pump-Nagnagar/9999PX326-X326-231207141811-R4A9_BZDET'}
>
    Book your Appointment
</button>


  </div>

  {/* WhatsApp Image */}
  <div 
    className="fixed bottom-5 right-5 sm:items-center  transition-opacity duration-300 z-20"
  >
    <a 
      href="https://wa.me/+918409122919" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center bg-green-500 text-white px-6 py-2 rounded-full"
    >
      <img 
        src={assets.whatsapp} 
        alt="WhatsApp" 
        className="w-12 h-12 mr-2"
      />
    </a>
  </div>
</div>

  );
};

export default Header;
