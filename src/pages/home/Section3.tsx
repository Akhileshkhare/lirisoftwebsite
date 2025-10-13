import React, { useEffect, useState } from 'react';
import { SectionProps } from './Section1';

interface Feature {
  img?: string;
  title?: string;
  desc?: string;
}


export const Section3: React.FC<SectionProps> = ({ data }) => {
  const sectionData = data || {};
  const buttonText = sectionData.buttonText || '';
  const heading = sectionData.heading || '';
  const description = sectionData.description || '';
  const features = Array.isArray(sectionData.features) ? sectionData.features : [];

  if (!heading && !buttonText && !description) return null;

  return (
    <section className="w-full px-4 md:px-0">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start py-10 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start px-4 md:px-20 lg:px-40 py-10 gap-10 md:gap-10">
          {/* Left Part (30%) */}
          <div className="w-full md:w-1/4 max-w-md space-y-6 md:space-y-8 text-left md:text-left">
            <div className='w-full flex justify-start items-start'>
              <button className="px-6 py-2 text-white bg-[#043A53] rounded-3xl flex items-center space-x-2">
                <span>{buttonText}</span>
              </button>
            </div>
            <h2 className="text-[#043A53] text-4xl md:text-5xl font-semibold leading-relaxed" style={{ lineHeight: '1.2' }}>
              {heading}
            </h2>
            <p className="text-gray-900 text-base md:text-[15px]">
              {description}
            </p>
          </div>

          {/* Right Part (70%) */}
          <div className="w-full md:w-3/4 flex flex-col items-center md:items-stretch sm:flex-row gap-6 py-2 md:py-8 md:gap-3">
            {features.map((feature: Feature, index: number) => (
              <div key={index} className="flex flex-col items-center p-6 gap-6 md:gap-8 bg-[#F2F5F6] rounded-xl w-full max-w-full md:max-w-[215.33px] h-auto text-center">
              <div className="w-28 h-28 flex items-center justify-center">
                <img src={feature.img || ''} alt={feature.title || ''} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2 text-left">
                <h3 className="text-[#043A53] text-[18px] font-semibold">{feature.title || ''}</h3>
                <p className="text-[#043A53] text-[15px]">{feature.desc || ''}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
