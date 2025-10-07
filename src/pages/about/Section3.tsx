import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Added import for navigation

import { SectionProps } from '../home/Section1';

export const Section3: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;

  // const navigate = useNavigate(); // Initialize navigation


  const { title, images, buttonText }: { title: string; images: { src: string }[]; buttonText: string } = sectionData;

  return (
    <section className="w-full px-4 md:px-0">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center py-10 md:py-20">
        {/* Title Section */}
        <div className="text-left w-full">
          <h1 className="text-3xl md:text-4xl font-bold pt-4">
            {title}
          </h1>
        </div>
        {/* Image Grid */}
        <div className="w-full pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:gap-10 gap-6 p-0">
            {images.map((img: { src: string }, index: number) => (
              <div key={index} className="w-full h-[200px]  flex items-center justify-center bg-white border border-gray-300 md:px-12 p-4">
              <img
                src={img.src}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-auto max-w-[150px] md:max-w-[200px] object-contain p-1"
                />
              </div>
            ))}
          </div>
        </div>       
      </div>
    </section>
  );
}
