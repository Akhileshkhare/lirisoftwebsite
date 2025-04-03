import React, { useState, useEffect } from 'react';

export default function Section2() {
  const [sectionData, setSectionData] = useState<{
    title1: string;
    highlight1: string;
    title2: string;
    imageSrc: string;
    imageAlt: string;
    highlight2: string;
    title3: string;
    appSolutions: { imageSrc: string; imageAlt: string; highlight2: string; title2: string }[]
  }>({
    title1: "",
    highlight1: "",
    title2: "",
    imageSrc: "",
    imageAlt: "",
    highlight2: "",
    title3: "",
    appSolutions: []
  });

  useEffect(() => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Portfolio.section2))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, appSolutions } = sectionData;

  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10 md:gap-20">
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-[90px] w-full px-4 md:px-20">
          <h2 className="text-3xl md:text-6xl font-normal md:text-left text-center text-[#043A53]">
            {title1} <span className="text-[#043A53] font-bold">{highlight1}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {appSolutions.map((item, index) => (
            <div key={index} className="flex flex-col bg-white rounded-xl w-full h-auto">
              {/* Image Part */}
              <div className="w-full h-[200px] md:h-[257px]">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Text Part */}
              <div className="text-left p-4 space-y-3 text-[#043A53]">
                <h3 className="text-sm md:text-md mt-0">
                  {item.highlight2}
                </h3>
                <p className="text-lg md:text-xl font-semibold border-b border-b-gray-400 border-b-[1px] pb-[6px]">
                  {item.title2}
                </p>
                <div className="flex flex-row font-bold items-center justify-end cursor-pointer text-[12px] text-[#043A53]">
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 w-5 h-5 text-[#F0B73F]"
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
