import React, { useState, useEffect } from "react";

import PhoneNumber from "../components/PhoneNumber";
import { BsWhatsapp } from "react-icons/bs";
import Faqs from "../components/faqs";


const testimonials = [
  {
    id: 1,
    name: "k.d sidhath",
    ratings: "⭐⭐⭐⭐⭐",
    feedback: "I recently visited Olivia Spa N Physiotherapy and was impressed with their clean equipment. The facility was well-maintained, and the staff made sure everything was sanitized. I felt comfortable and safe during my visit. Excellent job!",
    
  },
  {
    id: 2,
    name: "Sonu",
    feedback: "Olivia & Physiotherapy - Four offers high-quality beauty products that are truly exceptional. From skincare to hair care, their products are top-notch and deliver excellent results. I highly recommend trying out their range for an amazing beauty experience!",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "Kabir",
    feedback: "I had an excellent interaction with Olivia Spa N Physiotherapy, a beauty and personal care service. They had great offers and provided top-notch services. I was very satisfied with my experience there.",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "Nirmal Khogen Kumar",
    feedback: "Experience the ultimate relaxation at Olivia Spa N Physiotherapy. With a hygienic salon, clean equipment, and highly professional staff, you can expect excellent results every time. Indulge in top-notch beauty and personal care services at Olivia Spa N Physiotherapy.",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    id: 5,
    name: "Karan Saw",
    feedback: "I recently visited Olivia Spa N Physiotherapy and was left feeling rejuvenated. The excellent results, high-quality products, and up-to-date procedures made for a fantastic experience. The clean equipment and great offers were an added bonus!",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    name: "Amit Singh",
    feedback: "Olivia Spa N Physiotherapy was an excellent experience. The staff was polite and highly professional, with experienced therapists who provided top-notch service. The relaxing ambiance added to the overall tranquil experience.",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    name: "Aman Mahto",
    feedback: "Olivia Spa N Physiotherapy is a top-notch beauty and personal care service. The clean equipment and serene ambiance make it a delightful experience. The therapists are highly skilled and provide excellent services. I highly recommend this place for a rejuvenating experience.",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    id: 8,
    name: "Gorabh Sarma",
    feedback: "I recently visited Olivia Spa N Physiotherapy and the ambience was excellent. The relaxing music and soothing lighting instantly put me at ease. The comfortable seating and calming decor made my experience truly enjoyable. I highly recommend this spa for a tranquil retreat.",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    id: 9,
    name: "Ajay kumar",
    feedback: "Olivia Spa N Physiotherapy offers a luxurious and relaxing ambience with high-quality products and clean equipment. The highly professional and polite staff provide excellent services at a reasonable price, making it a great value for money. The hygienic salon also has great offers, making it an overall excellent experience.",
    ratings: "⭐⭐⭐⭐⭐",
  },
];

const About = () => {
  const [current, setCurrent] = useState(0);

  // Automatically change the testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="location"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        About{" "}
        <span className="underline underline-offset-4 decoration-emerald-500">
          Us
        </span>
      </h1>
      <p className="text-gray-500 max-w-xl text-center mb-8">
        We’re thrilled to have you here at{" "}
        <span className="font-bold">Olivia Spa N Physiotherapy</span>, we
        believe in bringing wellness and relaxation to your life.
      </p>


        <div className="m-8">
         <ul className="flex items-center justify-center gap-5">
          <li> <span className="font-bold">Ratings : </span>4.5⭐</li>
          <li><span className="font-bold">ESTD : </span>2022</li>
          </ul>
          <div className="flex items-center justify-center gap-5">
          <p className="my-5 items-center"><PhoneNumber/></p>


            <div 
                className="bg-blue-500 text-white  rounded flex items-center gap-2 justify-center"
              >
                <a 
                  href="https://wa.me/+918409122919" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center  text-white px-4 py-2 gap-3  rounded-full"
                >
                 <BsWhatsapp  /> Live Chat
                </a>
              </div>
              <div>
            
              </div>
          </div>
         
        </div>
        
       

      <div className="flex flex-col items-center justify-center bg-gray-100 px-4">
        <div className="relative w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-gray-800 text-center text-3xl font-bold">Customer's Feedback</h1>
          <div className="text-center">
            
          
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {testimonials[current].name}
            </h3>
            <p>{testimonials[current].ratings}</p>
            <p className="mt-2 text-gray-600 italic">
              "{testimonials[current].feedback}"
            </p>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0">
            <button
              onClick={goToPrevious}
              className="p-2 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600"
            >
              &lt;
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0">
            <button
              onClick={goToNext}
              className="p-2 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <Faqs/>
    </div>
  );
};

export default About;
