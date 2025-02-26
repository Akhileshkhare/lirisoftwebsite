import React from 'react';

export default function Section3() {
  const images = [
    "./image1.png",
    "./image2.png",
    "./image3.png",
    "./image4.png",
    "./image5.png",
    "./image6.png",
  ];

  return (
    <section className="w-full px-4 md:px-0">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center py-10 md:py-20">
        {/* Title Section */}
        <div className="text-left w-full">
          <h1 className="text-3xl md:text-4xl font-bold pt-4">
            Our Current Partners
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
      </div>
    </section>
  );
}
