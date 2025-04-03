import React, { useEffect, useState } from "react";

export default function Section2() {
  interface SectionData {
    backgroundColor: string;
    heading: {
      title: string;
      highlight: string;
    };
    description: string;
    images: {
      left: string;
      center: string;
      right: string;
    };
  }

  const [sectionData, setSectionData] = useState<SectionData | null>(null);

  useEffect(() => {
    fetch("https://liriapis.onrender.com/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Home.section2));
  }, []);

  if (!sectionData) return null;

  return (
    <section className="w-full" style={{ background: sectionData.backgroundColor }}>
      <div className="w-4/5 mx-auto flex flex-col items-center py-0 h-[1044px]">
        <div className="flex flex-col space-y-6 md:flex-row justify-between items-start px-0 md:px-40 pt-[50px] md:pt-[100px]">
          {/* Left Part - Heading */}
          <div className="w-full md:w-3/5 h-[144px]">
            <h2 className="text-white text-5xl font-semibold ml-[5px] leading-[50px]">
              {sectionData.heading.title} <br />
              <span className="text-[#F0B73F]">{sectionData.heading.highlight}</span>
            </h2>
          </div>

          {/* Right Part - Description */}
          <div className="w-full md:w-2/5 h-[144px]">
            <p className="text-white text-md md:text-md px-0">
              {sectionData.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-0">
          <div className="mr-10 hidden md:block">
            <img
              src={sectionData.images.left}
              alt="Lirisoft Home Page"
              className="object-cover w-full h-[511px] rounded"
            />
          </div>
          <div>
            <img
              src={sectionData.images.center}
              alt="Lirisoft Home Page"
              className="object-cover w-full h-[636px] rounded-lg"
            />
          </div>
          <div className="ml-10 hidden md:block">
            <img
              src={sectionData.images.right}
              alt="Lirisoft Home Page"
              className="object-cover w-full h-[511px] rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
