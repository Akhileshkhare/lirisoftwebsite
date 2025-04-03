import React, { useState, useEffect } from "react";

interface Tab {
  title: string;
  src: string;
}

interface SectionData {
  title1: string;
  highlight1: string;
  title2: string;
  imageSrc: string;
  imageAlt: string;
  highlight2: string;
  title3: string;
  tabs: Tab[];
}

export default function Section4() {
  const [sectionData, setSectionData] = useState<SectionData>({
    title1: "",
    highlight1: "",
    title2: "",
    imageSrc: "",
    imageAlt: "",
    highlight2: "",
    title3: "",
    tabs: [],
  });

  useEffect(() => {
    fetch("https://liriapis.onrender.com/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Portfolio.section4))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3, tabs } = sectionData;

  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto bg-gray-100">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-8">
        <h2 className="text-4xl md:text-5xl font-normal text-left text-[#043A53] pb-16">
          {title1} <span className="text-[#043A53] font-bold">{highlight1}</span>, {title2} <span className="text-[#043A53] font-bold">{highlight2}</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="flex flex-col w-[400px] h-[280px] bg-white border-[2px] border-gray-300 pt-8 pl-8 items-center justify-center text-center"
            >
              <p className="text-lg font-semibold text-[#043A53] text-left mb-12 w-full">
                {tab.title}
              </p>
              <div className="w-full h-auto flex items-center justify-center overflow-hidden">
                <img
                  src={tab.src}
                  alt={tab.title}
                  className="h-[175px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <button className="px-6 mt-12 py-3 text-gray-900 font-semibold bg-yellow-400 rounded flex items-center space-x-2">
          <span>{title3}</span>
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
    </section>
  );
}
