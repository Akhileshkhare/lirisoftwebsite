import React from 'react';


import { SectionProps } from '../home/Section1';

export const Section4: React.FC<SectionProps> = ({ data }) => {   
 
  interface ImageData {
    Image: string;
    Text: string;
    Description: string;
    images: { Image: string; Text: string; Description: string }[];
  }
  const sectionData:ImageData=data || null;

  const { images } = sectionData;

  return (
    <section className="w-full px-4 md:px-0 bg-[#043a53] py-10 md:py-20"> {/* Updated background color */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {images.map((value, index) => (
            <div key={index} className="flex flex-col items-center bg-[#FFFFFF] justify-center w-[280px] p-6 rounded-lg shadow-lg"> {/* Card background remains white */}
              <img 
                src={value.Image} 
                alt={value.Description} 
                className="w-24 h-24 object-contain rounded-md"
              />
              <h1 className="text-4xl text-[#043a53] font-bold my-4">{value.Text}</h1> {/* Updated text color */}
              <p className="text-sm text-gray-600 font-bold text-center">{value.Description}</p> {/* Description text color remains gray */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
