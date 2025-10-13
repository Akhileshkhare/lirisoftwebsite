import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { SectionProps } from './Section1';
import ReusableButton from '../../components/ReusableButton';

export const Section4: React.FC<SectionProps> = ({ data }) => {
  const sectionData = data || {};
  const imageSrc = sectionData.imageSrc || '';
  const imageAlt = sectionData.imageAlt || '';
  const title = sectionData.title || '';
  const subtitle = sectionData.subtitle || '';
  const description = sectionData.description || '';
  const buttonText = sectionData.buttonText || '';
  const navigate = useNavigate();

  if (!title && !imageSrc) return null;

  return (
    <section className='w-full flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-0 h-auto md:h-[687px]'>
      {/* Left Part */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full px-3 md:px-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      {/* Right Part (Rectangles and Owl Image Section) */}
      <div className="w-full md:w-1/2 px-6 md:px-20 text-left md:text-left mt-6 md:mt-0">
        <h2 className="text-2xl md:text-5xl font-semibold text-[#043A53] mb-4 md:mb-6 leading-tight md:leading-[60px]">
          {title}<br />
          <span className="pt-2 text-[#92A7B0]">{subtitle}</span>
        </h2>
        <p className="text-base md:text-lg text-[#043A53] mb-6 md:mb-8">
          {description}
        </p>
       <ReusableButton
          text={buttonText}
          widthClass="px-6"
          onClick={() => navigate('/portfolio')}
          showArrow={true}
        />
      </div>
    </section>
  );
}
