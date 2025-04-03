import React, { useState, useEffect } from 'react';

export default function Section3() {
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
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Portfolio.section3))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3 } = sectionData;

  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto">
      <div className="w-full max-w-7xl mx-auto flex md:flex-row flex-col items-center gap-10 md:gap-20">
        <div className="w-full md:w-1/2 pl-0 md:h-[800px] flex justify-center items-start">
          <div className="w-full h-[391px] md:h-[662.27px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:h-[800px] flex justify-center items-start flex-col">
          <p className="text-3xl md:text-[34px] font-normal text-left text-[#043A53] leading-snug md:leading-normal">
            {title1} <span className="font-bold">{highlight1}</span>, {title2} <span className="font-bold">{highlight2}</span>
          </p>
          <p className="text-1xl md:text-[17px] font-semibold text-left mt-4 leading-relaxed md:leading-loose">
            {title3}
          </p>
        </div>
      </div>
    </section>
  );
}
