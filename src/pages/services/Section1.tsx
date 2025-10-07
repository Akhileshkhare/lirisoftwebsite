import React, { useState, useEffect } from 'react';

import { SectionProps } from '../home/Section1';

export const Section1: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3 } = sectionData;

  return (
    <section
      className="w-full bg-cover bg-center text-white flex items-left justify-center flex-col h-[200px] md:h-[786px]"
      style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    >
      <div
        className="ml-20 w-[360px] text-center left-[6%] bg-white bg-opacity-50 text-[#043A53] p-4 md:p-4 rounded-md"
      >
        <div className="text-xl md:text-4xl  space-y-0 md:space-y-3 p">
          <p>{title1} <span className='font-bold'>{highlight1}</span></p>
          <p>{title2} <span className='font-bold'>{highlight2}</span></p>
          <p>{title3}</p>
        </div>
      </div>
    </section>
  );
}
