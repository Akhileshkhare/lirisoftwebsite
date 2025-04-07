import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { API_BASE_URI } from '../config/apiConfig';

export default function Partners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URI}/api/homepage`) 
      .then((response) => response.json())
      .then((data) => setPartners(data.About.section3.images))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <>
    <section className="w-full px-4 md:px-0">
    <div className="w-full h-[450px] mt-[90px] bg-[#F2F5F6] absolute top-0 left-0"></div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative  bg-white mt-20 px-10 py-10 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold">Our Partners</h1>
        <div className="w-full pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {partners.map((src, index) => (
              <div key={index} className="w-full h-auto flex items-center justify-center bg-white border border-gray-300 px-4 py-4">
                <img
                  src={src}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-auto max-w-[150px] md:max-w-[200px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
