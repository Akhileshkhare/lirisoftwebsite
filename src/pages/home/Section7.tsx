import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SectionProps } from "./Section1";

interface Section7Data {
  title: string;
  buttonText: string;
  buttonIcon: {
    path: string;
  };
  contactText: string;
  images: {
    yellowBar: {
      src: string;
      style: string;
    };
    blueRounded: {
      src: string;
      style: string;
    };
    bottomIcon: {
      src: string;
      style: string;
    };
    background: { src: string;};
  };
}

export const Section7: React.FC<SectionProps> = ({ data }) => { 
  const sectionData:Section7Data=data || null;
  const navigate = useNavigate(); // Initialize navigate function



  if (!sectionData) return null;

  return (

    <section className="w-full bg-[#12141D]">
      <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between py-0 h-auto md:h-[520px]">
        {/* Left Part */}
        <div className="w-full md:w-1/2 pl-10 md:pl-20">
          <h2 className="text-4xl md:text-5xl pt-10 md:pt-0 md:text-5xl font-semibold text-gray-100 mb-6 leading-tight">
            {sectionData.title}
          </h2>

          <button onClick={() => navigate('/contact')}  className="px-6 py-4 text-white text-lg font-semibold bg-[#F0B73F] rounded-full flex items-center space-x-2">
            <span className="mr-2">{sectionData.buttonText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 bg-gray-500 opacity-60 rounded-full p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={sectionData.buttonIcon.path}
              />
            </svg>
          </button>
          <p className="text-gray-400 mt-5">{sectionData.contactText}</p>
        </div>

        {/* Right Part (Image) */}
        <div className="relative h-auto md:h-[520px] w-full md:w-1/2 overflow-hidden">
          {/* Yellow Bar Div */}
          <div className="absolute w-[104px] h-[502px] top-[160px] left-[500px] bg-[#F0B73F] rounded-[1000px]">
              <img src="./Icons.svg" alt="Icons" className="w-[72px] h-[72px] absolute left-[15px] top-[15px]" />
           
          </div>

          {/* Blue Rounded Div with Background Image */}
          <div className="absolute z-10 w-[104px] h-[413px] top-[331px] left-[355px] bg-[#043A53] rounded-[1000px] flex items-center justify-center">
            <img src="./Icons1.svg" alt="Icons" className="w-[72px] h-[72px] absolute left-[15px] top-[15px]" />
          </div>
            <img src="./Icons2.svg" alt="Icons" className="w-[72px] h-[72px] absolute left-[5px] bottom-[20px]" />
          <div
            className="relative w-auto h-[200px] md:w-[723px] md:h-[805px] bg-[length:155%] bg-no-repeat bg-[position:-22px_-27px] md:bg-[position:-158px_-53px]"
            style={{ backgroundImage: `url('${sectionData.images.background.src}')` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
