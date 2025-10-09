import React, { useEffect, useState } from 'react';
import CustomSlider from './CustomSlider';
import { SectionProps } from './Section1';

export const Section5: React.FC<SectionProps> = ({ data }) => { 
  interface Section5Data {
    heading: string;
  }

  const sectionData:Section5Data=data || null;


  if (!sectionData) return null;

  return (
    <section className='w-full flex flex-col items-center justify-between bg-gray-100 md:py-8 pb-10 pt-4 px-4 md:px-0 h-auto md:h-[607px]'>
      <div className="w-full max-w-5xl mx-auto md:text-center text-left pt-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#043A53] mb-10 md:mb-[90px]">
          {sectionData?.heading}
        </h2>
        <div className="w-full flex justify-center">
          <CustomSlider />
        </div>
      </div>
    </section>
  );
}
