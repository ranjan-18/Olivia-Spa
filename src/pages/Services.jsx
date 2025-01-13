import React from 'react';
import { services } from '../assets/assets';

const Services = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="services"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        Our <span className="underline underline-offset-4 decoration-emerald-500">Services</span>
      </h1>
      <p className="text-gray-500 max-w-xl text-center mb-8">
      If you are Looking for a Massage Service in <span className=" font-bold">Dhanbad</span> then <span className=" font-bold">Olivia Spa & Physiothreapy</span> is best. Our expert therapists and diverse range of services ensure a personalized and rejuvenating experience. Escape the ordinary and prioritize your well-being with <span className=" font-bold ">Olivia Spa & Physiothreapy</span>.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="max-w-[340px] bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="w-full h-40 object-cover"
              src={service.image}
              alt={service.name}
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-emerald-500 mb-2">{service.name}</h2>
              <h2 className="text-gray-700 font-bold mb-4">{service.title}</h2>
              <div className="text-sm text-gray-600 mb-4">
                <p><span className="font-semibold">Price:</span> {service.price}</p>
                <p><span className="font-semibold">Benefits:</span> {service.Benefits}</p>
                <p><span className="font-semibold">Hygiene:</span> {service.Hygiene}</p>
              </div>
              <p className="text-gray-500 text-sm italic">{service.description}</p>
              <p className="mt-4 text-gray-500 text-sm">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
