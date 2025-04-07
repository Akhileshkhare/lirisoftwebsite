import React from 'react'

import { SectionProps } from '../home/Section1';

export const Section2: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;
  return (
      <section className="py-10 px-5 md:px-20 py-20">
              <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-6 relative py-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-10">
                  About Our{" "}
                  <span className="font-bold text-[#043A53]">Product</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center">
                  <img
                    src="/backimage2.jpeg"
                    alt="Product Overview"
                    className="w-full md:w-1/2 rounded-lg shadow-lg mb-5 md:mb-0 md:mr-5"
                  />
                  <p className="text-gray-800 font-normal text-lg md:w-1/2">
                    Our cutting-edge IT product is designed to streamline your
                    business operations, enhance productivity, and provide robust
                    security. With a user-friendly interface and powerful features,
                    it's the perfect solution for businesses of all sizes. Whether
                    you're a small startup or a large enterprise, our product adapts
                    to your needs, ensuring seamless integration and scalability.
                    Experience the future of technology with our innovative
                    solutions tailored to drive your success.
                  </p>
                </div>
              </div>
            </section>
    
  )
}
