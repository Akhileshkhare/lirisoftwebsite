import React from "react";

export default function Section4() {
  const tabs = [
    { src: "/Group106.png", title: "UX Design" },
    { src: "/Group107.png", title: "APP Development" },
    { src: "/Group108.png", title: "API Development" },
    { src: "/Group109.png", title: "Automation" },
    { src: "/Group110.png", title: "Cyber Security" },
  ];

  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto bg-gray-100">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-8">
      <h2 className="text-4xl md:text-5xl font-normal text-left text-[#043A53] pb-16">
      The <span className="text-[#043A53] font-bold">Technology</span>, we <span className="text-[#043A53] font-bold">Work</span>
        </h2>        <div className="flex flex-wrap justify-center gap-6">
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
            <span>Know More</span>
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
