import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";

import { SectionProps } from '../home/Section1';

export const Section2: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;

  const { heading, description, listItems } = sectionData;

  return (
    <section className="w-full px-4 md:px-0">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center md:pt-24 pt-16 pb-24">
        <div className='text-left w-full'>
          <h1 className='text-3xl font-bold pt-4'>{heading}</h1>
        </div>
        <div className='w-full pt-6 text-right md:pl-[300px] pl-[10px]'>
          <p className='text-left mb-4'>{description}</p>
          <ul className="space-y-4 text-left">
            {listItems.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
              <FaCheck className="text-white bg-[#043A53] rounded-full p-1 mt-1 mr-1" size={18} />
              {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
