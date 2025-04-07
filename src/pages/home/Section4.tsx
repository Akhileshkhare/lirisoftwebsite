import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { SectionProps } from './Section1';

export const Section4: React.FC<SectionProps> = ({ data }) => { 
  interface SectionData {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
  }

  const sectionData:SectionData=data || null;

  const navigate = useNavigate(); // Initialize navigate function

  if (!sectionData) return null;

  return (
    <section className='w-full flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-0 h-auto md:h-[687px]'>
      {/* Left Part */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full">
        <img
          src={sectionData.imageSrc} // Dynamic image path
          alt={sectionData.imageAlt} // Dynamic alt text
          className="object-cover w-full h-full rounded-tr-xl rounded-br-xl"
        />
      </div>

      {/* Right Part (Rectangles and Owl Image Section) */}
      <div className="w-full md:w-1/2 px-6 md:px-20 text-left md:text-left mt-6 md:mt-0">
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-[60px]">
          {sectionData.title}<br />
          <span className="pt-2 text-[#92A7B0]">{sectionData.subtitle}</span>
        </h2>
        <p className="text-base md:text-lg text-gray-900 mb-6 md:mb-8">
          {sectionData.description}
        </p>
        <button
          className="px-5 py-3 text-white font-semibold bg-[#F0B73F] rounded-3xl flex items-center justify-center md:justify-start space-x-3 mx-auto md:mx-0"
          onClick={() => navigate('/portfolio')} // Add onClick handler
        >
          <span className='mr-3'>{sectionData.buttonText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 bg-gray-500 opacity-60 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M18 12H6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
