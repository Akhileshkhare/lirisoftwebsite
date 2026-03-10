import React, { useState, useEffect } from 'react';

import { SectionProps } from '../home/Section1';

export const Section1: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2,highlight3, title3 } = sectionData;

  return (
    <section className="w-full bg-[#043A53] text-white text-center flex items-center justify-center flex-col py-10 md:py-0 min-h-[430px] md:h-[956px]">
      <h1 className='font-normal text-3xl md:text-5xl mt-10 md:mt-5 px-6 md:px-10 leading-tight'>
        {title1} <span className='font-bold'>{highlight1}</span> {title2} 
      </h1>
      <h1 className='font-normal text-3xl md:text-5xl my-4 md:my-8 px-6 md:px-10 leading-tight'>
        <span className='font-bold'>{highlight2}</span> {title3} <span className='font-bold'>{highlight3}</span>
      </h1>
      <div className="w-full px-4 md:px-10 flex justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-contain w-full max-w-[900px] h-auto md:max-h-[603px] rounded-[20px] md:rounded-[36px]"
        />
      </div>
    </section>
  );
}
