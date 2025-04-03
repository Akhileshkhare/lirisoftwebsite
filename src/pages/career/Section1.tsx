import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Section1() {
  interface Option {
    value: string;
    label: string;
  }

  const [sectionData, setSectionData] = useState<{
    title1: string;
    highlight1: string;
    title2: string;
    highlight2: string;
    title3: string;
    expertiseOptions: Option[];
    locationOptions: Option[];
  }>({
    title1: "",
    highlight1: "",
    title2: "",
    highlight2: "",
    title3: "",
    expertiseOptions: [],
    locationOptions: []
  });

  useEffect(() => {
    fetch("https://liriapis.onrender.com/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Career.section1))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, highlight2, title3, expertiseOptions, locationOptions } = sectionData;

  return (
    <section className="w-full px-4 md:px-0 bg-[#043A53] h-[580px] md:h-[780px]">
      <div className="w-full mx-auto flex flex-col items-center justify-center">
        <div className="text-center text-white w-full flex flex-col items-center justify-center">
          <h1 className="text-[22px] w-full md:w-[60%] md:text-5xl font-semibold pt-[80px] md:pt-[200px]">
            {title1}
          </h1>
          <h2 className="text-[#97F03F] pt-8 text-sm md:text-[20px]">
            {highlight1}
          </h2>
        </div>
        <div className="w-full mx-auto flex text-white items-center justify-center">
          <div className="w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-[50px] md:mt-[140px] border-t border-b border-[#A9CAE7] pb-4">
            <div className="px-4 py-2">
              <h3 className="text-md font-semibold text-[#A9CAE7] mb-0">
                {title2}
              </h3>
              <p className="text-left text-xl text-white">{highlight2}</p>
            </div>
            <div className="px-4 py-2 md:border-l border-gray-400">
              <select className="w-full bg-transparent text-[#A9CAE7] p-2 rounded border-0">
                <option value="" disabled selected style={{ color: '#043A53' }}>
                  Expertise
                </option>
                {expertiseOptions.map((option) => (
                  <option key={option.value} value={option.value} style={{ color: '#043A53' }}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="px-4 py-2 md:border-l border-gray-400 flex flex-row items-center justify-center">
              <select className="w-full bg-transparent text-[#A9CAE7] p-2 rounded border-0">
                <option value="" disabled selected style={{ color: '#043A53' }}>
                  Location
                </option>
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value} style={{ color: '#043A53' }}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button className="px-6 py-3 text-white font-semibold bg-yellow-400 rounded-full flex items-center space-x-2">
                <span>{title3}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
