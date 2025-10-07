import React from "react";
import { SectionProps } from '../home/Section1';

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


export const Section4: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:SectionData=data || null;

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
              <a
                href={
                  tab.title === 'UX Design' ? '/services/UxDesign' :
                  tab.title === 'APP Development' ? '/services/AppDevelopment' :
                  tab.title === 'API Development' ? '/services/ApiDevelopment' :
                  tab.title === 'Automation' ? '/services/Automation' :
                  tab.title === 'Cyber Security' ? '/services/CyberSecurity' :
                  '#'
                }
                className="text-lg font-semibold text-[#043A53] text-left mb-12 w-full hover:text-[#F0B73F] transition-colors duration-200"
                style={{ cursor: 'pointer' }}
              >
                {tab.title}
              </a>
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
       
      </div>
    </section>
  );
}
