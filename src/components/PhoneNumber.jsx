import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
function PhoneNumber() {
  const dialNumber = () => {
    const phoneNumber = '+11234567890';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      
      <button  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 justify-center" onClick={dialNumber}> <FaPhoneAlt />Call Us</button>
    </div>
  );
}

export default PhoneNumber;
