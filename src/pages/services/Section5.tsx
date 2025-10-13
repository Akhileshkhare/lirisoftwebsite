import React from "react";

import { SectionProps } from '../home/Section1';

export const Section5: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;
  interface Service {
    imageSrc: string;
    imageAlt: string;
    title: string;
  }


  const { title1, highlight1, title2, services } = sectionData;

  return (
    <section className="w-full md:py-20 py-8 px-6 md:px-0 h-auto bg-white">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-6 relative py-2">
        <div className="w-full pl-0 flex justify-center items-start flex-col">
          <p className="text-3xl md:text-[34px] font-normal text-left text-[#043A53] leading-snug md:leading-normal">
            {title1} <span className="font-bold">{highlight1}</span>
          </p>
          <p className="text-1xl md:text-[15px] text-[#12141D] text-left mt-4 leading-relaxed">
            {title2}
          </p>
        </div>
        <div className="w-full bg-white pt-10 md:h-auto flex flex-col md:flex-row items-center justify-center items-stretch">
          <div className="grid grid-cols-3 grid-rows-3 w-full">
            {services.map((service: Service, index: number) => (
               <div
              key={index}
              className={`flex flex-col items-center justify-center  p-6 ${
                index < 6 ? "border-b" : ""
              } ${index % 3 !== 2 ? "border-r" : ""} ${
                index === 4 ? "bg-white" : "bg-white"
              } border-[#12141D]`}
              >
              <img
                src={service.imageSrc}
                alt={service.imageAlt}
                className="w-12 h-12  mb-2"
              />
              <p className="text-center text-sm text-gray-700">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
