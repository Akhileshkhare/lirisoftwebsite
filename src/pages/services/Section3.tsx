import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

export default function Section3() {
  const [sectionData, setSectionData] = useState({
    title1: "",
    highlight1: "",
    title2: "",
    imageSrc: "",
    imageAlt: "",
    highlight2: "",
    title3: ""
  });

  useEffect(() => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Service.section3))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3 } = sectionData;

  return (
    <section className="w-full py-20 px-4 md:px-0 h-auto">
      <div className="w-full max-w-7xl mx-auto flex md:flex-row flex-col items-center gap-10 md:gap-20 relative px-8 md:px-20">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border-gray-200 border p-3 rounded-full shadow-sm flex items-center justify-center">
          <FaPlay size={12} className="rotate-180" />
        </button>
        <div className="w-full md:w-1/2 pl-0 md:h-[480px] flex justify-center items-start flex-col">
          <p className="text-3xl md:text-[34px] font-normal text-left text-[#043A53] leading-snug md:leading-normal">
            <span className="font-bold">{highlight1}</span> {title1}
          </p>
          <p className="text-1xl md:text-[17px] text-left mt-4 leading-relaxed">
            {title2}
          </p>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:h-[480px] flex justify-center items-start pt-16">
          <div className="w-full h-[391px] md:h-[340px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border-gray-200 border p-3 rounded-full shadow-sm flex items-center justify-center">
          <FaPlay size={12} />
        </button>
      </div>
    </section>
  );
}
