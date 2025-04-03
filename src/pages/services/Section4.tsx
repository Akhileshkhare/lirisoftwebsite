import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

export default function Section4() {
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
      .then((data) => setSectionData(data.Service.section4))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3 } = sectionData;

  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto bg-gray-100">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-6 relative py-2">
        <div className="w-full pl-0 flex justify-center items-start flex-col">
          <p className="text-3xl md:text-[34px] font-normal text-left text-[#043A53] leading-snug md:leading-normal">
            <span className="font-bold">{highlight1} </span>{title1}
          </p>
          <p className="text-1xl md:text-[15px] text-[#12141D] text-left mt-4 leading-relaxed">
            {title2}
          </p>
        </div>
        <div className="w-full rounded-md bg-white pl-0 md:h-auto flex flex-col md:flex-row items-center justify-center items-stretch pt-0 gap-3">
          <div className="w-full p-0 h-[640px] md:h-[640px] relative flex items-start flex-col">
            <div className="flex w-full justify-center items-center flex-col">
              <button className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white border-gray-200 border p-3 rounded-full shadow-sm flex items-center justify-center">
                <FaPlay size={12} className="rotate-180" />
              </button>
              <img
                src={imageSrc}
                alt={imageAlt}
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[80%] h-full object-cover pt-10"
              />
              <button className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white border-gray-200 border p-3 rounded-full shadow-sm flex items-center justify-center">
                <FaPlay size={12} />
              </button>
            </div>
            <div className="p-10 pl-24 text-[#12141D] flex flex-col gap-4">
              <h1 className="font-bold">{highlight2}</h1>
              <p>{title3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
