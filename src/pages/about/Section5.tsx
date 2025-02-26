import React from "react";

export default function Section5() {
  const images = [
    { Image: "./Ellipse39.png", Name: "Your Name", Post: "Designation" },
    { Image: "./Ellipse40.png", Name: "Your Name", Post: "Designation" },
    { Image: "./Ellipse41.png", Name: "Your Name", Post: "Designation" },
    { Image: "./Ellipse42.png", Name: "Your Name", Post: "Designation" },
    { Image: "./Ellipse43.png", Name: "Your Name", Post: "Designation" },
    { Image: "./Ellipse44.png", Name: "Your Name", Post: "Designation" },
  ];

  return (
    <section className="w-full px-4 md:px-0">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center py-10 md:py-20">
        {/* Section Title */}
        <div className="text-left w-full">
          <h1 className="text-3xl font-bold pt-4">Our Team</h1>
        </div>

        {/* Team Members Grid */}
        <div className="w-full pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((value, index) => (
              <div
                key={index}
                className="w-[300px] m-auto  md:w-[280px] h-[220px] flex flex-col items-center justify-center bg-white  rounded-md p-4"
              >
                <img
                  src={value.Image}
                  alt={`Image ${index + 1}`}
                  className="w-[140px] h-[140px] object-cover rounded-full"
                />
                <p className="text-[18px] font-bold mt-2">{value.Name}</p>
                <p className="text-[12px] text-[#6E8FAC]">{value.Post}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
