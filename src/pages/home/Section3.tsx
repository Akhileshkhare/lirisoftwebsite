import React, { useEffect, useState } from 'react';

export default function Section3() {
  interface Section3Data {
    buttonText: string;
    heading: string;
    description: string;
    features: { img: string; title: string; desc: string }[];
  }

  const [sectionData, setSectionData] = useState<Section3Data | null>(null);

  useEffect(() => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Home.section3));
  }, []);

  if (!sectionData) return null;

  return (
    <section className="w-full px-4 md:px-0">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center py-10 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-20 lg:px-40 py-10 gap-10 md:gap-10">
          {/* Left Part (30%) */}
          <div className="w-full md:w-1/4 max-w-md space-y-6 md:space-y-8 text-left md:text-left">
            <button className="px-6 py-3 text-white bg-[#043A53] rounded-3xl flex items-center space-x-2 mx-auto md:mx-0">
              <span>{sectionData.buttonText}</span>
            </button>
            <h2 className="text-gray-900 text-5xl md:text-5xl font-semibold">
              {sectionData.heading}
            </h2>
            <p className="text-gray-900 text-base md:text-md">
              {sectionData.description}
            </p>
          </div>

          {/* Right Part (70%) */}
          <div className="w-full md:w-3/4 flex flex-col items-center md:items-stretch sm:flex-row gap-6 py-8 md:gap-3">
            {sectionData.features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-6 gap-6 md:gap-8 bg-[#F2F5F6] rounded-2xl w-full max-w-[215.33px] h-auto text-center">
                <div className="w-28 h-28 flex items-center justify-center">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2 text-left">
                  <h3 className="text-gray-900 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-900 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
