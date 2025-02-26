import React from "react";

export default function Section5() {
  const images = [
    { Image: "./Vector4.png", Text: "53+", Description: "Completed Projects" },
    { Image: "./Vector5.png", Text: "37M", Description: "Users Worldwide" },
    { Image: "./Vector6.png", Text: "4.3+", Description: "App Ratings" },
  ];

  return (
    <section className="w-full px-4 md:px-0 bg-[#753BBD] py-10">
      <div className="w-full max-w-6xl h-auto items-center justify-center mx-auto flex flex-col">
        {/* Responsive grid for different screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 p-0">
          {images.map((value, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] h-[200px] flex flex-col items-center bg-white rounded-md justify-center shadow-md px-6 py-4"
            >
              <img
                src={value.Image}
                alt={`Image ${index + 1}`}
                className="w-[84px] h-[84px] object-contain rounded-md"
              />
              <h1 className="text-4xl sm:text-5xl text-[#753BBD] font-bold py-2">
                {value.Text}
              </h1>
              <p className="text-md font-semibold text-center">
                {value.Description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
