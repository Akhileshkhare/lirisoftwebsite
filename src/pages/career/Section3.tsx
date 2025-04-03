import React, { useState, useEffect } from "react";

export default function Section3() {
  const [sectionData, setSectionData] = useState({
    title: "",
    imageSrc: "",
    highlight1:"",
    imageAlt: "",
  });

  useEffect(() => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Career.section3))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title,highlight1, imageSrc, imageAlt } = sectionData;

  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-left text-gray-900 pb-16">
          {title} <span className="text-[#043A53]">{highlight1}</span>
        </h2>
        <div
          style={{ width: "80%" }}
          className="flex flex-row justify-center gap-6"
        >
          <div className="w-full p-6 flex items-center justify-center relative">
            <img src={imageSrc} alt={imageAlt} className="rounded-xl" />
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg absolute inset-0 m-auto">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
