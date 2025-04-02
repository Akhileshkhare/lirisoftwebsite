import React, { useState, useEffect } from 'react';

export default function Section3() {
  const [sectionData, setSectionData] = useState({
    title: "",
    images: [],
    buttonText: "",
  });

  useEffect(() => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.About.section3))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title, images, buttonText } = sectionData;

  return (
    <section className="w-full px-4 md:px-0">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center py-10 md:py-20">
        {/* Title Section */}
        <div className="text-left w-full">
          <h1 className="text-3xl md:text-4xl font-bold pt-4">
            {title}
          </h1>
        </div>

        {/* Image Grid */}
        <div className="w-full pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:gap-16 gap-6 p-0">
            {images.map((src, index) => (
              <div key={index} className="w-full h-auto flex items-center justify-center bg-white border border-gray-300 md:px-12 px-4 py-4">
                <img
                  src={src}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-auto max-w-[150px] md:max-w-[200px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <button className="px-6 py-3 mt-10 text-gray-900 font-semibold bg-yellow-400 rounded flex items-center space-x-2">
          <span>{buttonText}</span>
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
