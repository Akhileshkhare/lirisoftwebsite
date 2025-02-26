import React from 'react';

export default function Section4() {
  const images = [
    { Image: "./Vector4.png", Text: "53+", Description: "Completed Projects" },
    { Image: "./Vector5.png", Text: "37M", Description: "Users Worldwide" },
    { Image: "./Vector6.png", Text: "4.3+", Description: "App Ratings" },
  ];

  return (
    <section className="w-full px-4 md:px-0 bg-[#753BBD] py-10 md:py-20">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Stats Grid */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {images.map((value, index) => (
            <div key={index} className="flex flex-col items-center bg-white justify-center w-[280px] p-6 rounded-lg shadow-lg">
              <img 
                src={value.Image} 
                alt={`Icon ${index + 1}`} 
                className="w-24 h-24 object-contain rounded-md"
              />
              <h1 className="text-4xl text-[#753BBD] font-bold my-4">{value.Text}</h1>
              <p className="text-sm text-gray-700 font-bold text-center">{value.Description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
