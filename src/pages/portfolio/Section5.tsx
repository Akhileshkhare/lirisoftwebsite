import React, { useState, useEffect } from "react";

interface ImageData {
  Image: string;
  Text: string;
  Description: string;
}

interface SectionData {
  images: ImageData[];
}

export default function Section5() {
  const [sectionData, setSectionData] = useState<SectionData>({
    images: [],
  });

  useEffect(() => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Portfolio.section5))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { images } = sectionData;

  return (
    <section className="w-full px-4 md:px-0 bg-[#043a53] py-10"> {/* Updated background color */}
      <div className="w-full max-w-6xl h-auto items-center justify-center mx-auto flex flex-col">
        {/* Responsive grid for different screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 p-0">
          {images.map((value, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] h-[200px] flex flex-col items-center bg-[#e0f7fa] rounded-md justify-center shadow-md px-6 py-4"> {/* Updated card background color */}
              <img
                src={value.Image}
                alt={value.Description}
                className="w-[84px] h-[84px] object-contain rounded-md"
              />
              <h1 className="text-4xl sm:text-5xl text-[#043a53] font-bold py-2"> {/* Updated text color */}
                {value.Text}
              </h1>
              <p className="text-lg font-bold text-center text-[#01579b]"> {/* Updated description text color */}
                {value.Description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
