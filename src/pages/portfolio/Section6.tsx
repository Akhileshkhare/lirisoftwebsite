import React, { useState, useEffect } from "react";

export default function Section6() {
  interface Tab {
    title: string;
    src: string;
    description: string;
  }

  const [sectionData, setSectionData] = useState<{
    title1: string;
    highlight1: string;
    highlight2: string;
    tabs: Tab[];
  }>({
    title1: "",
    highlight1: "",
    highlight2: "",
    tabs: [],
  });

  useEffect(() => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Portfolio.section6))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, highlight2, tabs } = sectionData;

  return (
    <section className="w-full py-[120px] px-4 md:px-0 h-auto">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-normal text-left text-[#043A53] pb-16">
          {title1} <span className="text-[#043A53] font-bold">{highlight1}</span>, almost all{" "}
          <span className="text-[#043A53] font-bold">{highlight2}</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="flex flex-col w-[400px] h-auto bg-white border-[2px] border-gray-300 p-6 items-start"
            >
              <div className="flex flex-row">
                <img
                  src={tab.src}
                  alt={tab.title}
                  className="w-[40px] h-[40px] object-cover mr-4"
                />
                <h3 className="text-2xl font-semibold text-[#043A53] mb-2">
                  {tab.title}
                </h3>
              </div>
              <div
                className={`w-full flex flex-row text-[18px] text-gray-700 py-8 ${
                  index === 5 ? "h-[128px]" : "h-[160px]"
                }`}
              >
                {tab.description}
              </div>
              <div className="w-full flex flex-row font-bold items-center justify-end cursor-pointer text-[14px] text-[#043A53]">
                READ MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-6 h-6 text-[#F0B73F]"
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
          ))}
        </div>
      </div>
    </section>
  );
}
