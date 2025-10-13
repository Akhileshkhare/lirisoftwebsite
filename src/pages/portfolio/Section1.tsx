import React, { useState, useEffect } from 'react';

import { SectionProps } from '../home/Section1';

export const Section1: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2,highlight3, title3 } = sectionData;

  return (
    <section className="w-full bg-[#043A53] text-white text-center flex items-center justify-center flex-col h-auto md:h-[906px] px-6 md:px-0 pb-8 md:pb-0">
      <h1 className='font-normal text-4xl md:text-5xl  mt-10  md:mt-2'>
        {title1} <span className='font-bold'>{highlight1}</span>
        <span className="block md:inline mt-1 md:mt-0"> {title2}</span>
      </h1>
      <h1 className='font-normal text-4xl md:text-5xl  mb-6 mt-1  my-8 md:my-6'>
        <span className='font-bold'>{highlight2}</span> {title3} <span className='font-bold'>{highlight3}</span>
      </h1>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="object-cover w-auto md:h-[603px] h-auto rounded-xl"
      />
    </section>
  );
}
