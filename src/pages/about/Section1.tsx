import React from 'react';
import { SectionProps } from '../home/Section1';

export const Section1: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;

  // const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3 } = sectionData;

  return (
    <section className="w-full bg-[#043A53] text-white flex items-center justify-center flex-col h-auto md:h-auto relative">
      <img
        src="/About_banner.png"
        alt="About Banner"
        className="w-full h-[240px] md:h-auto object-cover"
        style={{ display: 'block' }}
      />
    </section>
  );
}
