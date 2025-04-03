import React, { useState, useEffect } from 'react';
import brainCircuit from '../../assets/brain-circuit.png';
import trending from '../../assets/trending-up-down.png';
import atom from '../../assets/atom.png';
import cable from '../../assets/cable.png';
import Database from '../../assets/Database.png';

export default function Section2() {
  interface Service {
    icon: string;
    name: string;
    details: string;
    additionalDetails: string; // Added additional details property
    imageSrc: string; // Added imageSrc for dynamic image change
  }

  const [sectionData, setSectionData] = useState<{
    title1: string;
    highlight1: string;
    title2: string;
    imageSrc: string;
    imageAlt: string;
    highlight2: string;
    title3: string;
    services: Service[];
  }>({
    title1: "",
    highlight1: "",
    title2: "",
    imageSrc: "",
    imageAlt: "",
    highlight2: "",
    title3: "",
    services: []
  });

  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => {
        if (data?.Service?.section2) {
          setSectionData(data.Service.section2);
        } else {
          console.error("Invalid API response structure:", data);
        }
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

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
            {services.map((service, index) => (
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
