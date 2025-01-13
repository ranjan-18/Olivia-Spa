import React from 'react';
import { assets } from '../assets/assets';

const WhatsAppButton = () => {
  const phoneNumber = "8409122919"; // Replace with the number you want to send a message to
  const message = "Hello, I'm interested in your services."; // Optional pre-filled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div>
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center bg-green-500 text-white px-6 py-2 rounded-full"
      >
        <img 
          src={assets.whatsapp} 
          alt="WhatsApp" 
          className="w-6 h-6 mr-2" 
        />
        Chat with us on WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppButton;
