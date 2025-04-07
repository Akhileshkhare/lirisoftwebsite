import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Added import
import Footer from "./Footer";
import { API_BASE_URI } from "../config/apiConfig";

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

export default function Technology() {
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

  const navigate = useNavigate(); // Added hook

  useEffect(() => {
    fetch(`${API_BASE_URI}/api/homepage`) 
      .then((response) => response.json())
      .then((data) => setSectionData(data.Portfolio.section4))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3, tabs } = sectionData;

  return (
   <>
    <section className="w-full py-10 px-4 md:px-0 h-auto ">
           <div className="w-full h-[320px] mt-[90px] bg-[#F2F5F6] absolute top-0 left-0"></div>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative justify-center py-8">
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
      
      </div>
    </section>
    <Footer/>
   </>
  );
}
