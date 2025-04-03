import React, { useState, useEffect } from 'react';

export default function Section6() {
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
    fetch("https://liriapis.onrender.com/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.About.section5))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3 } = sectionData;

  return (
    <section className="w-full px-4 md:px-0 bg-[#F2F5F6]">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center md:justify-between h-auto md:h-[880px]">
        <div className="text-left w-full">
          <h1 className="text-3xl font-bold pt-20">{title1}</h1>
        </div>
        {/* Left Part */}
        <div className="relative md:h-[650px] h-[700px] w-full md:w-1/2 pl-0 md:pl-0 flex justify-center items-center overflow-hidden">
          {/* Rectangle 1 */}
          <div className="w-[76px] h-[139px] absolute top-[236px] left-[25px] rounded-[180.5px] border border-[#E28442] opacity-100 z-[12] 
            sm:w-[80px] sm:h-[150px] sm:top-[300px] sm:left-[20px]
            md:w-[76px] md:h-[139px] md:top-[236px] md:left-[25px]">
          </div>

          {/* Rectangle 2 */}
          <div className="w-[122px] h-[224px] absolute top-[350px] left-[28px] rounded-[180.5px] bg-[#F0B73F] opacity-100 z-[11] 
            sm:w-[120px] sm:h-[220px] sm:top-[400px] sm:left-[30px]
            md:w-[122px] md:h-[224px] md:top-[350px] md:left-[28px]">
          </div>

          {/* Rectangle 3 (Image) */}
  <div className="w-[214px]  h-[568px] absolute top-[75px] left-[89px] rounded-[180.5px] z-10 
    sm:w-[280px] sm:h-[500px] sm:top-[50px] sm:left-[80px]
    md:w-[270px] md:h-[509px] md:top-[75px] md:left-[89px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-cover w-full h-full rounded-[180.5px]"
            />
          </div>

          {/* Rectangle 4 */}
  <div className="w-[200px]   h-[568px] left-[155px] absolute top-[93px] left-[147px] rounded-[180.5px] bg-[#F0B73F] opacity-30 z-9 
            sm:w-[290px] sm:h-[530px] sm:top-[70px] sm:left-[100px]
            md:w-[284px] md:h-[522px] md:top-[93px] md:left-[147px]">
          </div>
        </div>
        {/* Right Part */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 md:h-[650px] pb-8 md:pb-0 flex justify-center items-start flex-col">
          <p className="text-left mb-6">{highlight1}</p>
          <button className="px-6 py-3 text-gray-900 font-semibold bg-yellow-400 rounded flex items-center space-x-2">
            <span>{highlight2}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5-5 5M18 12H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
