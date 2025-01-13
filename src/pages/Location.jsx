import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { location } from "../assets/assets"; // Ensure the location array is imported correctly

const Location = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="location"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        Our <span className="underline underline-offset-4 decoration-emerald-500">Branches</span>
      </h1>
      <p className="text-gray-500 max-w-xl text-center mb-8">
        Bringing Wellness Closer to You
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {location.map((branch, index) => (
          <div
            key={index}
            className="max-w-[340px] bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            
            <img
              className="w-full h-40 object-cover"
              src={branch.image}
            />
            <div className="p-6 text-center">
              <h2 className="text-gray-700 text-2xl mb-4 font-bold">{branch.l1}</h2>
              <p className="text-xl   mb-2">{branch.des}</p>
              <div className="text-sm text-gray-600 mb-4 flex items-center justify-center">
                <button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps?q=${branch.latitude},${branch.longitude}`,
                      '_blank'
                    )
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 justify-center"
                >
                  <IoLocationOutline className="w-6 h-6" />
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
