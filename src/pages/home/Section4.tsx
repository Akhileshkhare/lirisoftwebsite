import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { SectionProps } from './Section1';
import ReusableButton from '../../components/ReusableButton';

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
          src={sectionData?.imageSrc}
          alt={sectionData?.imageAlt}
          className="object-cover w-full h-full rounded-tr-xl rounded-br-xl"
        />
      </div>

      {/* Right Part (Rectangles and Owl Image Section) */}
      <div className="w-full md:w-1/2 px-6 md:px-20 text-left md:text-left mt-6 md:mt-0">
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-[60px]">
          {sectionData?.title}<br />
          <span className="pt-2 text-[#92A7B0]">{sectionData?.subtitle}</span>
        </h2>
        <p className="text-base md:text-lg text-gray-900 mb-6 md:mb-8">
          {sectionData?.description}
        </p>
        <ReusableButton
          text={sectionData?.buttonText}
          widthClass=""
          onClick={() => navigate('/portfolio')}
          showArrow={true}
        />
      </div>
    </section>
  );
}
