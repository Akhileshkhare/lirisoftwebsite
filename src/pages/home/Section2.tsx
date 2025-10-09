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
      <div className="w-4/5 mx-auto flex flex-col items-start py-0 md:h-[1044px] h-[480px]">
      <div className="flex w-4/5 flex-col space-y-6 md:flex-row justify-start items-start px-0  pt-[50px] md:pt-[100px]">
          {/* Left Part - Heading */}
          <div className="w-full  h-[144px] mb-12 md:mb-0">
            <h2 className="text-white text-5xl font-semibold ml-[5px] leading-[50px]">
              {sectionData.heading.title} <br />
              <span className="text-[#F0B73F]">{sectionData.heading.highlight}</span>
            </h2>
          </div>

       

          {/* Right Part - Description */}
          {/* <div className="w-full md:w-2/5 h-[144px]">
            <p className="text-white text-md md:text-md px-0">
              {sectionData.description}
            </p>
          </div> */}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-0">
          {/* <div className="mr-10 hidden md:block">
            <img
              src={sectionData.images.left.src}
              alt="Lirisoft Home Page"
              className="object-cover w-full h-[511px] rounded"
            />
          </div> */}
          <div>
            <video
              src="/aboutus.mp4"
              controls
              className="object-cover w-full h-auto md:h-[636px] rounded-lg"
              poster="/backimage.png"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* <div className="ml-10 hidden md:block">
            <img
              src={sectionData.images.right.src}
              alt="Lirisoft Home Page"
              className="object-cover w-full h-[511px] rounded"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
