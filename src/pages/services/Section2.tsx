import React, { useState, useEffect } from 'react';
import { SectionProps } from '../home/Section1';

export const Section2: React.FC<SectionProps> = ({ data }) => {   

  interface Service {
    icon: string;
    name: string;
    details: string;
    additionalDetails: string; // Added additional details property
    imageSrc: string; // Added imageSrc for dynamic image change
  }
  const sectionData:any=data || null;
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);


  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3, services } = sectionData;

  return (
    <section className="w-full py-4 md:py-20 px-4 md:px-0 h-auto bg-gray-100">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-6 relative py-10">
        <div className="w-full pl-0 flex justify-center items-start flex-col">
          <p className="text-3xl md:text-[34px] font-normal text-left text-[#043A53] leading-snug md:leading-normal">
            {title1 || "Default Title"} <span className="font-bold">{highlight1 || "Default Highlight"}</span>
          </p>
          <p className="text-1xl md:text-[15px] text-[#12141D] text-left mt-4 leading-relaxed">
            {title2 || "Default Subtitle"}
          </p>
        </div>
        <div className="w-full pl-0 md:h-auto flex flex-col md:flex-row justify-center items-stretch pt-0 gap-3">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 flex-1">
            {services.map((service: Service, index: number) => (
              <div
              key={index}
              className={`flex items-center gap-4 bg-white space-y-1 p-4 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer ${
                selectedServiceIndex === index ? "bg-blue-100 border-l-4 border-blue-500" : ""
              }`}
              onClick={() => setSelectedServiceIndex(index)}
              >
              <img
                src={service.icon}
                alt={service.name}
                className="w-4 h-4"
              />
              <p className="text-md text-[#043A53]">{service.name}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-col items-start gap-4 bg-white p-6 flex-1">
            {selectedServiceIndex !== null ? (
              <>
                <img
                  src={services[selectedServiceIndex]?.icon || ""}
                  alt={services[selectedServiceIndex]?.name || "Service Image"}
                  className="w-16 h-auto"
                />
                <h3 className="text-xl md:text-[20px] font-bold text-[#043A53]">
                  {services[selectedServiceIndex]?.name || "Service Name"}
                </h3>
                <p className="text-md md:text-[15px] text-[#12141D] leading-relaxed">
                  {services[selectedServiceIndex]?.details || "Service Details"}
                </p>
                <p className="text-sm md:text-[13px] text-[#12141D] leading-relaxed">
                  {services[selectedServiceIndex]?.additionalDetails || "Additional Details"}
                </p>
              </>
            ) : (
              <>
                <img
                  src={imageSrc || ""}
                  alt={imageAlt || "Default Image"}
                  className="w-16 h-auto"
                />
                <h3 className="text-xl md:text-[20px] font-bold text-[#043A53]">
                  {highlight2 || "Default Highlight"}
                </h3>
                <p className="text-md md:text-[15px] text-[#12141D] leading-relaxed">
                  {title3 || "Default Description"}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
