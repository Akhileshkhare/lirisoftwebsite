import React from "react";

import { SectionProps } from '../home/Section1';

interface Tab {
  src: string;
  title: string;
  description: string;
}

export const Section6: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;
  const { title1, highlight1, highlight2, tabs } = sectionData;



  return (
    <section className="w-full py-[120px] px-4 md:px-0 h-auto">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-normal text-left text-[#043A53] pb-16">
          {title1} <span className="text-[#043A53] font-bold">{highlight1}</span>, almost all{" "}
          <span className="text-[#043A53] font-bold">{highlight2}</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
            {tabs.map((tab: Tab, index: number) => (
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

            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
