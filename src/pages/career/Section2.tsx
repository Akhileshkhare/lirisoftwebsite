import React, { useState, useEffect } from "react";
import { API_BASE_URI } from "../../config/apiConfig";

export default function Section2() {
  const [sectionData, setSectionData] = useState({
    title1: "",
    highlight1: "",
    imageSrc1: "",
    imageAlt1: "",
    imageSrc2: "",
    imageAlt2: "",
    imageSrc3: "",
    imageAlt3: "",
    imageSrc4: "",
    imageAlt4: "",
  });

  useEffect(() => {
    fetch(`${API_BASE_URI}/api/homepage`) 
      .then((response) => response.json())
      .then((data) => setSectionData(data.Career.section2))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const {
    title1,
    highlight1,
    imageSrc1,
    imageAlt1,
    imageSrc2,
    imageAlt2,
    imageSrc3,
    imageAlt3,
    imageSrc4,
    imageAlt4,
  } = sectionData;

  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto bg-gray-100">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-left text-gray-900 pb-16">
          {title1} <span className="text-[#043A53]">{highlight1}</span>
        </h2>
        <div className="w-[80%] flex flex-col md:flex-row justify-center gap-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <img src={imageSrc1} alt={imageAlt1} className="w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <img src={imageSrc2} alt={imageAlt2} className="w-full h-auto object-cover" />
            <img src={imageSrc3} alt={imageAlt3} className="w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <img src={imageSrc4} alt={imageAlt4} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
