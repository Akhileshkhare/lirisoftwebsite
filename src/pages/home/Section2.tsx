import React, { useEffect, useState } from "react";
import { SectionProps } from "./Section1";
interface SectionData {
  backgroundColor: string;
  heading: {
    title: string;
    highlight: string;
  };
  description: string;
  images: {
    left:  {src: string};
    center:  {src: string};
    right:  {src: string};
  };
}

export const Section2: React.FC<SectionProps> = ({ data }) => {  
  const sectionData:SectionData=data || null;

  if (!sectionData) return null;

  return (
    <section className="w-full" style={{ background: sectionData.backgroundColor }}>
      <div className="w-11/12 md:w-4/5 mx-auto flex flex-col items-center py-8 md:py-12 min-h-[375px]">
        <div className="flex w-full md:w-4/5 flex-col space-y-6 md:flex-row justify-start items-start px-4 md:px-10 pt-[30px] md:pt-[50px] mb-6 md:mb-10">
          {/* Left Part - Heading */}
          <div className="w-full">
            <h2 className="text-white text-3xl md:text-5xl font-semibold ml-0 md:ml-[5px] leading-[40px] md:leading-[50px]">
              {sectionData.heading.title} <br />
              <span className="text-[#F0B73F]">{sectionData.heading.highlight}</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-0 w-full">
          <div className="w-full md:w-auto">
            <video
              src="/aboutus.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full md:w-[900px] h-auto md:h-[636px] rounded-lg mx-auto"
              poster="/backimage.png"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
